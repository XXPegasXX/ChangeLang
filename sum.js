function calculate () {
const moneyVasya = document.getElementById("Vasya");
const moneyPetya = document.getElementById("Petya");
const moneyKolya = document.getElementById("Kolya");
const moneyTotal = parseInput(moneyVasya)+parseInput(moneyPetya)+parseInput(moneyKolya);
document.getElementById("total").value = moneyTotal;
}

function parseInput(input) {
    const inputValue = parseInt(input.value);
    if (isNaN(inputValue)) { return 0; }
    return inputValue;
}