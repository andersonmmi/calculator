let calculator = document.querySelector('.calculator');
let input = document.querySelector('input');
let result = 0
console.log(input);
calculator.addEventListener('click',(e)=>{
  if (e.target !== e.currentTarget){
    e.target.classList.toggle('click');
    setTimeout(()=>{e.target.classList.toggle('click')},100);
    if (e.target.innerHTML === "="){
      result = eval(input.value);
      input.value = result;
    } else if (e.target.innerHTML === "C"){
      input.value = '';
    } else if (e.target.innerHTML === "x"){
      input.value += "*";
    } else {
      console.log(e.target.innerHTML);
      input.value += e.target.innerHTML;
    }
  }
})
