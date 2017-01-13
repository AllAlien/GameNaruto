$(document).ready(function(){ 

//incio dos objetos	
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


//eventos
	$("img").click(function(){
	id = $(this).attr('id')	


	switch (id){
		case 'naruto': //numero ficticio propricio a mudança
			
			oponente = naruto;
			break;
		case 'sasuke': //numero ficticio propricio a mudança
			oponente = sasuke;
			break;
		case 'sakura': //numero ficticio propricio a mudança
			oponente = sakura;
			break;
		case 'orochimaru': //numero ficticio propricio a mudança
			oponente = orochimaru;
			break;
		case 'shino': //numero ficticio propricio a mudança
			oponente = shino;
			break;
		case 'kakashi':
			oponente = kakashi;
			break;
		case 'neji':
			oponente = neji;
			break;
		case 'shikamaru':
			oponente = shikamaru;
			break;
	}


	});



});


