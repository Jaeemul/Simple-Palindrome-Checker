const input = document.getElementById("text-input");
const submit = document.getElementById("check-btn");
const output = document.getElementById("result");

function cleanInputString(str){
  const regex = /[^a-z0-9]/g;
  return str.toLowerCase().replace(regex,'');
}

function palindromeCheck(input){
  if(input==''){
    alert(`Please input a value`);
    return;
  }
  let cleanInput = cleanInputString(input);
  let mid = cleanInput.length/2;
  
  let j = cleanInput.length-1;
  let i = 0;
  while(i < mid){
    if(cleanInput[i]==cleanInput[j]){
      i++;
      j--;
    }
    else{
      output.innerHTML = `<p><b class="text-result">${input}</b><span class="text-rest"> is not a palindrome</span></p>`;
      return;
    }
  }
  output.innerHTML = `<p><b class="text-result">${input}</b><span class="text-rest"> is a palindrome</span></p>`;
  return;
}

submit.addEventListener("click",()=>{
  palindromeCheck(input.value);
  });