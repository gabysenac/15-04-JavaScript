// Aqui está como voce pode interpretar essa expressão regular:
// ^ - Representa o início de uma string.
// [0-9] - Representa qualquer dígito numerico de 0 a 9.
// + -  Indica o que o dígito pode ocorrer uma ou mais vezes.
// $ -  Representa o final de uma string.


// // 01- Exemplo
// const regex = /^\d+$/;

// const string1 = "12345";
// const string2 = "abc123";
// const string3 = "987654321";

// console.log(regex.text(string1)); //true
// console.log(regex.text(string2)); //false
// console.log(regex.text(string3)); //true

// // 02- Exemplo
// const regex = /^[A-Za-a]+$/;
// console.log(regex.test("abcd")); //true
// console.log(regex.text("abc123")); //false

// // 3- Exemplo Email
// const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
// console.log(regex.test("text@example.com")); //true
// console.log(regex.text("invalide_email")); //false

// const regex = /\d+/g;
// const string = "Eu temjo 3maças e 5 laranjas.";
// const numeros = string.match(regex);
// console.log(numeros); // ["3", "5"]

const regex = /^(\+55)?\s?(?:\(?\d{2}\)?\s?)?(?:9\s?)?[6-9]\d{3}\s?-?\d{4}$/;
// Explicação
// ^ e $ são ancoras que indicam o inicio e o fim de uma String, respectivamente.
// (\-55)? é um r=grupo de captura opcional que corresponde a um codigo de país "+55". O codigo \s? correspomde a um espaçp em branco opcional.
// (?:\(?\d{2}\)?\s?)? é um grupo não captador opcional que corresponde 

function verificaNumeroCelular(numero){
    return regex.test(numero)
}
 
const numeroTelefone = prompt("Digite um número de celular no formato brasileiro (ex. 9XXXXXXXXX):00")
 
// verificar se o numero de telefone é valido
 
const ehValido = verificaNumeroCelular(numeroTelefone)
 
// exibir o resultado
 
if (ehValido) {
    console.log("O número de celular é valido.")
} else {
    console.log("O núumero de celular é invalido.")
}