let common=document.querySelector ('.common')
let div=document.querySelectorAll('.div1')
const tek=document.querySelector('tek')
for (let i = 0; i < div.length; i++) {
    console.log(div[i]);
  if(i%2==0){

    div[i].style.backgroundColor="red"
  }
  else{
    div[i].style.backgroundColor="blue"

  }
    
}

let random=Math.floor(Math.randim()*10)
console.log(random);