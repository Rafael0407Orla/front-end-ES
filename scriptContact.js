

function ColectInfo(){
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    var mensagem = (`EMAIL ENVIADO! \n Nome ${name} \n Email ${email} \n Menssagem ${message}`)
    alert(mensagem)
}