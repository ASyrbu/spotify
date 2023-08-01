import React, { useState } from 'react';
import Songs from './songs';


const Footer = () => {
    const [selectedSong, setSelectedSong] = useState(null);
  
    const handleSelectSong = (song) => {
      setSelectedSong(song.title);
    };
  
    return (
      <footer class = "footer">
        {selectedSong && <h3>Выбранная песня: {selectedSong}</h3>}
        <Songs onSelectSong={handleSelectSong} />
      </footer>
    );
  };

export default Footer;