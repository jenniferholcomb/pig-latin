const vowels = ["a", "e", "i", "o", "u"];

// Utility Logic
function isEmpty() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    } 
  }
  return false;
}
  
function checkSingleVowel(inputString){//vowel
  if(vowels.includes(inputString.charAt(0))){
    console.log(inputString);
    return true; // vowel
  } else {
    console.log(inputString);
    return false; // cosntanant
  }
}

// function checkSingleString(string){
//   if(strings.includes(string.charAt(0))){
//     console.log(string);
//     return true; // string
//   } else {
//     console.log(string);
//     return false; // cosntanant
//   }
// }
// function onlyCharacters(text) {
//   return /^[a-zA-Z]+$/.test(str);
//   }
// }
function handleFormSubmission(e){
 e.preventDefault();

  const inputString = document.getElementById("input-text").value;
  console.log("input-text: ", inputString);
  
  console.log("checkSingleVowel: ", checkSingleVowel);
 
  // const stringToPigLatin = stringTranslator(inputString);
  // console.log("stringToPigLatin: ", stringToPigLatin);
}





window.addEventListener("load", function(){

  document.querySelector("form#pig-latin-form").addEventListener("submit", handleFormSubmission);
  document.querySelector("div#output-text").innerText;
});