/// <reference types="vite/client" />

// interface ImportMetaEnv {
//   readonly VITE_FIREBASE_API_KEY: string;
//   readonly VITE_FIREBASE_AUTH_DOMAIN: string;
//   readonly VITE_FIREBASE_PROJECT_ID: string;
//   readonly VITE_FIREBASE_STORAGE_BUCKET: string;
//   readonly VITE_FIREBASE_SENDER_ID: string;
//   readonly VITE_FIREBASE_APP_ID: string;
//   readonly VITE_RESEND_API_KEY: string;
//   readonly ADMIN_EMAIL: string;
// }

// interface ImportMeta {
//   readonly env: ImportMetaEnv;
// }

interface ImportMetaEnv {
  readonly VITE_RESEND_API_KEY: string;
  readonly VITE_ADMIN_EMAIL: string;
  readonly VITE_SENDER_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
