

class conteudoFilme{

constructor(dados){

    console.log(dados);

    this.title = dados.Title;
    this.poster = dados.Poster;
    this.year = dados.Year;

}

preencherDados(card){

console.log(this.title)
card.querySelector('img').src = this.poster;
card.querySelector('.card-text').innerHTML = this.title;

document.querySelector('.grid').append(card);//injeta 
}

}

