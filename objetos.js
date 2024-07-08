

class conteudoFilme{

constructor(dados){

    this.title = dados.Title;
    this.poster = dados.Poster;
    this.year = dados.Year;

}

preencherDados(card){

card.querySelector('img').src = this.poster;
card.querySelector('.card-text').innerHTML = this.title;

document.querySelector('.grid').append(card);//injeta 
}


MostrarModal(){
document.getElementById('windown').classList.add('active');

}

fecharModal(){

    document.getElementById('windown').classList.remove('active');
  
}

preencherModal(){

    document.querySelector('#windown .flex .card img').src = this.poster;
    document.querySelector('#windown .flex .card .card-body h2').innerHTML = this.title;
}

}

