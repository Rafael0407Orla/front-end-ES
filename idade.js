document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        var idade = parseInt(prompt("Qual a sua idade?"));

        if (idade >= 18) {
            alert("Você é maior de idade!");
        }
        else if (idade < 18) {
            alert("Desculpe, você é menor de idade!");
            window.location.href = "https://google.com";
        } else {
            alert("Erro. Digite novamente");
            window.location.href = "index.html";
        }
    }, 1000);
});
