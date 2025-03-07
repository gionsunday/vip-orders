import React from 'react';

/**
 * Loader component to display a spinning animation while content is being loaded.
 * This is commonly used to indicate that data is being fetched or processed.
 */
const Loader = () => (
  <div className="flex justify-center items-center h-32">
    {/* Spinning animation */}
    <div
      className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
      aria-label="Loading"
    ></div>
  </div>
);

export default Loader;