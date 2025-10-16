import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { ApplyPage } from './components/ApplyPage';
import { ChaptersPage } from './components/ChaptersPage';
import { AboutPage } from './components/AboutPage';
import { SafeguardingPage } from './components/SafeguardingPage';
import { FinalePage } from './components/FinalePage';
import { ContactPage } from './components/ContactPage';
import { ChapterDetailPage } from './components/ChapterDetailPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedChapter, setSelectedChapter] = useState<string>('');

  const handleNavigate = (page: string, chapterId?: string) => {
    setCurrentPage(page);
    if (chapterId) {
      setSelectedChapter(chapterId);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'chapters':
        return <ChaptersPage onNavigate={handleNavigate} />;
      case 'chapter-detail':
        return <ChapterDetailPage chapterId={selectedChapter} onNavigate={handleNavigate} />;
      case 'apply':
        return <ApplyPage />;
      case 'safeguarding':
        return <SafeguardingPage onNavigate={handleNavigate} />;
      case 'finale':
        return <FinalePage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      {renderPage()}
    </Layout>
  );
}