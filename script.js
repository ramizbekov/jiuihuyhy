let counter = 0;

document.getElementById('sendButton').addEventListener('click',() => {
  const input = document.getElementById('numberInput').value;
  const output = document.getElementById('output');

  if(!isNaN(input)){
    counter = parseInt(input)|| 0;
    document.getElementById('counterValue').textContent = counter;
    // output.textContent = You entered: ${counter};
  } else{
    output.textContent = "Please enter a valid number.";
  }
});

document.getElementById('incrementButton').addEventListener('click', () => {
  counter ++;
  document.getElementById('counterValue').textContent = counter;
});

document.getElementById('decrementButton').addEventListener('click',() =>{
  counter --;
  document.getElementById('counterValue').textContent = counter;
});

document.getElementById('colorPicker').addEventListener('input', (suhrob) => {
  document.getElementById('counterValue').style.color = suhrob.target.value;
});