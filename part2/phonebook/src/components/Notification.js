import React from 'react';

export const Notification = ({ message, errorMessage }) => {
  if (message === null) {
    return null;
  }
  if (errorMessage === null) {
    return null;
  }
  return (
    <>
      {message && <div className="success">{message}</div>}
      {errorMessage && <div className="error">{errorMessage}</div>}
    </>
  );
};
