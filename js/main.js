var Lutadores = function (nome, forca, velocidade, altura, cla, resistencia){
	this.nome = nome;
	this.forca = forca;
	this.velocidade = velocidade;
	this.altura = altura;
	this.cla = cla;
	this.resistencia =  resistencia;

	this.luta = function(lutador1, lutador2){
			if (lutador1 == lutador2){
				document.write("Essa luta não pode ocorrer entre lutadores iguais.")
			}


			if (lutador1.forca > lutador2.forca && lutador1.resistencia > lutador2.resistencia){
				document.write("O vencedor indubtavelmente é "+lutador1.nome);

			}else{
				document.write("O vencedor indubtavelmente é  "+lutador2.nome);
			}
	}
}

var naruto = new Lutadores ("Naruto", 79, 89, 1.80, "Usumaki", 95)
var sasuke = new Lutadores ("Sasuke", 82, 90, 1.82, "Uchirra", 90)
var sakura = new Lutadores ("sakura", 70, 50, 1.70, "Desconhecido", 60)
var neji = new Lutadores ("Neji", 75, 68, 1.80, "Desconhecido", 87)


//a função batalha será chamada toda vez que o gamer clicar em uma imagem, ou seja, escolher um ninja..
//onclick
function startwar(id){
	switch (id){
		case 1: //numero ficticio propricio a mudança
			oponente = naruto;
			break;
		case 2: //numero ficticio propricio a mudança
			oponente = sasuke;
			break;
		case 3: //numero ficticio propricio a mudança
			oponente = sakura;
			break;
		case 4: //numero ficticio propricio a mudança
			oponente = neji;
			break;
		case 5: //numero ficticio propricio a mudança
			oponente = kakasi;
			break;												
	}

	batalha(oponente) //chama com parametro do oponente selecionado

}


function batalha (oponente){

	adversario =Math.floor(Math.random()*10)+1; //gera um numero aleatorio entre 1 e 10
	if (adversario == 1 && oponente !== sasuke){
		oponente = sasuke;
	}
	if (adversario == 2 && oponente !== naruto){
		oponente = sasuke;
	}
	if (adversario == 3 && oponente !== sakura){
		oponente = sasuke;
	}
	if (adversario == 4 && oponente !== neji){
		oponente = sasuke;
	}			
	id.luta(id, oponente)

}





