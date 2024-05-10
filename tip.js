let calculateBtn = document.getElementById("calculate");
let resetBtn = document.getElementsByClassName("reset-btn")[0];
let showTip = document.getElementById("showTip");
let showTotalBill = document.getElementById("showTotalBill");

calculateBtn.addEventListener("click", function (event) {
  event.preventDefault(); // this is preventing "fill empty input" prompt
  let billAmount = Number(document.getElementById("bill").value);
  let tipPercent = Number(document.getElementById("service").value);
  let people = Number(document.getElementById("people").value);

  // console.log(`bill amount: ${billAmount},tip: ${tipPercent}, people: ${people}`)

  if (billAmount == "" || people == "") {
    return alert("Please give a valid numbers...");
  }
  let totalTip = (tipPercent / 100) * billAmount;
  // console.log(`total tip : ${totalTip}`)

  let tipPerEach = Math.ceil(totalTip / people);
  // console.log(`tip foe each : ${tipPerEach}`)
  // console.log(totalTip / Number(people))
  let billPerEach = Math.ceil((totalTip + billAmount) / people);
  //   console.log(billPerEach);

  let tipMessage = `Tip amount for Each person is ₹ ${tipPerEach}/-`;
  let totalBillMessage = `Bill amount including tip for Each person is ₹ ${billPerEach}/-`;

  showTip.textContent = tipMessage;
  showTotalBill.textContent = totalBillMessage;
});

resetBtn.addEventListener("click", function () {
  showTip.textContent = "";
  showTotalBill.textContent = "";
  // console.log("hii")
});
