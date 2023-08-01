import React from 'react';

const songs = [
  { id: 1, title: 'Back In Black' ,compositor: 'ACDC',year: 1980},
  { id: 2, title: 'PokerFace' ,compositor: 'LadyGaga',year: 2008},
  { id: 3, title: 'Ничего на свете лучше нету' ,compositor: 'Бременские МузыкантыC',year: 1970},
  { id: 4, title: 'False Alarm' ,compositor: 'The Weeknd',year: 2016},
  { id: 5, title: 'Humble' ,compositor: 'Kendrick Lamar',year: 2018}

];

const Songs = ({ onSelectSong }) => {
  const handleClick = (song) => {
    onSelectSong(song);
  };

  return (
    <div class="songlist">
      <h2 className='text-[22px]'>Список песен:</h2>
      <ul>
        {songs.map((song) => (
          <li className="text-[22px]" key={song.id} onClick={() => handleClick(song)}>
            {song.title} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;

