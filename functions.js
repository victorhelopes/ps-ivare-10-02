var data = "";
var nome = "";
var mesnsagem = "";
function Funcao(){
    data = document.getElementById('data').value;
    nome = document.getElementById('nome').value;
    mesnsagem = "nome: " + nome + "\nData de nascimento: " + data;
    alert(mesnsagem);
}