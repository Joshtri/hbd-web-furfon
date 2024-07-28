document.addEventListener("DOMContentLoaded", () => {
    const confettiSettings = {
      target: 'confetti-canvas',
      max: 80,
      size: 1,
      animate: true,
      props: ['circle', 'square', 'triangle', 'line'],
      colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
      clock: 25,
      rotate: false,
      width: window.innerWidth,
      height: window.innerHeight,
      start_from_edge: false,
      respawn: true
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  });
  