// JS kod goes here
// todo: en fungerande html-sida med html och css innan man börjar
// implementera JSkod enligt anvisningarna (finns i readme.md)

// slänger upp en enkel print func
const printText = (input) => {
    const injectP0 = document.createElement('p')
    const inputText0 = document.createTextNode(input)
    injectP0.appendChild(inputText0)

    //header0 är den första diven i <header> i body
    const container0 = document.getElementById('header0')
    container0.appendChild(injectP0)
    container0.classList.add('class0')
}

const Obj = {
    name: "user"
}

printText(`Tjena ${Obj.name}, hur är läget?`)