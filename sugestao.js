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
                textoReceita = ' 「 ✦ Bife à moda da Toscana ✦ 」 <br> <br> 「 ✦ Risoto de cogumelos ✦ 」 <br> <br> 「 ✦ Espaguete à bolonhesa ✦ 」 <br> <br> 「 ✦ Coq au Vin ✦ 」 <br> <br> 「 ✦ Lasanha de carne ✦ 」 ';
                break;
            case 'Vinho Branco':
                textoReceita = ' 「 ✦ Salmão assado com ervas ✦ 」 <br> <br>  「 ✦ Risoto de limão com camarão ✦ 」 <br> <br>  「 ✦ Frango ao curry com leite de coco ✦ 」 <br> <br> 「 ✦  Salada de camarão com abacate✦ 」 <br> <br> 「 ✦ Massa com molho de limão e ervilhas ✦ 」 ';
                break;
            case 'Vinho Seco':
                textoReceita = ' 「 ✦ Tagliatelle ao molho de cogumelos ✦ 」 <br> <br> 「 ✦ Lombo de porco assado com ervas ✦ 」 <br> <br> 「 ✦ Linguine com camarão ao alho e óleo ✦ 」 <br> <br> 「 ✦ Risoto de funghi ✦ 」 <br> <br> 「 ✦ Frango ao vinho ✦ 」 ';
                break;
            case 'Espumante':
                textoReceita = ' 「 ✦ Salada de frutas tropicais ✦ 」 <br> <br> 「 ✦ Mini quiches de queijo e presunto ✦ 」 <br> <br> 「 ✦ Camarões ao molho de laranja ✦ 」 <br> <br> 「 ✦ Bruschettas de tomate e manjericão ✦ 」 <br> <br> 「 ✦ Canapés de salmão defumado ✦ 」 ';
                break;
            case 'Vinho Rosé':
                textoReceita = ' 「 ✦ Salada de camarão com manga ✦ 」 <br> <br> 「 ✦ Carpaccio de beterraba ✦ 」 <br> <br> 「 ✦ Ceviche de peixe branco ✦ 」 <br> <br> 「 ✦ Tartelette de tomate e queijo de cabra ✦ 」 <br> <br> 「 ✦ Espetinhos de frutas grelhadas ✦ 」 ';
                break;
            default:
                textoReceita = 'Selecione um tipo de vinho para ver a receita.';
        }
  
        // Exibir texto da receita na tela
        divTexto.innerHTML = textoReceita;

    });
});
