window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visuals = document.querySelector('.visuals');
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#98d360",
    "#6082d3"
  ]

  pads.forEach((pad, index) => {
    pad.addEventListener('click', function() {
        sounds[index].currentTime = 0;
        sounds[index].play();
        
        createBubbles(index);
    });
  });

  const createBubbles = (index) => {
    const bubble = document.createElement('div');
    visuals.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function() {
      visuals.removeChild(this);
    })
  }

});