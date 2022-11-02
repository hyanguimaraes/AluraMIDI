function tocaSom(seletorAudio){
	const elemento = document.querySelector(seletorAudio);

	if (elemento !=null && elemento.localName === 'audio') {
	    elemento.play()
	} else {
	    console.log('Elemento não encontrado ou seletor inválido');
	}
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
	//Constante que recebe a informação de qual botão foi selecionada
	const tecla = listaDeTeclas[contador]

	//Constante que recebe a segunda classe do botão que foi selecionado
	const instrumento = tecla.classList[1];
	
	/*Constante que recebe o ID da tag áudio referente ao botão selecionado  para que possamos
	usar na string dinâmica (template string)*/
	const idAudio = `#som_${instrumento}`;

	//Utiliza função anônima para que possamos chamar a função tocaSom
	tecla.onclick = function () {
		tocaSom(idAudio);
	}
	
	//Adiciona a classe ativa ao elemento button selecionado
	tecla.onkeydown = function(evento){
		if(evento.code === 'Space' || evento.code === 'Enter'){
			listaDeTeclas[contador].classList.add('ativa');
		}
	}

	//Remove a classe ativa do elemento button selecionado
	tecla.onkeyup = function (evento) {
		if(evento.code === 'Space' || evento.code === 'Enter'){
			listaDeTeclas[contador].classList.remove('ativa');
		}
	}
}
