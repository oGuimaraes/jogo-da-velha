var player = 1;
var jogadas = 0;
var ha_vencedor = false;

var marca_posicao =  [
    [false,false,false],
    [false,false,false], 
    [false,false,false], 
];

document.getElementById("vez").innerHTML = 'Vez de O';
document.getElementById("jogadas").innerHTML ='Jogadas feitas: '+jogadas;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
var linhaRandom = getRandomInt(0,2);
var colunaRandom = getRandomInt(0,2);

function insereX(linha,coluna){
    document.getElementById("pos"+linha+coluna).style.backgroundImage = 'url("images/xis.jpg")';
}

function play(linha,coluna){
    
    if(marca_posicao[linha][coluna] == false && ha_vencedor == false){
        if(player == 1) {
            marca_posicao[linha][coluna] = "bola";
            document.getElementById("pos"+linha+coluna).style.backgroundImage = 'url("images/bola.jpg")';
            marca_posicao[linha][coluna] = 'O';
            player++;
            jogadas++;
            document.getElementById("vez").innerHTML = 'Vez de X';
            console.log(marca_posicao);
            window.setTimeout('vezCpu()', 1000); 
            console.log(jogadas);
        } else {
        }
        fimDeJogo()
    } else {
        alert("Posição já marcada!")

    }
}

function vezCpu() {
    if (player == 2 && ha_vencedor == false){

        if (marca_posicao[0][0] == 'O' && marca_posicao[0][1] == 'O' && marca_posicao[0][2] == false ){
        insereX(0,2);
        marca_posicao[0][2] = 'X'
        } else if (marca_posicao[0][0] == 'O' && marca_posicao[0][2] == 'O' && marca_posicao[0][1] == false ){
            insereX(0,1);
            marca_posicao[0][1] = 'X'
        } else if (marca_posicao[0][1] == 'O' && marca_posicao[0][2] == 'O' && marca_posicao[0][0] == false ){
            insereX(0,0);
            marca_posicao[0][0] = 'X'
        } else if (marca_posicao[1][0] == 'O' && marca_posicao[1][1] == 'O' && marca_posicao[1][2] == false ){
            insereX(1,2);
            marca_posicao[1][2] = 'X'
        } else if (marca_posicao[1][0] == 'O' && marca_posicao[1][2] == 'O' && marca_posicao[1][1] == false ){
            insereX(1,1);
            marca_posicao[1][1] = 'X'
        } else if (marca_posicao[1][1] == 'O' && marca_posicao[1][2] == 'O' && marca_posicao[1][0] == false ){
            insereX(1,0);
            marca_posicao[1][0] = 'X'
        } else if (marca_posicao[2][0] == 'O' && marca_posicao[2][1] == 'O' && marca_posicao[2][2] == false ){
            insereX(2,2);
            marca_posicao[2][2] = 'X'
        } else if (marca_posicao[2][1] == 'O' && marca_posicao[2][2] == 'O' && marca_posicao[2][0] == false ){
            insereX(2,0);
            marca_posicao[2][0] = 'X'
        } else if (marca_posicao[2][0] == 'O' && marca_posicao[2][2] == 'O' && marca_posicao[2][1] == false ){
            insereX(2,1);
            marca_posicao[2][1] = 'X'
        } else if (marca_posicao[0][0] == 'O' && marca_posicao[1][0] == 'O' && marca_posicao[2][0] == false ){
            insereX(2,0);
            marca_posicao[2][0] = 'X'
        } else if (marca_posicao[0][0] == 'O' && marca_posicao[2][0] == 'O' && marca_posicao[1][0] == false ){
            insereX(1,0);
            marca_posicao[1][0] = 'X'
        } else if (marca_posicao[1][0] == 'O' && marca_posicao[2][0] == 'O' && marca_posicao[0][0] == false ){
            insereX(0,0);
            marca_posicao[0][0] = 'X'
        } else if (marca_posicao[0][1] == 'O' && marca_posicao[1][1] == 'O' && marca_posicao[2][1] == false ){
            insereX(2,1);
            marca_posicao[2][1] = 'X'
        } else if (marca_posicao[0][1] == 'O' && marca_posicao[2][1] == 'O' && marca_posicao[1][1] == false ){
            insereX(1,1);
            marca_posicao[1][1] = 'X'
        } else if (marca_posicao[1][1] == 'O' && marca_posicao[2][1] == 'O' && marca_posicao[0][1] == false ){
            insereX(0,1);
            marca_posicao[0][1] = 'X'
        } else if (marca_posicao[1][2] == 'O' && marca_posicao[2][2] == 'O' && marca_posicao[0][2] == false ){
            insereX(0,2);
            marca_posicao[0][2] = 'X'
        } else if (marca_posicao[0][2] == 'O' && marca_posicao[2][2] == 'O' && marca_posicao[1][2] == false ){
            insereX(1,2);
            marca_posicao[1][2] = 'X'
        } else if (marca_posicao[0][2] == 'O' && marca_posicao[1][2] == 'O' && marca_posicao[2][2] == false ){
            insereX(2,2);
            marca_posicao[2][2] = 'X'

        } else if (marca_posicao[0][0] == 'O' && marca_posicao[1][1] == 'O' && marca_posicao[2][2] == false ){
            insereX(2,2);
            marca_posicao[2][2] = 'X'
        } else if (marca_posicao[0][0] == 'O' && marca_posicao[2][2] == 'O' && marca_posicao[1][1] == false ){
            insereX(1,1);
            marca_posicao[1][1] = 'X'
        } else if (marca_posicao[1][1] == 'O' && marca_posicao[2][2] == 'O' && marca_posicao[0][0] == false ){
            insereX(0,0);
            marca_posicao[1][1] = 'X'

        } else if (marca_posicao[2][0] == 'O' && marca_posicao[1][1] == 'O' && marca_posicao[0][2] == false ){
            insereX(0,2);
            marca_posicao[0][2] = 'X'
        } else if (marca_posicao[2][0] == 'O' && marca_posicao[0][2] == 'O' && marca_posicao[1][1] == false ){
            insereX(1,1);
            marca_posicao[1][1] = 'X'
        } else if (marca_posicao[1][1] == 'O' && marca_posicao[0][2] == 'O' && marca_posicao[2][0] == false ){
            insereX(2,0);
            marca_posicao[2][0] = 'X'
        }                      

        else if (marca_posicao[linhaRandom][colunaRandom] == false) {
            marca_posicao[linhaRandom][colunaRandom] = "xis";
            marca_posicao[linhaRandom][colunaRandom] = 'X';
            document.getElementById("pos"+linhaRandom+colunaRandom).style.backgroundImage = 'url("images/xis.jpg")';
            document.getElementById("vez").innerHTML = 'Vez de O';
            getRandomInt(0,2)
        } else if (jogadas < 9) {
            linhaRandom = getRandomInt(0,3);
            colunaRandom = getRandomInt(0,3);
            
            vezCpu();
            jogadas--;
            player++;
        }
        jogadas++;
        player--;
        document.getElementById("jogadas").innerHTML ='Numero de jogadas:'+ jogadas;
        fimDeJogo()
        console.log('Player: '+player);
    }
}

function isLineFilledBy(line, char){
    if (marca_posicao[line][0] == char && marca_posicao[line][1] == char && marca_posicao[line][2] == char){
        return true;
    } else {
        return false;
    }
}

function isColumnFilledBy(column, char){
    if (marca_posicao[0][column] == char && marca_posicao[1][column] == char && marca_posicao[2][column] == char){
        return true;
    } else {
        return false;
    }
}

function isPrimaryDiagonalFilled(char){
    if (marca_posicao[0][0] == char && marca_posicao[1][1] == char && marca_posicao[2][2] == char){
        return true;
    } else {
        return false;
    }
}

function isSecondaryDiagonalFilled(char){
    if (marca_posicao[2][0] == char && marca_posicao[1][1] == char && marca_posicao[0][2] == char){
        return true;
    } else {
        return false;
    }
}


function fimDeJogo(){

    if (
        isLineFilledBy(0,'X') || isLineFilledBy(1,'X') || isLineFilledBy(2,'X') ||
        isColumnFilledBy(0,'X') || isColumnFilledBy(1,'X') || isColumnFilledBy(2,'X') ||
        isPrimaryDiagonalFilled('X') || isSecondaryDiagonalFilled('X')
    )   {
        document.getElementById("vez").style.color = 'red';
        document.getElementById("vez").innerHTML = 'X Ganhou';
        ha_vencedor = true;

    } else if (
        isLineFilledBy(0,'O') || isLineFilledBy(1,'O') || isLineFilledBy(2,'O') ||
        isColumnFilledBy(0,'O') || isColumnFilledBy(1,'O') || isColumnFilledBy(2,'O') ||
        isPrimaryDiagonalFilled('O') || isSecondaryDiagonalFilled('O')
    )   {
        document.getElementById("vez").style.color = 'red';
        document.getElementById("vez").innerHTML = 'Bola Ganhou';
        ha_vencedor = true;

    } else if (jogadas == 9) 
    {
        document.getElementById("vez").style.color = 'red';
        document.getElementById("vez").innerHTML = 'Deu velha';
    }

}


/* CPU Intelligence */




