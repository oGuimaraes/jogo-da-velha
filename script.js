var player = 1;
var jogadas = 0;
var ha_vencedor = false;
var valida_posicao = [
    [false,false,false], // valida_posicao[0][0],valida_posicao[0][1],valida_posicao[0][2],
    [false,false,false], // valida_posicao[1][0],valida_posicao[1][1],valida_posicao[1][2],
    [false,false,false], // valida_posicao[2][0],valida_posicao[2][1],valida_posicao[2][2],
];

var marca_posicao =  [
    [false,false,false],
    [false,false,false], 
    [false,false,false], 
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
var linhaRandom = getRandomInt(0,2);
var colunaRandom = getRandomInt(0,2);

function play(linha,coluna){
    
    if(valida_posicao[linha][coluna] == false && ha_vencedor == false){
        if(player == 1) {
            valida_posicao[linha][coluna] = "bola";
            document.getElementById("pos"+linha+coluna).style.backgroundImage = 'url("images/bola.jpg")';
            marca_posicao[linha][coluna] = 'O';
            player++;
            jogadas++;
            console.log(jogadas);
            document.getElementById("vez").innerHTML = 'Vez de X';
            console.log(valida_posicao);
            console.log(marca_posicao);
            vezCpu();  
        } else {
        }
        fimDeJogo()
    } else {
        alert("Posição já marcada!")
    }
}

function vezCpu() {
    if (player == 2){
        if (valida_posicao[linhaRandom][colunaRandom] == false) { //Se a posição estiver vazia, faça:
            valida_posicao[linhaRandom][colunaRandom] = "xis"; // Marca xis na matriz na posição aleatoria
            marca_posicao[linhaRandom][colunaRandom] = 'X';// Marca xis na matriz na posição aleatoria

            document.getElementById("pos"+linhaRandom+colunaRandom).style.backgroundImage = 'url("images/xis.jpg")';
            player--;
            jogadas++;
            document.getElementById("vez").innerHTML = 'Vez de O';
            console.log('Entrou no if')
            getRandomInt(0,2)
            fimDeJogo()

        } else if (jogadas < 9){ // se a posição de valida_posição[x][y] estiver ocupada:
            console.log('Entrou no else')
            linhaRandom = getRandomInt(0,3);
            colunaRandom = getRandomInt(0,3);
            console.log(linhaRandom);
            console.log(colunaRandom);
            fimDeJogo()
            vezCpu();
        }
    }
}

function fimDeJogo(){

    if
    (marca_posicao[0][0] == 'O' && marca_posicao[0][1] == 'O' && marca_posicao[0][2] == 'O' ||
     marca_posicao[1][0] == 'O' && marca_posicao[1][1] == 'O' && marca_posicao[1][2] == 'O' ||
     marca_posicao[2][0] == 'O' && marca_posicao[2][1] == 'O' && marca_posicao[2][2] == 'O' ||
     marca_posicao[0][0] == 'O' && marca_posicao[1][0] == 'O' && marca_posicao[2][0] == 'O' ||
     marca_posicao[0][1] == 'O' && marca_posicao[1][1] == 'O' && marca_posicao[2][1] == 'O' ||
     marca_posicao[2][2] == 'O' && marca_posicao[1][2] == 'O' && marca_posicao[0][2] == 'O' ||  
     marca_posicao[0][0] == 'O' && marca_posicao[1][1] == 'O' && marca_posicao[2][2] == 'O' ||
     marca_posicao[2][0] == 'O' && marca_posicao[1][1] == 'O' && marca_posicao[0][2] == 'O')
     
    {
        $( "h3" ).effect( "bounce", "slow" );
        document.getElementById("vez").innerHTML = 'Bola Ganhou';
        ha_vencedor = true;

    } else if
    (marca_posicao[0][0] == 'X' && marca_posicao[0][1] == 'X' && marca_posicao[0][2] == 'X' ||
     marca_posicao[1][0] == 'X' && marca_posicao[1][1] == 'X' && marca_posicao[1][2] == 'X' ||
     marca_posicao[2][0] == 'X' && marca_posicao[2][1] == 'X' && marca_posicao[2][2] == 'X' ||
     marca_posicao[0][0] == 'X' && marca_posicao[1][0] == 'X' && marca_posicao[2][0] == 'X' ||
     marca_posicao[0][1] == 'X' && marca_posicao[1][1] == 'X' && marca_posicao[2][1] == 'X' ||
     marca_posicao[2][2] == 'X' && marca_posicao[1][2] == 'X' && marca_posicao[0][2] == 'X' ||  
     marca_posicao[0][0] == 'X' && marca_posicao[1][1] == 'X' && marca_posicao[2][2] == 'X' ||
     marca_posicao[2][0] == 'X' && marca_posicao[1][1] == 'X' && marca_posicao[0][2] == 'X')
    { 
        $( "h3" ).effect( "bounce", "slow" );
        document.getElementById("vez").innerHTML = 'X Ganhou';
        ha_vencedor = true;

    } else if (jogadas == 9) {
        $( "h3" ).effect( "bounce", "slow" );
        document.getElementById("vez").innerHTML = 'Deu velha';
    }

}


/* CPU Intelligence

