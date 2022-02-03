let current=110;

const makeBigger = () => {
   current += 10;
   // alert('make bigger!');
   setFont();
};

const makeSmaller = () => {
   current -= 10;
   // alert('make smaller!');
   setFont();
};

function setFont() {
   document.querySelector('h1').style = fontSize = `${current}%`;
   document.querySelector('p').style.fontSize = `${current}%`;
}

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

