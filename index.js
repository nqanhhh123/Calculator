const elements= document.getElementsByClassName("button");
const result = document.getElementById("result");
// let ChangeTheme = true;
let changeTheme = document.getElementById("ChangeTheme")

console.log(elements);
for(let number of elements){
    number.addEventListener('click', function(){
        result.innerHTML += this.value;
    })
}


const Equal = () => {
    let res = result.innerHTML;
    let answer = eval(res);
    result.innerHTML = answer;
}

const Clear = () => {
    result.innerHTML = " ";
}

const Delete = () => {
    let string = result.innerHTML;
    result.innerHTML = string.substring(0, string.length-1);
}

const ChangeTheme = () =>{
    for(var i = 0; i < elements.length; i++){
        elements[i].classList.toggle("dark_mode");
    }
}