 // Função para obter a hora atual
 function getHour() {
    return new Date().getHours();
}

// Função para determinar a saudação com base na hora
function determineGreeting() {
    var hour = getHour();
    var greetingElement = document.getElementById('greeting');

    if (hour >= 6 && hour < 12) {
        greetingElement.textContent = 'Bom dia';
    } else if (hour >= 12 && hour < 18) {
        greetingElement.textContent = 'Boa tarde';
    } else {
        greetingElement.textContent = 'Boa noite';
    }
}

// Atualizar a saudação quando a página for carregada
document.addEventListener('DOMContentLoaded', determineGreeting);

const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }
    
    requestApi(searchTerm);
})

/** DOM**/
