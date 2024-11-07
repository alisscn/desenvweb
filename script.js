const moreInfoBtn = document.getElementById('moreInfoBtn');
const moreInfo = document.getElementById('moreInfo');

moreInfoBtn.addEventListener('click', () => {
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        moreInfoBtn.textContent = 'Mostrar menos';
    } else {
        moreInfo.classList.add('hidden');
        moreInfoBtn.textContent = 'Saiba mais';
    }
});

function toggleDownload(elementId) {
    const statusElement = document.getElementById(elementId);
    if (statusElement.textContent === "Download: Não disponível") {
        statusElement.textContent = "Download: Disponível";
        statusElement.style.color = "green";
    } else {
        statusElement.textContent = "Download: Não disponível";
        statusElement.style.color = "red";
    }
}

function toggleStreaming(elementId) {
    const statusElement = document.getElementById(elementId);
    if (statusElement.textContent === "Streaming: Disponível") {
        statusElement.textContent = "Streaming: Indisponível";
        statusElement.style.color = "red";
    } else {
        statusElement.textContent = "Streaming: Disponível";
        statusElement.style.color = "green";
    }
}
