import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime.seconds);
};
player.on('timeupdate', throttle(onPlay, [wait = 1000]));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);