const scoreDisplay = document.querySelector('#score');
const circles = document.querySelectorAll('.circle'); 
const startButton = document.querySelector('#startButton');
const endButton = document.querySelector('#endButton');

let score = 0;
let timer; 
let pace = 1500; 
let activeCircle = 0; //indicate the active circle
let round = 0; 

//create a random number and assign to circle to show picture
function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

/*A function to check if the clicked circle is same as the activeCircle */
function clickCircle(i) {
    //end game if user chosen the wrong circle in the beginning
    if (i !== activeCircle) {
        return endGame()
    }

    //show endButton and not show startButton
    //if the clicked circle is same as active circle
    round--
    score += 1; 
    scoreDisplay.textContent = score; 
}

//Access items of Nodelist 'circles' and their indices
for (const [i, circle] of circles.entries()) {
    circle.addEventListener('click', () => clickCircle(i)); 
}

//circles are not clickable before the game starts
function enableEvents() {
    for (let circle of circles) {
        circle.style.pointerEvents = "auto";
    }
}

function startGame() {
    startButton.style.visibility = 'hidden';
    endButton.style.visibility = 'visible';

    if (round >= 3) {
        return endGame()
    }

    /*A function make a circle ranndomly active
        if it is the same circle, then the function will run again until it is different activeCircle*/
        function pickNewCircle(activeCircle) {
            const newActiveCircle = getRandomInt(0,3);
            if (newActiveCircle !== activeCircle) {
                return newActiveCircle; 
            }
            return pickNewCircle(activeCircle); 
        }
            
    enableEvents(); 
    const newActiveCircle = pickNewCircle(activeCircle);

    circles[newActiveCircle].classList.toggle('active')
    circles[activeCircle].classList.remove('active')

    activeCircle = newActiveCircle; 

    //after pace-time of waiting, the startGame function is exicuted 
    timer = setTimeout(startGame, pace)
    pace -= 10; 
    round += 1; 

}

function endGame() {
    window.alert('Game ended');
    clearTimeout(timer);
    resetGame(); 
}

function resetGame() {
    window.location.reload();
}

startButton.addEventListener('click', startGame);
endButton.addEventListener('click', endGame);