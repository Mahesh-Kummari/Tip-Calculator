let calculateBtn = document.getElementById('calculate');
let resetBtn = document.getElementsByClassName("reset-btn")[0];
let showTip = document.getElementById("showTip")

calculateBtn.addEventListener("click", function(event){
    event.preventDefault() // this is preventing "fill empty input" prompt
    let billAmount = document.getElementById('bill').value ;
    let tipPercent = document.getElementById("service").value;
    let people = document.getElementById("people").value;

    // console.log(`bill amount: ${billAmount},tip: ${tipPercent}, people: ${people}`)

    if(billAmount == '' || people == ''){
        return alert("Please give a valid nubers...")
    }
    let totalTip = (Number(tipPercent) / 100 ) * Number(billAmount)
    // console.log(`total tip : ${totalTip}`)

    let tipPerEach = Math.ceil(totalTip / Number(people))
    // console.log(`tip foe each : ${tipPerEach}`)
    // console.log(totalTip / Number(people))

    let message = `Tip amount for Each person is ₹ ${tipPerEach}/-`
    
    showTip.textContent = message;


});

resetBtn.addEventListener("click", function(){
    showTip.textContent = '';
    // console.log("hii")
});