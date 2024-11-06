document.getElementById('getJokeBtn').addEventListener('click', getJoke);
document.getElementById('clearJokeBtn').addEventListener('click', clearJoke);
async function getJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const data = await response.json();
        let joke;
        if (data.type === 'single') {
            joke = data.joke;
        } else {
            joke = `${data.setup} - ${data.delivery}`;
        }
        document.getElementById('joke').innerText = joke;
        document.getElementById('charCount').innerText = `Character Count: ${joke.length}`;
    }catch (error) {
        console.log('An error occurred while fetching the joke', error);
    }
}
function clearJoke() {
    document.getElementById('joke').innerText = '';
    document.getElementById('charCount').innerText = '';
}