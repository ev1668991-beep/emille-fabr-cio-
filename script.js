const presentes = [
    "Máquina de lavar roupas", "Micro-ondas", "Sofá", "Mesa", 
    "Armário de cozinha", "Filtro elétrico", "Air Fryer", 
    "Tanquinho", "Forno", "Rack para TV", "Espaço Extra 1", "Espaço Extra 2"
];

const container = document.getElementById('lista-presentes');

function renderizar() {
    container.innerHTML = '';
    const selecionados = JSON.parse(localStorage.getItem('presentesEscolhidos')) || {};
    
    presentes.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'card' + (selecionados[index] ? ' escolhido' : '');
        div.innerHTML = `
            <img src="https://via.placeholder.com/250" alt="${item}">
            <h3>${item}</h3>
            ${selecionados[index] ? '<p>Presente escolhido ❤️</p>' : `<button onclick="escolher(${index})">Eu vou dar este presente</button>`}
        `;
        container.appendChild(div);
    });
}

function escolher(index) {
    if (confirm("Tem certeza que deseja escolher este presente?")) {
        const selecionados = JSON.parse(localStorage.getItem('presentesEscolhidos')) || {};
        selecionados[index] = true;
        localStorage.setItem('presentesEscolhidos', JSON.stringify(selecionados));
        renderizar();
    }
}

renderizar();
