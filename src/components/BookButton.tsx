import React from 'react';
import { Button } from 'react-bootstrap';

interface BookButtonProps {
  name: string;
  link?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const BookButton: React.FC<BookButtonProps> = ({ name, link }) => {
  return (
    <Button
      variant="outline-light"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        borderRadius: '0',
        borderWidth: '3px',
        fontFamily: 'Quicksand, sans-serif',
        textTransform: 'uppercase',
        fontWeight: 600,
        padding: '0.5rem 1.2rem',
        letterSpacing: '0.05em',
        zIndex: 100
      }}
    >
      {name}
    </Button>
  );
};
export default BookButton;
