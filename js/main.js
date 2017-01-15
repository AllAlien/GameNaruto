$(document).ready(function() {
    clique = false;
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


    $("img").click(function() {

        if (clique == false) {
            clique = true;

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

            // lista de todos os ninjas em foto
            lutador2 = ["img/sasuke.png", "img/naruto.png", "img/sakura.png",
                "img/kakashi.png", "img/shino.png", "img/neji.png", "img/orochimaro.png",
                "img/shikamaru.png"
            ]

            // numero aleatorio para lutador 2
            l2 = Math.floor((Math.random() * 7) + 1);
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

        } //condição para a imagem ser clicada 
    });

    function status() {
        //$(".som").html("<audio src='sound/narutosound.mp3' autoplay='autoplay' loop='loop'>")
        $(".escolha").show()
        setTimeout(function() {
            $(".statusDaLuta").html("<p style='color:#f00'>A batalha começou...</p>")
            $(".gopes").attr('src', 'img/chidori.png')
        }, 2000)

        setTimeout(function() {
            $(".statusDaLuta").html("<p style='color:#f00'>Que duelo incrível...</p>")
            $(".gopes").attr('src', 'img/chidori2.png')
        }, 3000)

        setTimeout(function() {
            $(".statusDaLuta").html("<p style='color:#f00'>Você não vai sair impune!</p>")
            $(".gopes").attr('src', 'img/susano.png')
        }, 4000)

        setTimeout(function() {
            $(".statusDaLuta").html("<p style='color:#f00'>É o que veremos!</p>")
            vencedor()
        }, 5000)

    }

    function vencedor() {
        $(".escolha").hide();
        numWinner = (Math.floor(Math.random() * 9) + 1)

        if (numWinner % 2 == 0) {
            $(".imgVencedor").attr("src", id)
        } else if (numWinner % 2 != 0) {
            $(".imgVencedor").attr("src", lutador2[l2])
        }
   
        $(".resultado").show();

    } // Ao escolher lutar novamente com o mesmo ninja , a funcao again escolhera um novo oponente para a luta;
    function again() {

        // numero aleatorio para lutador 2
        l2 = Math.floor((Math.random() * 7) + 1);
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
        while (id === lutador2[l2]) {
            // se lutado aleatorio for igual ao ja selecionado, gera um numero novo.
            l2 = Math.floor((Math.random() * 7) + 1);
            $("#lutador2").attr("src", lutador2[l2]);

        }
        $("#lutador2").attr("src", lutador2[l2]);
        $(".descricao_lutador2").html("<span style='color:#fff; font-size:30px'>Nome: " + ninjaoponente.nome +
            "<br>Resistencia: " + ninjaoponente.resistencia + "<br>Cla: " + ninjaoponente.cla +
            "<br>Força: " + ninjaoponente.forca + "<br>Altura: " + obj.altura + "</span>");;

        // chama a funcao de animacao da batalha
        status();

    }

    $(".opcaoSair").click(function() {
        $(".resultado").hide();
        clique = false;
    })
    $(".opcaoMesmo").click(function() {
        $(".resultado").hide();
        again();
        clique = false;
    })

});
