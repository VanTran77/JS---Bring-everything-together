var evenBtn = document.getElementById('even-btn');
var oddBtn = document.getElementById('odd-btn');
var showNums = document.getElementById('result')

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