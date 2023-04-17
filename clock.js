const secondHand = document.getElementById('secondHand');
const minuteHand = document.getElementById('minuteHand');
const hourHand = document.getElementById('hourHand');

document.addEventListener('DOMContentLoaded', function () {
var sektor = new Sektor('.sektor', {
  size: 200,
  stroke: 20,
  arc: false,
  angle: 310,
  sectorColor: '#bD2828',
  circleColor: '#DDD',
  fillCircle: true
});

// Change the angle without animation
// sektor.changeAngle(320);

// Animate the angle change
// sektor.animateTo(230, 700);

const updateClock = () => {

  const currentTime = new Date();
  const milliseconds = currentTime.getMilliseconds()
  const seconds = currentTime.getSeconds() + milliseconds / 1000
  const minutes = currentTime.getMinutes() + seconds / 60
  const hours = currentTime.getHours() + minutes / 60

  const secondsHandRotation = ((seconds / 60)) * 360;
  const minutesHandRotation = (minutes / 60) * 360;
  const hoursHandRotation = (hours / 12) * 360;

  secondHand.setAttribute('transform', `rotate(${secondsHandRotation} 50 50)`);
  minuteHand.setAttribute('transform', `rotate(${minutesHandRotation} 50 50)`);
  hourHand.setAttribute('transform', `rotate(${hoursHandRotation} 50 50)`);

  sektor.changeAngle(secondsHandRotation);

  setTimeout(updateClock, 100);
};

updateClock();

});

