import React, { useState } from 'react';
import AdminPanel from './AdminPanel';

export default function App() {
  const [admin, setAdmin] = useState(false);
  const [aboutContent, setAboutContent] = useState("Welcome to Brisbane's trusted plastering experts.");

  const handleUpdate = (section, content) => {
    if (section === 'about') setAboutContent(content);
    // Add more sections as needed
  };

  return (
    <main>
      <button onClick={() => setAdmin(a => !a)} style={{ position: 'absolute', top: 16, right: 16 }}>
        {admin ? 'Exit Admin' : 'Admin'}
      </button>
      {admin ? (
        <AdminPanel onUpdate={handleUpdate} />
      ) : (
        <>
          <h1>EW Plastering</h1>
          <p>{aboutContent}</p>
        </>
      )}
    </main>
  );
}
