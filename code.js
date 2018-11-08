var cube = document.querySelector('.cube');
let angel = 0;
console.log(cube);

cube.addEventListener('click', function() {
  angel += 90;
  this.style.transform = `rotateY(${angel}deg)`;
});