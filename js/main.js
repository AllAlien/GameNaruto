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







