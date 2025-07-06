import React, { useState } from 'react';
import { Plus, User } from 'lucide-react';

const NotesPage = ({ onNavigate }) => {
  const [notes, setNotes] = useState([]);
  const [showAddNote, setShowAddNote] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', content: '' });

  const addNote = () => {
    if (newNote.title.trim() || newNote.content.trim()) {
      setNotes([...notes, { 
        id: Date.now(), 
        title: newNote.title || 'Untitled Note',
        content: newNote.content,
        createdAt: new Date().toLocaleString()
      }]);
      setNewNote({ title: '', content: '' });
      setShowAddNote(false);
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleLogout = () => {
    onNavigate('landing');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 px-6 py-4 flex justify-between items-center border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-500 rounded-lg"></div>
          <h1 className="text-xl font-medium">QuickNotes</h1>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowAddNote(true)}
            className="bg-gray-700 hover:bg-gray-600 p-2 rounded-md transition-colors"
          >
            <Plus size={20} />
          </button>
          <div className="relative group">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer">
              <User size={16} />
            </div>
            <div className="absolute right-0 top-10 bg-gray-800 rounded-lg shadow-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
              <button
                onClick={handleLogout}
                className="text-sm text-gray-300 hover:text-white px-3 py-1 rounded transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">My Notes</h2>
          <button
            onClick={() => setShowAddNote(true)}
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm transition-colors"
          >
            Add Note
          </button>
        </div>

        {notes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative mb-8">
              <div className="w-32 h-20 bg-pink-200 rounded-lg shadow-lg transform rotate-3"></div>
              <div className="absolute top-2 left-2 w-32 h-20 bg-pink-300 rounded-lg shadow-lg transform -rotate-2"></div>
              <div className="absolute top-4 left-4 w-32 h-20 bg-pink-400 rounded-lg shadow-lg"></div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-300">No notes yet</h3>
            <p className="text-gray-500 mb-6">Start creating notes to keep track of your thoughts and ideas</p>
            <button
              onClick={() => setShowAddNote(true)}
              className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-md transition-colors"
            >
              Add Note
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {notes.map((note) => (
              <div
                key={note.id}
                className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors cursor-pointer border border-gray-700"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-white truncate">{note.title}</h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNote(note.id);
                    }}
                    className="text-gray-400 hover:text-red-400 text-sm"
                  >
                    ×
                  </button>
                </div>
                <p className="text-gray-400 text-sm mb-3 line-clamp-3">{note.content}</p>
                <p className="text-xs text-gray-500">{note.createdAt}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {showAddNote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Add New Note</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={newNote.title}
                  onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter note title..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Content</label>
                <textarea
                  value={newNote.content}
                  onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                  placeholder="Write your note here..."
                />
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={addNote}
                className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md transition-colors"
              >
                Add Note
              </button>
              <button
                onClick={() => {
                  setShowAddNote(false);
                  setNewNote({ title: '', content: '' });
                }}
                className="flex-1 bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-md transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesPage;