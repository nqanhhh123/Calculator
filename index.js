const List= document.getElementsByClassName("button");
const result = document.getElementById("result");

console.log(List);

for(let number of List){
    number.addEventListener('click', function(){
        result.innerHTML += this.value;
    })
}


let Equal = () => {
    let res = result.innerHTML;
    let answer = eval(res);
    result.innerHTML = answer;
}

let Clear = () => {
    result.innerHTML = " ";
}

let Delete = () => {
    let string = result.innerHTML;
    result.innerHTML = string.substring(0, string.length-1);
}