document.getElementById("plusBur").addEventListener("click", () => {
  let numBur = document.getElementById("numBur");
  if (numBur.value >= 20) {
    numBur.value = "20";
  } else {
    numBur.value++;
  }
  document.getElementById("totalBur").innerHTML = numBur.value * 100;
});

document.getElementById("subBur").addEventListener("click", () => {
  let numBur = document.getElementById("numBur");
  if (numBur.value <= 0) {
    numBur.value = "0";
  } else {
    numBur.value--;
  }
  document.getElementById("totalBur").innerHTML = numBur.value * 100;
});

document.getElementById("plusPizz").addEventListener("click", () => {
  let numPizz = document.getElementById("numPizz");
  if (numPizz.value >= 20) {
    numPizz.value = "20";
  } else {
    numPizz.value++;
  }
  document.getElementById("totalPizz").innerHTML = numPizz.value * 200;
});

document.getElementById("subPizz").addEventListener("click", () => {
  let numPizz = document.getElementById("numPizz");
  if (numPizz.value <= 0) {
    numPizz.value = "0";
  } else {
    numPizz.value--;
  }
  document.getElementById("totalPizz").innerHTML = numPizz.value * 200;
});

document.getElementById("plusCake").addEventListener("click", () => {
  let numCake = document.getElementById("numCake");
  if (numCake.value >= 20) {
    numCake.value = "20";
  } else {
    numCake.value++;
  }
  document.getElementById("totalCake").innerHTML = numCake.value * 150;
});

document.getElementById("subCake").addEventListener("click", () => {
  let numCake = document.getElementById("numCake");
  if (numCake.value <= 0) {
    numCake.value = "0";
  } else {
    numCake.value--;
  }
  document.getElementById("totalCake").innerHTML = numCake.value * 150;
});

document.getElementById("plusHoney").addEventListener("click", () => {
  let numHoney = document.getElementById("numHoney");
  if (numHoney.value >= 20) {
    numHoney.value = "20";
  } else {
    numHoney.value++;
  }
  document.getElementById("totalHoney").innerHTML = numHoney.value * 190;
});

document.getElementById("subHoney").addEventListener("click", () => {
  let numHoney = document.getElementById("numHoney");
  if (numHoney.value <= 0) {
    numHoney.value = "0";
  } else {
    numHoney.value--;
  }
  document.getElementById("totalHoney").innerHTML = numHoney.value * 190;
});

document.getElementById("plusMo").addEventListener("click", () => {
  let numMo = document.getElementById("numMo");
  if (numMo.value >= 20) {
    numMo.value = "20";
  } else {
    numMo.value++;
  }
  document.getElementById("totalMo").innerHTML = numMo.value * 150;
});

document.getElementById("subMo").addEventListener("click", () => {
  let numMo = document.getElementById("numMo");
  if (numMo.value <= 0) {
    numMo.value = "0";
  } else {
    numMo.value--;
  }
  document.getElementById("totalMo").innerHTML = numMo.value * 150;
});

document.getElementById("plusBur").addEventListener("click", () => {
  document.getElementById("subTotal").innerHTML =
    Number(document.getElementById("totalBur").innerHTML) +
    Number(document.getElementById("totalPizz").innerHTML) +
    Number(document.getElementById("totalCake").innerHTML) +
    Number(document.getElementById("totalHoney").innerHTML) +
    Number(document.getElementById("totalMo").innerHTML);
});

document.getElementById("subBur").addEventListener("click", () => {
  document.getElementById("subTotal").innerHTML =
    Number(document.getElementById("totalBur").innerHTML) +
    Number(document.getElementById("totalPizz").innerHTML) +
    Number(document.getElementById("totalCake").innerHTML) +
    Number(document.getElementById("totalHoney").innerHTML) +
    Number(document.getElementById("totalMo").innerHTML);
});

document.getElementById("plusPizz").addEventListener("click", () => {
  document.getElementById("subTotal").innerHTML =
    Number(document.getElementById("totalBur").innerHTML) +
    Number(document.getElementById("totalPizz").innerHTML) +
    Number(document.getElementById("totalCake").innerHTML) +
    Number(document.getElementById("totalHoney").innerHTML) +
    Number(document.getElementById("totalMo").innerHTML);
});

document.getElementById("subPizz").addEventListener("click", () => {
  document.getElementById("subTotal").innerHTML =
    Number(document.getElementById("totalBur").innerHTML) +
    Number(document.getElementById("totalPizz").innerHTML) +
    Number(document.getElementById("totalCake").innerHTML) +
    Number(document.getElementById("totalHoney").innerHTML) +
    Number(document.getElementById("totalMo").innerHTML);
});

document.getElementById("plusCake").addEventListener("click", () => {
  document.getElementById("subTotal").innerHTML =
    Number(document.getElementById("totalBur").innerHTML) +
    Number(document.getElementById("totalPizz").innerHTML) +
    Number(document.getElementById("totalCake").innerHTML) +
    Number(document.getElementById("totalHoney").innerHTML) +
    Number(document.getElementById("totalMo").innerHTML);
});

document.getElementById("subCake").addEventListener("click", () => {
  document.getElementById("subTotal").innerHTML =
    Number(document.getElementById("totalBur").innerHTML) +
    Number(document.getElementById("totalPizz").innerHTML) +
    Number(document.getElementById("totalCake").innerHTML) +
    Number(document.getElementById("totalHoney").innerHTML) +
    Number(document.getElementById("totalMo").innerHTML);
});

document.getElementById("plusHoney").addEventListener("click", () => {
  document.getElementById("subTotal").innerHTML =
    Number(document.getElementById("totalBur").innerHTML) +
    Number(document.getElementById("totalPizz").innerHTML) +
    Number(document.getElementById("totalCake").innerHTML) +
    Number(document.getElementById("totalHoney").innerHTML) +
    Number(document.getElementById("totalMo").innerHTML);
});

document.getElementById("subHoney").addEventListener("click", () => {
  document.getElementById("subTotal").innerHTML =
    Number(document.getElementById("totalBur").innerHTML) +
    Number(document.getElementById("totalPizz").innerHTML) +
    Number(document.getElementById("totalCake").innerHTML) +
    Number(document.getElementById("totalHoney").innerHTML) +
    Number(document.getElementById("totalMo").innerHTML);
});

document.getElementById("plusMo").addEventListener("click", () => {
  document.getElementById("subTotal").innerHTML =
    Number(document.getElementById("totalBur").innerHTML) +
    Number(document.getElementById("totalPizz").innerHTML) +
    Number(document.getElementById("totalCake").innerHTML) +
    Number(document.getElementById("totalHoney").innerHTML) +
    Number(document.getElementById("totalMo").innerHTML);
});

document.getElementById("subMo").addEventListener("click", () => {
  document.getElementById("subTotal").innerHTML =
    Number(document.getElementById("totalBur").innerHTML) +
    Number(document.getElementById("totalPizz").innerHTML) +
    Number(document.getElementById("totalCake").innerHTML) +
    Number(document.getElementById("totalHoney").innerHTML) +
    Number(document.getElementById("totalMo").innerHTML);
});

document.getElementById("plusBur").addEventListener("click", () => {
  document.getElementById("Tax").innerHTML =
    0.1 * document.getElementById("subTotal").innerHTML;
});

document.getElementById("subBur").addEventListener("click", () => {
  document.getElementById("Tax").innerHTML =
    0.1 * document.getElementById("subTotal").innerHTML;
});

document.getElementById("plusPizz").addEventListener("click", () => {
  document.getElementById("Tax").innerHTML =
    0.1 * document.getElementById("subTotal").innerHTML;
});

document.getElementById("subPizz").addEventListener("click", () => {
  document.getElementById("Tax").innerHTML =
    0.1 * document.getElementById("subTotal").innerHTML;
});

document.getElementById("plusCake").addEventListener("click", () => {
  document.getElementById("Tax").innerHTML =
    0.1 * document.getElementById("subTotal").innerHTML;
});

document.getElementById("subCake").addEventListener("click", () => {
  document.getElementById("Tax").innerHTML =
    0.1 * document.getElementById("subTotal").innerHTML;
});

document.getElementById("plusHoney").addEventListener("click", () => {
  document.getElementById("Tax").innerHTML =
    0.1 * document.getElementById("subTotal").innerHTML;
});

document.getElementById("subHoney").addEventListener("click", () => {
  document.getElementById("Tax").innerHTML =
    0.1 * document.getElementById("subTotal").innerHTML;
});

document.getElementById("plusMo").addEventListener("click", () => {
  document.getElementById("Tax").innerHTML =
    0.1 * document.getElementById("subTotal").innerHTML;
});

document.getElementById("subMo").addEventListener("click", () => {
  document.getElementById("Tax").innerHTML =
    0.1 * document.getElementById("subTotal").innerHTML;
});

document.getElementById("plusBur").addEventListener("click", () => {
  document.getElementById("Bill").innerHTML =
    Number(document.getElementById("Tax").innerHTML) +
    Number(document.getElementById("subTotal").innerHTML);
});

document.getElementById("subBur").addEventListener("click", () => {
  document.getElementById("Bill").innerHTML =
    Number(document.getElementById("Tax").innerHTML) +
    Number(document.getElementById("subTotal").innerHTML);
});

document.getElementById("plusPizz").addEventListener("click", () => {
  document.getElementById("Bill").innerHTML =
    Number(document.getElementById("Tax").innerHTML) +
    Number(document.getElementById("subTotal").innerHTML);
});

document.getElementById("subPizz").addEventListener("click", () => {
  document.getElementById("Bill").innerHTML =
    Number(document.getElementById("Tax").innerHTML) +
    Number(document.getElementById("subTotal").innerHTML);
});

document.getElementById("plusCake").addEventListener("click", () => {
  document.getElementById("Bill").innerHTML =
    Number(document.getElementById("Tax").innerHTML) +
    Number(document.getElementById("subTotal").innerHTML);
});

document.getElementById("subCake").addEventListener("click", () => {
  document.getElementById("Bill").innerHTML =
    Number(document.getElementById("Tax").innerHTML) +
    Number(document.getElementById("subTotal").innerHTML);
});

document.getElementById("plusHoney").addEventListener("click", () => {
  document.getElementById("Bill").innerHTML =
    Number(document.getElementById("Tax").innerHTML) +
    Number(document.getElementById("subTotal").innerHTML);
});

document.getElementById("subHoney").addEventListener("click", () => {
  document.getElementById("Bill").innerHTML =
    Number(document.getElementById("Tax").innerHTML) +
    Number(document.getElementById("subTotal").innerHTML);
});

document.getElementById("plusMo").addEventListener("click", () => {
  document.getElementById("Bill").innerHTML =
    Number(document.getElementById("Tax").innerHTML) +
    Number(document.getElementById("subTotal").innerHTML);
});

document.getElementById("subMo").addEventListener("click", () => {
  document.getElementById("Bill").innerHTML =
    Number(document.getElementById("Tax").innerHTML) +
    Number(document.getElementById("subTotal").innerHTML);
});