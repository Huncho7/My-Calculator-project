document.querySelector(".addition").addEventListener("click", function () {
  let input1 = Number(document.querySelector(".input1").value);
  let input2 = Number(document.querySelector(".input2").value);
  document.querySelector(".answer").value = input1 + input2;
});

document.querySelector(".subtraction").addEventListener("click", function () {
  let input1 = Number(document.querySelector(".input1").value);
  let input2 = Number(document.querySelector(".input2").value);
  document.querySelector(".answer").value = input1 - input2;
});

document.querySelector(".division").addEventListener("click", function () {
  let input1 = Number(document.querySelector(".input1").value);
  let input2 = Number(document.querySelector(".input2").value);
  document.querySelector(".answer").value = input1 / input2;
});

document.querySelector(".multiplication").addEventListener("click", function () {
  let input1 = Number(document.querySelector(".input1").value);
  let input2 = Number(document.querySelector(".input2").value);
  document.querySelector(".answer").value = input1 * input2;
  });

document.querySelector(".square").addEventListener("click", function () {
  let input1 = Number(document.querySelector(".input1").value);
  let input2 = Number(document.querySelector(".input2").value);
  document.querySelector(".answer").value = input1 ** input2;
});

const main = document.querySelector('main');
const overlay = document.querySelector('.overlay')

const addHidden = function(){
  main.classList.add("hidden");
  overlay.classList.add("hidden");
}

const removeHidden = function(){
  main.classList.remove("hidden");
  overlay.classList.remove("hidden")
  
}

document.querySelector('.open').addEventListener('click', removeHidden);
document.querySelector('.close').addEventListener('click', addHidden);

document.addEventListener('keydown', (event) => {
  if(event.key === 'Escape' && !main.classList.contains("hidden")){
    main.classList.add("hidden");
    overlay.classList.add("hidden");
  }
})


