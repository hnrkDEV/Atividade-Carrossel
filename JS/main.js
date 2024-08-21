$(document).ready(function(){
    $('#carousel-imagens').slick({ //Função slick adiciona a função de carrossel à Div que está encobrindo as imagens
        autoplay: true})
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();}) //Função slideToggle serve para 
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })
    $('form').validate({ //função do plugin do JQuery que serve para validar os valores
        rules: { //aqui você passa a função regras
          nome:{required: true //e assim vai inserindo as regras, na qual o nome está como requisitado
          },
          email:{required: true, email: true //e o E-mail está além de requisitado está com uma formatção do plugin para reconhecer e-mail
          },
          telefone:{required: true
          },
          veiculoDeInteresse:{
            required: true
          },
          mensagem: {
            required: false
          }
        },
        messages: { //aqui você altera a mensagem de alerta do plugin
            nome: 'por favor, insira o seu nome',
            telefone: 'por favor, digite seu número de celular',
            email: 'por favor, digite seu e-mail',
            veiculoDeInteresse: 'por favor, escolha o veiculo'
        },
        submitHandler: function(form) {
            console.log(form)
            
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    $('.lista-veiculos button').click(function(){
        const destino = $('#entre-em-contato');

        const nomeVeiculo = $(this).parent().find('h3').text();
        
        $('#veiculoDeInteresse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
    $('#contato').click(function(){
        const destino = $('#entre-em-contato');
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
    $('#sobre').click(function(){
        const destino = $('#sobre-a-loja');
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
    $('#destaque').click(function(){
        const destino = $('#em-destaque')
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
    $('#promocao').click(function(){
        const destino = $('#em-promocao');
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

})