const songsReducer = () => {
    return [
        {title: 'No scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:35'},
        {title: 'I want it that way', duration: '1:45'},
        {title: 'Allstar', duration: '3:15'},
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};