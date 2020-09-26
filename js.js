//Task 1
let bar = prompt("Enter your word");
let rab = "";
for (let i = bar.length-1; i >=0 ; i--) {
    rab=rab+bar[i]
}
alert(rab);








//Task 2
let tiv1 = parseInt(prompt("Enter first number"))
let tiv2 = parseInt(prompt("Enter second number"))
let min_value = tiv1>tiv2 ? tiv2 : tiv1;
let max_value = tiv1>tiv2 ? tiv1 : tiv2;
let arr = new Array;
let count = 0;


for (let i = min_value; i <= max_value; i++) {
    let prime_flag = true;
    for (let j = 2; j < i; j++) {
        if (i%j == 0) {
            prime_flag = false;
            break;
        }   
    }
    
    if (prime_flag) {
        arr.push(i); 
    }
}
if(arr.length == 1){
    alert("Your prime number is " + arr[0]);
}
else if(arr.length == 0){
    alert("You don't have prime numbers in this range");
}
else{
alert("Your smallest prime number is  " + arr[0] + " and biggest is " + arr[(arr.length)-1]);
}
    



