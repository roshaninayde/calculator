// let InputBox = document.getElementById('InputBox')
// let button = document.querySelectorAll('button')

// let string = ''

// buttons.forEach(elements)=>{
//     element.addEventsListener('click', (b)=>{
//        if(b.target.innerText == '='){
//         string = string(eval(string))
//         InputBox.value = string;
//        }
//       else if(b.target.innerText =='AC'){
//            string = ''
//            InputBox.value = string;
//       }
//        else if (b.target.innerText == 'DEL'){
//         string = string.substring(0,string.length-1)
//         InputBox.value = string;
//        }
//        else if (b.target.id == 'plusMinus'){
//         string = string(-eval(string))
//         InputBox.value = string;
//        }
//         else if{
//             string += b.target.innerText
//         }


let InputBox = document.getElementById('InputBox')
let buttons = document.querySelectorAll('button')

let string = ''

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
       if (b.target.innerText == '=') {
            string = eval(string);
            InputBox.value = string;
       } else if (b.target.innerText == 'AC') {
            string = '';
            InputBox.value = string;
       } else if (b.target.innerText == 'DEL') {
            string = string.substring(0, string.length - 1);
            InputBox.value = string;
       } else if (b.target.id == 'plusMinus') {
            string = -eval(string);
            InputBox.value = string;
       } else {
            string += b.target.innerText;
            InputBox.value = string;
       }
    });
});

      










