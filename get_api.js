const id_personagem = document.querySelector("#id_personagem");
const bnt_proc = document.getElementById("bnt_proc");
const local_personagem = document.getElementById("local_personagem");
const img_personagem = document.getElementById("img_personagem");

//pegando os personagens na api
const fetch_api = (valor) => {
    const resultado = fetch(`https://rickandmortyapi.com/api/character/${valor}`)
     //tranformando em json, para melhor leitura. Transforamndo em obj
    .then((response) => { return response.json(); }) 
    .then((data) => {
        console.log(data);
        return data;
    });

    return resultado;
}
// pegando o valor digitado para aprensentar o personagem
bnt_proc.addEventListener('click', (event) => {
    event.preventDefault();
    const resultado = fetch_api(id_personagem.value);
});