async function getRandom() {
    let url = 'https://api.chucknorris.io/jokes/random';
    let response = await fetch(url);
    let res = await response.json();
    document.getElementById('jokebox').innerHTML = '<h2><b>' + res.value + '</b></h2>';
}