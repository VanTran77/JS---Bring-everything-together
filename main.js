var evenBtn = document.getElementById('even-btn');
var oddBtn = document.getElementById('odd-btn');
var showNums = document.getElementById('result')
var firstName = document.getElementById('first-name');
// var firstNameBtn = document.getElementById('first-name-btn');
var lastName = document.getElementById('last-name');
var fullNameBtn = document.getElementById('full-name-btn');

var fullReport = document.getElementById('report');


evenBtn.addEventListener("click", function(){
    // remove old value if we click again
    showNums.innerHTML = "";
    for( var i=0; i<=10; i=i+2){
        // console.log(i);
        printNums(i);
    }
})

oddBtn.addEventListener("click", function(){
    // remove older numbers if we click again
    showNums.innerHTML = "";
    for( var i=0; i<=10; i++){
        if(i%2 === 1){
        printNums(i);
        }
    }
})

function printNums(nums){
    // showNums.innerHTML += nums
    var newList = document.createElement('li');
    newList.innerHTML = nums;
    // add new li to ul
    showNums.appendChild(newList);
}

// firstNameBtn.addEventListener("click", function(){
//     //get text from input
//     showNums.innerHTML = "";
//     var fName = firstName.value;
//     printNums(fName);
// })
// lastNameBtn.addEventListener("click", function(){
//     //get text from input
//     showNums.innerHTML = "";
//     var lName = lastName.value;
//     printNums(lName);
// })

function showFullName(){
    console.log(firstName);
}