function Input(){
	var userInput = document.getElementById('input').value;
	var result= factorialize(userInput);
	document.getElementById('result').innerHTML = result;
}



function factorialize(num){

if (num===0 || num===1)
	return 0;

for (var i = num - 1; i >= 1; i--) {
	num *= i ;
}
	return num;

}