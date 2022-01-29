import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onTimeupdate, 1000));

function onTimeupdate(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));