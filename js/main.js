const color = ['red','green','blue']
const button = document.querySelector('button')
const backgroundText = document.querySelector('#background-color')

// on button click with run changeBackgroundColor function
button.addEventListener('click',changeBackgroundColor)

function changeBackgroundColor(){
    // generate random number using the getRandomNumber function
    const randomNumber = getRandomNumber()
    // add text of random color
    backgroundText.innerHTML = color[randomNumber]
    // change background to random color
    document.body.style.backgroundColor = color[randomNumber]
}

// generates random number between 1 - length of color array
function getRandomNumber(){
    return Math.floor(Math.random()*color.length)
}