import React from 'react';

export const Footer = () => {
  const footerStyles = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16,
  };
  return (
    <div style={footerStyles}>
      <br />
      <em>
        Note app, Department of Computer Science, University of Helsinki 2021
      </em>
    </div>
  );
};
