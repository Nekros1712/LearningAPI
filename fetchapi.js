async function getRandom() {
    let url = 'https://api.chucknorris.io/jokes/random';
    let response = await fetch(url);
    let res = await response.json();
    document.getElementById('jokebox').innerHTML = '<h2><b>' + res.value + '</b></h2>';
}

async function getCategList()
{
  let results = '' ;
  let url = 'https://api.chucknorris.io/jokes/categories';
  let response = await fetch(url);
  let res = await response.json();
  for (ele of res )
    results += ele + " ";
  document.getElementById('jokebox').innerHTML ='<h2><b>' + results + '</b></h2>'
  
}
