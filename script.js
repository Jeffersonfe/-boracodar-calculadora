function insert(num){
    var numero = document.getElementById('last-calc').innerHTML;
    document.getElementById('last-calc').innerHTML = numero + num;
}

function clean(){
    document.getElementById('result-final').innerHTML = '';
    document.getElementById('last-calc').innerHTML = '';
}

function back(){
    var equacao = document.getElementById('last-calc').innerHTML;
    document.getElementById('last-calc').innerHTML = equacao.substring(0, equacao.length -1)
}

function calcular(){
    var resultado =document.getElementById('last-calc').innerHTML;
    if(resultado){
        document.getElementById('result-final').innerHTML = eval(resultado);
    }else{
        document.getElementById('result-final').innerHTML = '';
    }
}

function alterar(){
    var finall = document.getElementById('last-calc').innerHTML;
    if(finall > 0 || finall < 0){
        document.getElementById('last-calc').innerHTML = finall * -1;
    }
}