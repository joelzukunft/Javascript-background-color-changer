const colors = ['yellow', 'green', 'blue', '#f15025', 'rgba(125,125,125,0.5)'];

const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * colors.length);
  let buttonColor = 1;
  if(random==4){
    buttonColor = random - 1;
  } else {
    buttonColor = random + 1;
  }
    
  const body = document.body;
  body.style.backgroundColor = colors[random];
  btn.style.backgroundColor = colors[buttonColor];
})