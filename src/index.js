const COLOR_DELAY = 1000;
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
const bodyBgc = document.querySelector('body');
const startColor = document.querySelector('button[data-action = "start"]');
const stopColor = document.querySelector('button[data-action = "stop"]');

startColor.addEventListener('click', () => {
    colorChange.start();
});
stopColor.addEventListener('click', () => {
    colorChange.stop();
});

const colorChange = {
    intervalID: null,
    isActive: false,
    start() { 
        if (this.isActive) {
            return;
        };
        this.isActive = true;
        this.intervalID = setInterval(() => {
            const rand = Math.floor(Math.random() * colors.length);
            bodyBgc.setAttribute('style', `background-color: ${colors[rand]}`);
            console.log(colors[rand]);
        }, COLOR_DELAY);
    },
    stop() {
        clearInterval(this.intervalID);
        this.isActive = false;
    }
};




