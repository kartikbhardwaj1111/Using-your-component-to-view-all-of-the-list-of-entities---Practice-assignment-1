import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.name} className="book-image" />
      <h2>{book.name}</h2>
      <h3>By {book.author}</h3>
      <p>Genre: {book.genre}</p>
    </div>
  );
};

export default BookCard;