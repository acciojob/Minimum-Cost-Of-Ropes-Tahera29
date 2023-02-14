//your code here
function mincosttoformrope(a) {
	a.preventDefault();
var inputElement=document.querySelector('input').value;
var arr=inputElement.split(',');// to convert into array
	arr.sort(function(a,b) {return a-b});//a-b sort in increasing order b-a for decreeazing
	var cost=0;
	while(arr.length>1)
		{
			var res= Number(arr[0])+Number(arr[1]);
			arr.shift();
			arr.shift();//arr.splice(0,2);
			arr.push(res);
			cost+=res;
			
			arr.sort(function(a,b){return a-b});
			
		}
	document.getElementById("result").textContent=cost;

	
}