let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
  button.addEventListener('click', (e) => {
    let btnText = e.target.innerHTML;

    if (btnText == '=') {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    } 
    else if (btnText == 'AC') {
      string = "";
      input.value = string;
    } 
    else if (btnText == '<img src="svg.svg">') {  
      string = string.substring(0, string.length - 1);
      input.value = string;
    } 
    else if (btnText == '()') {
    }
    else {
      string += btnText;
      input.value = string;
    }
  });
});
