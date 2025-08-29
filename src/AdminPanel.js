import React, { useState } from 'react';

export default function AdminPanel({ onUpdate }) {
  const [content, setContent] = useState('');
  const [section, setSection] = useState('about');
  const [message, setMessage] = useState('');

  const handleSave = () => {
    // In a real app, save to backend or localStorage
    setMessage('Content saved! (This is a demo. No backend)');
    if (onUpdate) onUpdate(section, content);
  };

  return (
    <div style={{ padding: 24, background: '#fffbe7', borderRadius: 8, maxWidth: 500, margin: '40px auto' }}>
      <h2>Admin Panel</h2>
      <label>
        Section:
        <select value={section} onChange={e => setSection(e.target.value)} style={{ marginLeft: 8 }}>
          <option value="about">About</option>
          <option value="services">Services</option>
          <option value="contact">Contact</option>
        </select>
      </label>
      <br /><br />
      <label>
        Content:
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={6}
          style={{ width: '100%', marginTop: 8 }}
        />
      </label>
      <br />
      <button onClick={handleSave} style={{ marginTop: 12, padding: '8px 16px', background: '#1a237e', color: '#fff', border: 'none', borderRadius: 4 }}>
        Save
      </button>
      {message && <p style={{ color: 'green', marginTop: 10 }}>{message}</p>}
    </div>
  );
}
