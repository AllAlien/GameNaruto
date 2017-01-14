$(document).ready(function() {

    //ocultar div escolha, colocado apenas para teste
    $(".escolha").hide()
    $(".resultado").hide()
        //incio dos objetos	
    var Lutadores = function(nome, forca, velocidade, altura, cla, resistencia) {
        this.nome = nome;
        this.forca = forca;
        this.velocidade = velocidade;
        this.altura = altura;
        this.cla = cla;
        this.resistencia = resistencia;


        
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
        nome = $(this).attr("id");
        switch (nome) {
            case 'naruto':
                obj = naruto;
                break;
            case 'sasuke':
                obj = sasuke;
                break;
            case 'sakura':
                obj = sakura;
                break;
            case 'kakashi':
                obj = kakashi;
                break;
            case 'orochimaru':
                obj = orochimaru;
            case 'shikamaru':
                obj = shikamaru;
                break;
            case 'shino':
                obj = shino;
                break;
            case 'neji':
                obj = neji;
                break;

        }

        // numero aleatorio para lutador 2
        var l2 = Math.floor((Math.random() * 7) + 1);
        switch (l2) {
            case 0:
                ninjaoponente = sasuke;
                break;
            case 1:
                ninjaoponente = naruto;
                break;
            case 2:
                ninjaoponente = sakura;
                break;
            case 3:
                ninjaoponente = kakashi;
                break;
            case 4:
                ninjaoponente = shino;
                break;
            case 5:
                ninjaoponente = neji;
                break;
            case 6:
                ninjaoponente = orochimaru;
                break;
            case 7:
                ninjaoponente = shikamaru;
                break;
        }
        // campo do lutador 1 recebe imagem do ninja selecionado no click
        $("#lutador1").attr("src", id);
        $(".descricao_lutador1").html("<span style='color:#fff; font-size:30px'>Nome: " + obj.nome +
            "<br>Resistencia: " + obj.resistencia + "<br>Cla: " + obj.cla + "<br>Força: " + obj.forca +
            "<br>Altura: " + obj.altura + "</span>")


        if (lutador2[l2] == id) {
            // se lutado aleatorio for igual ao ja selecionado, gera um numero novo.
             l2 = Math.floor((Math.random() * 7) + 1);
            $("#lutador2").attr("src", lutador2[l2]);

        }
        // campo do lutado2 recebe a imagem com numero aleatorio
        $("#lutador2").attr("src", lutador2[l2]);
        $(".descricao_lutador2").html("<span style='color:#fff; font-size:30px'>Nome: " + ninjaoponente.nome +
            "<br>Resistencia: " + ninjaoponente.resistencia + "<br>Cla: " + ninjaoponente.cla +
            "<br>Força: " + ninjaoponente.forca + "<br>Altura: " + obj.altura + "</span>")
        status();
    });

    function status() {
        $(".som").html("<audio src='sound/narutosound.mp3' autoplay='autoplay' loop='loop'>")
        $(".escolha").show()
        setInterval(function() {
            $(".statusDaLuta").html("<p style='color:#f00'>A batalha começou...</p>")
            $(".gopes").attr('src', 'img/chidori.png')
        }, 2000)

        setInterval(function() {
            $(".statusDaLuta").html("<p style='color:#f00'>Que duelo incrível...</p>")
            $(".gopes").attr('src', 'img/chidori2.png')
        }, 3000)

        setInterval(function() {
            $(".statusDaLuta").html("<p style='color:#f00'>Você não vai sair impune!</p>")
            $(".gopes").attr('src', 'img/susano.png')
        }, 4000)

        setInterval(function() {
            $(".statusDaLuta").html("<p style='color:#f00'>É o que veremos!</p>")
        }, 5000)
        setInterval(function(){
            vencedor();
        }, 6000)
    }

    function vencedor (){
        $(".escolha").hide();

        numWinner = (Math.floor(Math.random()*2)+1)

        if(numWinner == 1){
            $(".imgVencedor").attr("src", id)
        }else if(numWinner ==2){

            $(".imgVencedor").attr("src", lutador2[l2])
        }
        /*
        if(obj.forca > ninjaoponente.forca && obj.resistencia > ninjaoponente.resistencia){
            $(".imgVencedor").attr("src", id)
        }else if(ninjaoponente.forca > obj.forca && ninjaoponente.resistencia > obj.resistencia){
            $(".imgVencedor").attr("src", lutador2[l2])
        }else if (obj.velocidade > ninjaoponente.velocidade && obj.altura > ninjaoponente.altura){
            $(".imgVencedor").attr("src", id)
        }else if (ninjaoponente.velocidade > obj.velocidade && ninjaoponente.altura > obj.altura){
            $(".imgVencedor").attr("src", lutador2[l2])
        }
        */
        $(".resultado").show();

    }

});
//status de luta - iniciada em 14-01-2017 as 01:57 am

// versao antiga exemplo instancia de classes.
/*if (nome == "naruto") {
$(".escolha").show()
    var naruto = new Lutadores("Naruto", 79, 89, 1.80, "Usumaki", 95);
    var n = naruto.nome;
    var forca = naruto.forca;
    var vel = naruto.velocidade;
    var alt = naruto.altura;
    var cla = naruto.cla;
    var res = naruto.resistencia;
    $(".descricao_lutador1").html("<p>Nome: " + n + "<br>" +
        "Força: " + forca + "<br>" +
        "Velocidade: " + vel + "<br>" +
        "Altura: " + alt + "<br>" +
        "Cla: " + cla + "<br>" +
        "Resistencia: " + res + "</p>");

} else if (nome == "sasuke") {
    var sasuke = new Lutadores("Sasuke", 82, 90, 1.82, "Uchirra", 90)
    var n = sasuke.nome;
    var forca = sasuke.forca;
    var vel = sasuke.velocidade;
    var alt = sasuke.altura;
    var cla = sasuke.cla;
    var res = sasuke.resistencia;
    $(".descricao_lutador1").html("<p> Nome: " + n + "<br>" +
        "Força: " + forca + "<br>" +
        "Velocidade: " + vel + "<br>" +
        "Altura: " + alt + "<br>" +
        "Cla: " + cla + "<br>" +
        "Resistencia: " + res + "</p>");*/
