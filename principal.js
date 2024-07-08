const apiKey = 'fd937c0a';
const frmPesquisa = document.getElementById('form-pesquisa');

frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();

    const pesquisa = ev.target.pesquisa.value;

    if(pesquisa == " "){
        alert("Preencha o Campo!");
        return;
    }

fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apiKey}`)
    .then(result => result.json())//transforma o result em objeto javascript
    .then(json => pesquisaLista(json));//json mostra um console.log com o result


} 

function pesquisaLista(json){

let x = json;

if(json.Response == "False"){//se a pesquisa não existir
alert('Não Existe Filme Com Esse Nome!');
return;
}

for(i = 0; i < x.Search.length; i++){
    const card = document.querySelector('.card').cloneNode('true');
    
    let filme = new conteudoFilme(x.Search[i]);
    filme.preencherDados(card);



}
}

const btn = document.querySelector('.botao');
btn.addEventListener('click', () => {
    document.querySelector('.spinner-border').style.display = "none";
})