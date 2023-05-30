'use client';

import { useState } from 'react';

export default function Chat() {
  const [output, setOutput] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const chatInput = formData.get('chat-input');
    if (chatInput) {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chatInput }),
      });
      const data = await res.json();
      setOutput(data.data.chatInput);
      e.target.reset();
    }
  }

  return (
    <div>
      <div>
        <p>{output}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='chat-input'>Message:</label>
        <textarea
          name='chat-input'
          id='chat-input'
          autoFocus
          required
          cols='30'
          rows='2'
        ></textarea>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}
