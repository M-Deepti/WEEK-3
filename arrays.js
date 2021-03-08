g=()=>
{
    var numbers = new Array(0,1, 4, 9,16,25,36,49,64);
    numbers.push(81); 
    document.getElementById("para").innerHTML="after push "+numbers;  
    numbers.pop(); 
    document.getElementById("para1").innerHTML="after pop "+numbers;
    numbers.shift();
    document.getElementById("para2").innerHTML="after shift "+numbers;
    numbers.unshift(100);
    document.getElementById("para3").innerHTML="after unshift(100) "+numbers;
    x=numbers.slice(2,5);
    document.getElementById("para4").innerHTML="after slice(2,5) "+x;
    numbers.sort(function(a, b){return a-b});
    document.getElementById("para5").innerHTML="after sort "+numbers;
    l=numbers.length;
    document.getElementById("para6").innerHTML="after length "+l;
}    