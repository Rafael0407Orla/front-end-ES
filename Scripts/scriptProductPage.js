var productValue = document.querySelector('#dynamically-price').innerText

function comprar() {
    alert('Produto adicionado  ao carrinho com sucesso!');
    document.getElementById('cupomUser').value = '';
    document.getElementById('numberSelect').value = '1';
    getValue()
}

function getValue() {
    var selectElement = document.getElementById('numberSelect').value;
    const multiplicatedPrice = productValue * selectElement;
    document.querySelector('#dynamically-price').textContent = multiplicatedPrice.toFixed(2);
    applyCupom(applyCupom.disabled = false)
}

function applyCupom() {
    var cupom = document.querySelector('#cupomUser').value;
    var status = document.getElementById('statusCupom');

    if (!applyCupom.disabled) {
        if (cupom === 'FIAP2024') {
            var preco = parseInt(document.getElementById('dynamically-price').textContent);
            var preco = preco - (preco / 100 * 10);
            document.getElementById('dynamically-price').textContent = preco.toFixed(2);
            status.textContent = 'Cupom Aplicado!(10% de desconto)';
            status.style.color = "green";
            applyCupom.disabled = true
        }

        else if (cupom.trim() != '') {
            status.textContent = 'Cupom Inválido!'
            status.style.color = "red"
            applyCupom.disabled = false
        }
        else {
            status.textContent = ''
        }
    }
    else {
        status.textContent = 'Cupom já aplicado!'
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.querySelector('.comment-list');

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const commentText = commentInput.value.trim();
        if (commentText !== '') {
            const newComment = document.createElement('div');
            newComment.classList.add('single-commentDiv');
            const commentTextElement = document.createElement('p')
            commentTextElement.textContent = commentText;
            newComment.appendChild(commentTextElement);
            commentList.appendChild(newComment);
            commentInput.value = '';
        }
    });
});