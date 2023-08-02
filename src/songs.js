import React from 'react';
import playlist from './playlist';

const Songs = ({ onSelectSong, nameref }) => {
  const handleClick = (song) => {
    onSelectSong(song);
    if (nameref && nameref.current) {
      nameref.current.textContent = song.title + '    ' + song.compositor + '   ' + song.year
    }
  };

  return (
    <div class="songlist">
      <h2>Список песен:</h2>
      <table>
        {playlist.map((song) => (
          <tr class="stroka" key={song.id} onClick={() => handleClick(song)}>
            <td class="title"> {song.title} </td>
            <td class="year"> {song.year} </td>
            <td class="compositor"> {song.compositor} </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Songs;

