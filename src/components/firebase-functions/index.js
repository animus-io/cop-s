/**
 * Firebase Cloud Function to send email via Resend when a new application is submitted.
 *
 * SETUP INSTRUCTIONS:
 * 1. Install Firebase CLI: npm install -g firebase-tools
 * 2. Login: firebase login
 * 3. Init functions in your project: firebase init functions
 * 4. Copy this file to functions/index.js
 * 5. Install dependencies: cd functions && npm install resend
 * 6. Set Resend API key: firebase functions:config:set resend.api_key="YOUR_RESEND_API_KEY" resend.admin_email="admin@yourdomain.com"
 * 7. Deploy: firebase deploy --only functions
 */

const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { Resend } = require("resend");

// Initialize Resend with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);

exports.sendApplicationEmail = onDocumentCreated(
  {
    document: "applications/{applicationId}",
    secrets: ["RESEND_API_KEY"],
  },
  async (event) => {
    const snapshot = event.data;
    if (!snapshot) {
      console.log("No data associated with the event");
      return;
    }

    const data = snapshot.data();
    const applicationId = event.params.applicationId;
    const adminEmail = process.env.ADMIN_EMAIL || "admin@copsimulation.pk";

    try {
      // Send email via Resend
      const { error } = await resend.emails.send({
        from: "COP Simulation <noreply@yourdomain.com>",
        to: [adminEmail],
        subject: `New Application: ${data.fullName} - ${data.preferredChapter}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
              New Participant Application
            </h1>
            
            <h2 style="color: #374151;">Applicant Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Full Name:</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${
                  data.fullName
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Age:</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${
                  data.age
                } years old</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">City:</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${
                  data.city
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Preferred Chapter:</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${
                  data.preferredChapter
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">School/Institution:</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${
                  data.school
                }</td>
              </tr>
            </table>
            
            <h2 style="color: #374151; margin-top: 20px;">Parent/Guardian Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Name:</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${
                  data.parentName
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Contact:</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${
                  data.parentContact
                }</td>
              </tr>
            </table>
            
            <h2 style="color: #374151; margin-top: 20px;">Motivation</h2>
            <p style="background: #f9fafb; padding: 15px; border-radius: 8px; line-height: 1.6;">
              ${data.motivation}
            </p>
            
            <h2 style="color: #374151; margin-top: 20px;">Consents</h2>
            <ul style="line-height: 1.8;">
              <li>Parental Consent: ${
                data.parentalConsent ? "✅ Yes" : "❌ No"
              }</li>
              <li>Media Consent: ${data.mediaConsent ? "✅ Yes" : "❌ No"}</li>
            </ul>
            
            ${
              data.consentFormUrl
                ? `
              <h2 style="color: #374151; margin-top: 20px;">Consent Form</h2>
              <p>
                <a href="${data.consentFormUrl}" 
                   style="display: inline-block; background: #10b981; color: white; padding: 10px 20px; 
                          text-decoration: none; border-radius: 6px;">
                  Download Consent Form
                </a>
              </p>
            `
                : ""
            }
            
            <hr style="margin-top: 30px; border: none; border-top: 1px solid #e5e7eb;" />
            <p style="color: #6b7280; font-size: 12px;">
              Application ID: ${applicationId}<br/>
              Submitted: ${new Date(data.submittedAt).toLocaleString()}
            </p>
          </div>
        `,
      });

      if (error) {
        console.error("Failed to send email:", error);
        return;
      }

      // Update the document to mark email as sent
      await snapshot.ref.update({
        emailSent: true,
        emailSentAt: new Date().toISOString(),
      });

      console.log(`Email sent successfully for application: ${applicationId}`);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }
);
