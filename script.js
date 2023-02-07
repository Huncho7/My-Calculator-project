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
