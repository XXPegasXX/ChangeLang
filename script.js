/*console.log ("Hello, World2!")

class Hamster {
    constructor(age, name){
        this.age = age;
        this.name = name;
    }

    eat(){
        console.log("I am "+this.name+", I like everything");
    }

    sleep(){
        console.log("I am "+this.name+", I like zzzzzz");
    }

    die(){
        console.log(this.name+", was a good hamster");
    }
}

const hamster = new Hamster(2, "Hammy");



console.log(hamster);*/
//99 bottles
/*for (var b = 99; b>0; b--){
    if (b>2) {
        console.log(
            b+" bottles of beer on the wall, "+b+" bottles of beer.\n Take one down and pass it around,"
            +(b-1)+" bottles of beer on the wall."
        );
    }
    else if (b>1) {
            console.log(
                `${b} bottles of beer on the wall, ${b} bottles of beer.
Take one down and pass it around, ${b-1} bottle of beer on the wall.`
            );
    }
    else {
        console.log(
            `${b} bottle of beer on the wall, ${b} bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
    
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, ${b+98} bottles of beer on the wall.`);
    }   
    
}*/

// Fizz Buzz 
/*
for (var a=1; a<34; a++){
    if ((a%15)==0) {
        console.log('fizz buzz');
    } else if ((a%3)==0) {
        console.log('fizz');
    } else if ((a%5)==0) {
        console.log('buzz');
    } else {
       console.log(a);
    }
}
*/

//Replacer
function layoutFix(str, reverse) {
    replacer = {
      "q": "й", "w": "ц", "e": "у", "r": "к", "t": "е", "y": "н", "u": "г",
      "i": "ш", "o": "щ", "p": "з", "[": "х", "]": "ъ", "a": "ф", "s": "ы",
      "d": "в", "f": "а", "g": "п", "h": "р", "j": "о", "k": "л", "l": "д",
      ";": "ж", "'": "э", "z": "я", "x": "ч", "c": "с", "v": "м", "b": "и",
      "n": "т", "m": "ь", ",": "б", ".": "ю", "/": ".",
    };

    reverse && Object.keys(replacer).forEach(key => {
      let v = replacer[key]
      delete (replacer[key])
      replacer[v] = key
    })
   
    console.log(replacer)
   
    for (i = 0; i < str.length; i++) {
      if (replacer[str[i].toLowerCase()] != undefined) {
        if (str[i] == str[i].toLowerCase()) {
          replace = replacer[str[i].toLowerCase()];
          console.log(replace, str[i], str);
        } else if (str[i] == str[i].toUpperCase()) {
          replace = replacer[str[i].toLowerCase()].toUpperCase();
        }
   
        str = str.replace(str[i], replace);
      }
    }
   
    return str;
  }

  function changeLang () {
    const myText = document.getElementById("textarea").value;
    let changedText = layoutFix(myText);
    document.getElementById("textarea").value = changedText;
  }
  
  
   
  //console.log(layoutFix('ghbdtn')) // привет
  //console.log(layoutFix('руддщ', true)) // hello
  
