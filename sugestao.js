document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.dropdown-list_item');
    const botao = document.getElementById('botao');
    const divTexto = document.getElementById('texto');
  
    dropdownItems.forEach(item => {
        item.addEventListener('click', selecionarItem);
    });
  
    function selecionarItem() {
        dropdownItems.forEach(item => {
            item.classList.remove('selected');
        });
        this.classList.add('selected');
  
        const dropdownSelect = document.querySelector('.dropdown-select .select');
        dropdownSelect.textContent = this.textContent;
    }
  
    botao.addEventListener('click', function() {
        const textoSelecionado = document.querySelector('.selected').textContent;
        let textoReceita;
  
        // Definir texto da receita com base no tipo de vinho selecionado
        switch (textoSelecionado) {
            case 'Vinho Tinto':
                textoReceita = 'Receita para Vinho Tinto: Bife ao molho de vinho tinto.';
                break;
            case 'Vinho Branco':
                textoReceita = 'Receita para Vinho Branco: Risoto de camarão ao molho branco.';
                break;
            case 'Vinho Seco':
                textoReceita = 'Receita para Vinho Seco: Tagliatelle ao pesto com frango grelhado.';
                break;
            case 'Espumante':
                textoReceita = 'Receita para Espumante: Canapés de salmão defumado.';
                break;
            case 'Vinho Rosé':
                textoReceita = 'Receita para Vinho Rosé: Salada de frutas tropicais.';
                break;
            default:
                textoReceita = 'Selecione um tipo de vinho para ver a receita.';
        }
  
        // Exibir texto da receita na tela
        divTexto.textContent = textoReceita;
    });
});
