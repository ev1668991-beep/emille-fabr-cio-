// ================= CONTADOR DO CASAMENTO =================


// Data do casamento
const dataCasamento = new Date("October 31, 2026 00:00:00").getTime();


function atualizarContador() {


    const agora = new Date().getTime();


    const distancia = dataCasamento - agora;



    const dias = Math.floor(
        distancia / (1000 * 60 * 60 * 24)
    );


    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    const segundos = Math.floor(
        (distancia % (1000 * 60)) /
        1000
    );



    document.getElementById("contador").innerHTML =

    `${dias} dias ❤️ ${horas}h ${minutos}min ${segundos}s`;



}


setInterval(atualizarContador, 1000);

atualizarContador();




// ================= LISTA DE PRESENTES =================


// Guarda os presentes escolhidos

let presentesEscolhidos = JSON.parse(
    localStorage.getItem("presentesEscolhidos")
) || [];



// Função chamada pelo botão

function escolherPresente(id) {


    const confirmar = confirm(
        "Tem certeza que deseja escolher este presente?"
    );



    if(confirmar){


        if(!presentesEscolhidos.includes(id)){


            presentesEscolhidos.push(id);


            localStorage.setItem(
                "presentesEscolhidos",
                JSON.stringify(presentesEscolhidos)
            );


            atualizarPresentes();


        }


    }


}



// Atualiza visual dos presentes

function atualizarPresentes(){


    presentesEscolhidos.forEach(function(id){


        const card = document.getElementById(
            "presente" + id
        );



        if(card){


            card.classList.add("escolhido");



            const botao = card.querySelector(
                ".btn-presente"
            );


            const texto = card.querySelector(
                ".escolhido"
            );



            if(botao){

                botao.style.display = "none";

            }



            if(texto){

                texto.innerHTML =
                "Presente escolhido ❤️";

            }


        }


    });


}


// Carrega escolhas ao abrir o site

window.onload = function(){

    atualizarPresentes();

};
