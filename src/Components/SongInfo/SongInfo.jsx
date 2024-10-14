import React from 'react';

const SongInfo = ({ songName, songAuthor }) => {
  return (
    <div className="flex items-center justify-center gap-4 p-8 mt-16">
      <h2 className="text-2xl font-bold">{songName}</h2>
      <p className="text-2xl font-medium">By: {songAuthor}</p>
    </div>
  );
};

export default SongInfo;
