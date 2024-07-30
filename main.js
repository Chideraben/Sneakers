




    
    function myBox()  {
document.getElementById("drop-down").classList.toggle("show")
}
myBox();


let cartQuantity = 0;
myFunct();
function myFunct(){
console.log( document.getElementById("zero").innerHTML = `${cartQuantity} `)
}

//add cart
myAdd();
function myAdd(){
cartQuantity = cartQuantity + 1;
console.log( document.getElementById("zero").innerHTML =  `${cartQuantity}`)
}

//-1 add()
mySubstract();
function mySubstract(){
cartQuantity = cartQuantity - 1;
console.log(document.getElementById("zero").innerHTML = cartQuantity);
}
myAdd_again();
function myAdd_again(){
cartQuantity = cartQuantity +3;
console.log(document.getElementById("zero").innerHTML = cartQuantity);
}
myReset();
function myReset(){
cartQuantity = 0;
console.log(document.getElementById("zero").innerHTML = cartQuantity)
}

