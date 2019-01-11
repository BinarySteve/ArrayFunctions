let myArray = [];
let total = 0
$('#button').on("click", ()=>{
arrayFunctions();
});

//onload set screen with table shown
$(()=> {
	$('#display').html(`Array: ${""} <br> Reversed: ${""} <br> Sorted: ${""} <br> Mean: ${""} <br> Total Numbers: ${""} <br> Highest Number: ${""} <br> Sum of Array: ${""}`);
	});
function arrayFunctions(){
let num = $('#nums').val();
myArray.push(num);
total += Number(num);
let highestNum = Math.max(...myArray);

//create a copy of the original array
let reversed= [...myArray].reverse();
//create a copy of the original array to sort it \\
let sorted = [...myArray].sort(function(a, b) {return a - b;});

let arrayLength = myArray.length;
let mean = total/arrayLength;

//print out the array, reversedArray, sortedArray, the highest number, length of array, mean of array and sum of the array\\
$('#display').html(`Array: ${myArray} <br> Reversed: ${reversed} <br> Sorted: ${sorted} <br> Mean: ${mean}<br> Total Numbers: ${arrayLength} <br> Highest Number: ${highestNum} <br> Sum of Array: ${total}`);


//reset text area so there is no value in it for the next input and focus back on input box
$("#nums").val("");
$('#nums').focus();
}

//Clear all numbers
$("#clear").on("click", ()=>{
myArray = [];
total = 0;	
$('#display').html(`Array: ${""} <br> Reversed: ${""} <br> Sorted: ${""} <br> Mean: ${""}<br> Total Numbers: ${""} <br> Highest Number: ${""} <br> Sum of Array: ${""}`);
	});