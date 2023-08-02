import React from 'react';
import spotify from './spotify-logo-transparent-free-png.webp';

const Header = ({nameref}) => {
  return (
    <header>
      <h1 ref={nameref}>Spotify</h1>
        <img class="spotifylogo" src={spotify} alt='logo' ></img>
    </header>
  );
}

export default Header;




