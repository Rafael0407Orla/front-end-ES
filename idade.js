var idade = parseInt(prompt("Qual a sua idade?"));

if (idade >= 18) {
    alert("Você é maior de idade!");
}
else if (idade < 18) {
    window.location.href = "https://google.com";
} else {
    alert("Erro. Digite novamente");
    window.location.href = "index.html";
}