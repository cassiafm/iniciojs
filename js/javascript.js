function enter(){
    
    var email = document.getElementById("frmemail").value
    var password = document.getElementById("frmpassword").value
    console.log(email)
    console.log(password)
    if (email=="email@email" && password=="1234"){
    alert("Realizado com sucesso!")}
    else{
        alert("Email ou senha incorretos.")
    }


}
function somar(){
    var n1 = parseInt(prompt("digite o n1"))
    var n2 = parseInt(prompt("digite o n2"))
    console.log(typeof(n1))
    console.log(typeof(n2))
    var resultado = n1 + n2
    console.log(resultado)
}

function subtrair(){
    var n1 = parseInt(prompt("digite o n1"))
    var n2 = parseInt(prompt("digite o n2"))
    console.log(typeof(n1))
    console.log(typeof(n2))
    var resultado = n1 - n2
    console.log(resultado)
}

function multiplicar(){
    var n1 = parseInt(prompt("digite o n1"))
    var n2 = parseInt(prompt("digite o n2"))
    console.log(typeof(n1))
    console.log(typeof(n2))
    var resultado = n1 * n2
    console.log(resultado)
}

function dividir(){
    var n1 = parseInt(prompt("digite o n1"))
    var n2 = parseInt(prompt("digite o n2"))
    console.log(typeof(n1))
    console.log(typeof(n2))
    var resultado = n1 / n2
    console.log(resultado)
}

function q(){
    var n1 = parseInt(prompt("digite o numero"))
    console.log(typeof(n1))
    var resultado = n1 * n1
    console.log(resultado)
}
