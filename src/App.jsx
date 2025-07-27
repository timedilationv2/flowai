import React from 'react';
import NavSidebar from './components/NavSidebar';
import LandingPage from './components/LandingPage';

export default function App() {
  return (
    <div className="flex h-screen">
      <NavSidebar />
      <main className="flex-1 overflow-auto">
        <LandingPage />
      </main>
    </div>
  );
}
