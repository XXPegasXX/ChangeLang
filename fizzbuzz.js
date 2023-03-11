// Fizz Buzz 

let header = document.createElement("h1");
header.textContent = "Hello, World!";
const root = document.body;
root.appendChild(header);
console.log(header.value);

for (var a=1; a<34; a++){
    if ((a%15)==0) {
        console.log('fizz buzz');
        addParagraph('fizz buzz');
    } else if ((a%3)==0) {
        console.log('fizz');
        addParagraph('fizz');
    } else if ((a%5)==0) {
        console.log('buzz');
        addParagraph('buzz');
    } else {
        addParagraph(a);
       console.log(a);
    }
}

function addParagraph (str){
    let paragraph = document.createElement("p");
    paragraph.textContent = str;
    const root = document.body;
    root.appendChild(paragraph);
}

