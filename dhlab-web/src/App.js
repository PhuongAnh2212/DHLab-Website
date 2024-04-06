import React, { useState, useEffect } from 'react';
import './App.css'; // Optional: import CSS for styling

import htmlContent from './background.html'; // Import HTML content as a string

const App = () => {
  const [content, setContent] = useState(''); // State to hold HTML content

  useEffect(() => {
    // Fetch and set HTML content when component mounts
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch(htmlContent);
        const htmlString = await response.text();
        setContent(htmlString);
      } catch (error) {
        console.error('Error fetching HTML content:', error);
      }
    };

    fetchHtmlContent(); // Call the function to fetch HTML content
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div className="app-container">
      {/* Render HTML content using dangerouslySetInnerHTML */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default App;
