async function getRandom() {
  let url = 'https://api.chucknorris.io/jokes/random';
  let response = await fetch(url);
  let res = await response.json();
  document.getElementById('jokebox').innerHTML = '<h2><b>' + res.value + '</b></h2>';
}

async function getCategList() {
  let results = '';
  let url = 'https://api.chucknorris.io/jokes/categories';
  let response = await fetch(url);
  let res = await response.json();
  for (ele of res)
    results += ele + " ";
  document.getElementById('jokebox').innerHTML = '<h2><b>' + results + '</b></h2>'

}

async function getSearchedByCategory() {
  let category = document.getElementById('searchcategory').value
  let url = `https://api.chucknorris.io/jokes/random?category=${category}`;
  let response = await fetch(url);
  let res = await response.json();
  document.getElementById('jokebox').innerHTML = '<h2><b>' + res.value + '</b></h2>';
}

async function getSearchedByKeyWord() {
  let keyword = document.getElementById('searchtext').value
  let url = `https://api.chucknorris.io/jokes/search?query=${keyword}`;
  let response = await fetch(url);
  let res = await response.json();
  document.getElementById('jokebox').innerHTML = '<h2><b>' + res.result[0].value + '</b></h2>';
}


