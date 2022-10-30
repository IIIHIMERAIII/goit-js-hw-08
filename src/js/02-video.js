import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const playerVimeo = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(storage_key);

if (currentTime) {
    playerVimeo.setCurrentTime(currentTime);
}

playerVimeo.on('timeupdate', throttle(currentTimeinStorage, 1000));

function currentTimeinStorage({ seconds }) {
    localStorage.setItem(STORAGE_KEY, seconds);
}