// =====================================
// LISTA DE PRESENTES - CASAMENTO
// Emille & Fabricio ❤️
// =====================================


// Quando o site abrir, verifica presentes já escolhidos

document.addEventListener("DOMContentLoaded", function(){

    let presentesEscolhidos = JSON.parse(
        localStorage.getItem("presentesEscolhidos")
    ) || [];


    let botoes = document.querySelectorAll(
        ".presente-card button"
    );


    botoes.forEach(function(botao){


        let nomePresente = botao.parentElement.querySelector("h3").innerText;


        if(presentesEscolhidos.includes(nomePresente)){


            bloquearPresente(botao);

        }


    });


});






// =====================================
// ESCOLHER PRESENTE
// =====================================


function escolherPresente(botao, presente){



    let confirmar = confirm(

    "Tem certeza que deseja escolher este presente?"

    );



    if(confirmar){



        let presentesEscolhidos = JSON.parse(

            localStorage.getItem("presentesEscolhidos")

        ) || [];



        presentesEscolhidos.push(presente);



        localStorage.setItem(

            "presentesEscolhidos",

            JSON.stringify(presentesEscolhidos)

        );



        bloquearPresente(botao);



        alert(

        "Presente escolhido com carinho ❤️"

        );


    }



}






// =====================================
// BLOQUEAR PRESENTE
// =====================================


function bloquearPresente(botao){


    botao.innerHTML =

    "Presente escolhido ❤️";



    botao.disabled = true;



    botao.classList.add("escolhido");



}
