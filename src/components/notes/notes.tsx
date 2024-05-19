// Notes.tsx

import React, { useState } from 'react';
import './Notes.scss';

interface Note {
  id: number;
  title: string;
  text: string;
  isEditing: boolean;
}

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteTitle, setNoteTitle] = useState<string>('');
  const [noteText, setNoteText] = useState<string>('');

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (noteTitle.trim() && noteText.trim()) {
      const newNote = { id: Date.now(), title: noteTitle, text: noteText, isEditing: false };
      setNotes([...notes, newNote]);
      setNoteTitle('');
      setNoteText('');
    }
  };

  const handleDeleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleEditNote = (id: number) => {
    setNotes(notes.map(note => (note.id === id ? { ...note, isEditing: !note.isEditing } : note)));
  };

  const handleSaveNote = (id: number, newTitle: string, newText: string) => {
    setNotes(notes.map(note => (note.id === id ? { ...note, title: newTitle, text: newText, isEditing: false } : note)));
  };

  return (
    <div className="notes-container">
      <h1>Notlarım</h1>
      <form onSubmit={handleAddNote}> {/* Wrap input fields and button in a form */}
        <div className="note-input">
          <input
            type="text"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            placeholder="Not başlığı"
          />
          <input
            type="text"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Not içeriği"
          />
          <button type="submit">Add Note</button> {/* Change button type to submit */}
        </div>
      </form>
      <ul className="notes-list">
        {notes.map((note) => (
          <li key={note.id} className="note-item">
            {note.isEditing ? (
              <div className="note-content">
                <input
                  type="text"
                  defaultValue={note.title}
                  onBlur={(e) => handleSaveNote(note.id, e.target.value, note.text)}
                />
                <input
                  type="text"
                  defaultValue={note.text}
                  onBlur={(e) => handleSaveNote(note.id, note.title, e.target.value)}
                />
              </div>
            ) : (
              <div className="note-content">
                <strong>{note.title}</strong>
                <p>{note.text}</p>
              </div>
            )}
            <div className="note-actions">
              <button onClick={() => handleEditNote(note.id)}>{note.isEditing ? 'Save' : 'Edit'}</button>
              <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
