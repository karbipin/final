import React, { useState } from "react";
import "../../css/Blogs/notes.css";
import bca from "../../images/bca.png";
import Navbar from "../navBar";
import AdLayout from "../AdLayout";
import Footer from "../Footer";

// Mock data for notes
const notes = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `BCA - Bachelors in Computer Application ${i + 1}`,
  description:
    "BCA is an undergraduate degree program focused on computer science, software development, and IT. It typically covers subjects like programming languages, databases, web development, networking, and software engineering.",
  seats: "35 Students seats",
  duration: "4 years course",
  image: bca, // Use the imported image
}));

// NotesCard Component
const NotesCard = ({ notes }) => {
  return (
    <div className="note-card">
      <img src={notes.image} alt={notes.title} className="note-image" />
      <div className="note-details">
        <span>{notes.seats}</span>
        <span>{notes.duration}</span>
      </div>
      <div className="note-info">
        <h2 className="note-title">{notes.title}</h2>
        <p className="note-description">{notes.description}</p>
        <button className="note-button">More about it...</button>
      </div>
    </div>
  );
};

// Notes Component
const Notes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(notes.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = notes.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <>
    <Navbar/>
    <AdLayout/>
    <div className="note-container">
      <h1 className="note-heading">Notes</h1>
      <div className="note-list">
        {currentItems.map((note) => (
          <NotesCard key={note.id} notes={note} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          &laquo; Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next &raquo;
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Notes; // Export the component, not the function call