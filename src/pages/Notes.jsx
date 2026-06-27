import { useState, useEffect } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  // Load notes
  useEffect(() => {
    const savedNotes = localStorage.getItem("studyflow-notes");

    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes
  useEffect(() => {
    localStorage.setItem(
      "studyflow-notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  // Add Note
  const addNote = () => {
    if (!title || !subject || !content) return;

    const newNote = {
      id: Date.now(),
      title,
      subject,
      content,
      pinned: false,
      createdAt: new Date().toLocaleDateString(),
    };

    setNotes([newNote, ...notes]);

    setTitle("");
    setSubject("");
    setContent("");
  };

  // Delete Note
  const deleteNote = (id) => {
    setNotes(
      notes.filter((note) => note.id !== id)
    );
  };

  // Pin Note
  const togglePin = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? {
              ...note,
              pinned: !note.pinned,
            }
          : note
      )
    );
  };

  // Search
  const filteredNotes = notes.filter(
    (note) =>
      note.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      note.subject
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  // Show pinned first
  const sortedNotes = [...filteredNotes].sort(
    (a, b) => b.pinned - a.pinned
  );

  return (
    <div className="notes-page">

      {/* Header */}
      <div className="notes-header">
        <h1>Notes Hub</h1>

        <p>
          Organize your study notes.
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search notes..."
        className="notes-search"
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
      />

      {/* Add Note */}
      <div className="note-form">

        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
        />

        <textarea
          placeholder="Write your notes..."
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
        />

        <button onClick={addNote}>
          Add Note
        </button>
      </div>

      {/* Notes Grid */}
      <div className="notes-grid">

        {sortedNotes.length === 0 && (
          <div className="empty-notes">
            <h3>No Notes Yet</h3>

            <p>
              Create your first study note.
            </p>
          </div>
        )}

        {sortedNotes.map((note) => (
          <div
            key={note.id}
            className="note-card"
          >
            {note.pinned && (
              <div className="pin-badge">
                📌 Pinned
              </div>
            )}

            <div className="subject-tag">
              {note.subject}
            </div>

            <h3>{note.title}</h3>

            <p className="note-content">
              {note.content}
            </p>

            <small>
              {note.createdAt}
            </small>

            <div className="note-actions">

              <button
                className="pin-btn"
                onClick={() =>
                  togglePin(note.id)
                }
              >
                {note.pinned
                  ? "Unpin"
                  : "Pin"}
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteNote(note.id)
                }
              >
                Delete
              </button>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Notes;