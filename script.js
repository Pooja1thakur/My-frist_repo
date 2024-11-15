let button = document.getElementById("submit-btn");
let input = document.getElementById("firstName");
// let userInput = document.getElementById('prompt-btn');

// console.log(input.value);

// let btn = document.getElementById('sample-btn');
// console.log(btn);

// userInput.addEventListener('click',function(){
//     let name = prompt('please enter your name');
//     alert(name);
// })

input.addEventListener("input", function (e) {
  console.log(e.target.value); //// e.target is input
  if (e.target.value.length > 0) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

button.addEventListener("click", function () {
  alert(`Hi my name is ${input.value}`);
});

button.addEventListener("mouseover", function () {
  if (!button.disabled) {
    button.style.color = "red";
  }
});

button.addEventListener("mouseout", function () {
  if (!button.disabled) {
    button.style.color = "black";
  }
});

// change
// input.value