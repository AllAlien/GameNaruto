$(document).ready(function() {

    //ocultar div escolha, colocado apenas para teste
    $(".escolha").hide()
    //incio dos objetos	
    var Lutadores = function(nome, forca, velocidade, altura, cla, resistencia) {
        this.nome = nome;
        this.forca = forca;
        this.velocidade = velocidade;
        this.altura = altura;
        this.cla = cla;
        this.resistencia = resistencia;

        this.luta = function(lutador1, lutador2) {
            if (lutador1 == lutador2) {
                document.write("Essa luta não pode ocorrer entre lutadores iguais.")
            }

            if (lutador1.forca > lutador2.forca && lutador1.resistencia > lutador2.resistencia) {
                document.write("O vencedor indubtavelmente é " + lutador1.nome);
            } else {
                document.write("O vencedor indubtavelmente é  " + lutador2.nome);
            }
        }
    }

    var naruto = new Lutadores("Naruto", 79, 89, 1.80, "Usumaki", 95)
    var sasuke = new Lutadores("Sasuke", 82, 90, 1.82, "Uchirra", 90)
    var sakura = new Lutadores("sakura", 70, 50, 1.70, "Desconhecido", 60)
    var kakashi = new Lutadores("kakashi", 97, 68, 1.79, "Desconhecido", 87)
    var orochimaru = new Lutadores("orochimaru", 75, 68, 1.80, "Desconhecido", 87)
    var shino = new Lutadores("shino", 75, 68, 1.80, "Desconhecido", 87)
    var shikamaru = new Lutadores("shikamaru", 65, 68, 1.80, "Desconhecido", 87)
    var neji = new Lutadores("Neji", 86, 91, 1.80, "Desconhecido", 87)   



    // lista de todos os ninjas em foto
    var lutador2 = ["img/sasuke.png", "img/naruto.png", "img/sakura.png",
        "img/kakashi.png", "img/shino.png", "img/neji.png", "img/orochimaro.png",
        "img/shikamaru.png"
    ]

    $("img").click(function() {
        id = $(this).attr('src')
            // numero aleatorio para lutador 2
        var l2 = Math.floor((Math.random() * 7) + 1);
        // campo do lutador 1 recebe imagem do ninja selecionado no click
        $("#lutador1").attr("src", id);
        if (lutador2[l2] == id) {
            // se lutado aleatorio for igual ao ja selecionado, gera um numero novo.
            var l2 = Math.floor((Math.random() * 7) + 1);
            $("#lutador2").attr("src", lutador2[l2]);
        }
        // campo do lutado2 recebe a imagem com numero aleatorio
        $("#lutador2").attr("src", lutador2[l2]);

        $(".escolha").show()

    });



});