function isEmpty() {
    for (let i=0; i < arguments.length; i++) {
      if (arguments[i].trim().length === 0) {
        return true;
      } 
    }
    return false;
  }
  

// function onlyCharacters(text) {
//   return /^[a-zA-Z]+$/.test(str);
//   }
// }

function handleFormSubmission(e){
 e.preventDefault();

  const inputString = document.getElementById("input-text").value;
  console.log("input-text: ", inputString);
 
  // const stringToPigLatin = stringTranslator(inputString);
  // console.log("stringToPigLatin: ", stringToPigLatin);
}

window.addEventListener("load", function(){

  document.querySelector("form#pig-latin-form").addEventListener("submit", handleFormSubmission);
  document.querySelector("div#output-text").innerText;
});