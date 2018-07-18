
var jogadas = 0;
var ha_vencedor = false;

var marca_posicao =  [
    [false, false, false],
    [false, false, false], 
    [false, false, false], 
];

document.getElementById('vez').innerHTML = 'Vez de O';
document.getElementById('jogadas').innerHTML ='Jogadas feitas: '+jogadas;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
var linhaRandom = getRandomInt(0, 3);
var colunaRandom = getRandomInt(0, 3);

var player = getRandomInt(1, 3);
console.log(player)
if (player == 2) {
    document.getElementById('vez').innerHTML = 'Vez de X';
    window.setTimeout('vezCpu()', 1000);
}

function insertChar(line, column, char){
    var image;
    if (char === 'O'){
        image = 'url("images/bola.jpg")';
    } else if (char === 'X'){
        image = 'url("images/xis.jpg")'
    }

    document.getElementById('pos'+ line + column).style.backgroundImage = image;
    marca_posicao[line][column] = char;
}

function play(linha, coluna){
    
    if(marca_posicao[linha][coluna] == false && ha_vencedor == false){
        if(player == 1) {
            insertChar(linha, coluna, 'O');
            player++;
            jogadas++;
            document.getElementById('vez').innerHTML = 'Vez de X';
            window.setTimeout('vezCpu()', 1000); 
        }
        fimDeJogo()
    } else {
        alert('Posição já marcada!')
    }
}

function insereX(linha,coluna){
    document.getElementById('pos'+linha+coluna).style.backgroundImage = 'url("images/xis.jpg")';
    marca_posicao[linha][coluna] = 'X';
}

function isColumnFilledBy(column, char){
    if (marca_posicao[0][column] == char && marca_posicao[1][column] == char && marca_posicao[2][column] == char){
        return true;
    } else {
        return false;
    }
}

function vezCpu() {
    if (player == 2 && ha_vencedor == false){

        if (marca_posicao[1][1] == false && jogadas !== 0) {
            insertChar(1, 1, 'X');
        }
        else if (marca_posicao[0][0] == 'X' && marca_posicao[0][1] == 'X' && marca_posicao[0][2] == false ){
            insertChar(0, 2, 'X');
        } else if (marca_posicao[0][0] == 'X' && marca_posicao[0][2] == 'X' && marca_posicao[0][1] == false ){
            insertChar(0, 1, 'X');
        } else if (marca_posicao[0][1] == 'X' && marca_posicao[0][2] == 'X' && marca_posicao[0][0] == false ){
            insertChar(0, 0, 'X');
        } else if (marca_posicao[1][0] == 'X' && marca_posicao[1][1] == 'X' && marca_posicao[1][2] == false ){
            insertChar(1, 2, 'X');
        } else if (marca_posicao[1][0] == 'X' && marca_posicao[1][2] == 'X' && marca_posicao[1][1] == false ){
            insertChar(1, 1, 'X');
        } else if (marca_posicao[1][1] == 'X' && marca_posicao[1][2] == 'X' && marca_posicao[1][0] == false ){
            insertChar(1, 0, 'X');
        } else if (marca_posicao[2][0] == 'X' && marca_posicao[2][1] == 'X' && marca_posicao[2][2] == false ){
            insertChar(2, 2, 'X');
        } else if (marca_posicao[2][0] == 'X' && marca_posicao[2][2] == 'X' && marca_posicao[2][1] == false ){
            insertChar(2, 1, 'X');
        } else if (marca_posicao[2][1] == 'X' && marca_posicao[2][2] == 'X' && marca_posicao[2][0] == false ){
            insertChar(2, 0, 'X');

        } else if (marca_posicao[0][0] == 'X' && marca_posicao[1][0] == 'X' && marca_posicao[2][0] == false ){
            insertChar(2, 0, 'X');
        } else if (marca_posicao[0][0] == 'X' && marca_posicao[2][0] == 'X' && marca_posicao[1][0] == false ){
            insertChar(1, 0, 'X');
        } else if (marca_posicao[1][0] == 'X' && marca_posicao[2][0] == 'X' && marca_posicao[0][0] == false ){
            insertChar(0, 0, 'X');

        } else if (marca_posicao[0][1] == 'X' && marca_posicao[1][1] == 'X' && marca_posicao[2][1] == false ){
            insertChar(2, 1, 'X');
        } else if (marca_posicao[0][1] == 'X' && marca_posicao[2][1] == 'X' && marca_posicao[1][1] == false ){
            insertChar(1, 1, 'X');
        } else if (marca_posicao[1][1] == 'X' && marca_posicao[2][1] == 'X' && marca_posicao[0][1] == false ){
            insertChar(0, 1, 'X');

        } else if (marca_posicao[1][2] == 'X' && marca_posicao[2][2] == 'X' && marca_posicao[0][2] == false ){
            insertChar(0, 2, 'X');
        } else if (marca_posicao[0][2] == 'X' && marca_posicao[2][2] == 'X' && marca_posicao[1][2] == false ){
            insertChar(1, 2, 'X');
        } else if (marca_posicao[0][2] == 'X' && marca_posicao[1][2] == 'X' && marca_posicao[2][2] == false ){
            insertChar(0, 2, 'X');

        } else if (marca_posicao[0][0] == 'X' && marca_posicao[1][1] == 'X' && marca_posicao[2][2] == false ){
            insertChar(2, 2, 'X');

        } else if (marca_posicao[0][0] == 'X' && marca_posicao[2][2] == 'X' && marca_posicao[1][1] == false ){
            insertChar(1, 1, 'X');
        } else if (marca_posicao[1][1] == 'X' && marca_posicao[2][2] == 'X' && marca_posicao[0][0] == false ){
            insertChar(0, 0, 'X');

        } else if (marca_posicao[2][0] == 'X' && marca_posicao[1][1] == 'X' && marca_posicao[0][2] == false ){
            insertChar(0, 2, 'X');
        } else if (marca_posicao[2][0] == 'X' && marca_posicao[0][2] == 'X' && marca_posicao[1][1] == false ){
            insertChar(1, 1, 'X');
        } else if (marca_posicao[1][1] == 'X' && marca_posicao[0][2] == 'X' && marca_posicao[2][0] == false ){
            insertChar(2, 0, 'X');
        }  

        else if (marca_posicao[0][0] == 'O' && marca_posicao[0][1] == 'O' && marca_posicao[0][2] == false ){
            insertChar(0, 2, 'X');
        } else if (marca_posicao[0][0] == 'O' && marca_posicao[0][2] == 'O' && marca_posicao[0][1] == false ){
            insertChar(0, 1, 'X');
        } else if (marca_posicao[0][1] == 'O' && marca_posicao[0][2] == 'O' && marca_posicao[0][0] == false ){
            insertChar(0, 0, 'X');
        } else if (marca_posicao[1][0] == 'O' && marca_posicao[1][1] == 'O' && marca_posicao[1][2] == false ){
            insertChar(0, 2, 'X');
        } else if (marca_posicao[1][0] == 'O' && marca_posicao[1][2] == 'O' && marca_posicao[1][1] == false ){
            insertChar(1, 1, 'X');
        } else if (marca_posicao[1][1] == 'O' && marca_posicao[1][2] == 'O' && marca_posicao[1][0] == false ){
            insertChar(1, 0, 'X');
        } else if (marca_posicao[2][0] == 'O' && marca_posicao[2][1] == 'O' && marca_posicao[2][2] == false ){
            insertChar(2, 2, 'X');
        } else if (marca_posicao[2][0] == 'O' && marca_posicao[2][2] == 'O' && marca_posicao[2][1] == false ){
            insertChar(2, 1, 'X');
        } else if (marca_posicao[2][1] == 'O' && marca_posicao[2][2] == 'O' && marca_posicao[2][0] == false ){
            insertChar(2, 0, 'X');

        } else if (marca_posicao[0][0] == 'O' && marca_posicao[1][0] == 'O' && marca_posicao[2][0] == false ){
            insertChar(2, 0, 'X');
        } else if (marca_posicao[0][0] == 'O' && marca_posicao[2][0] == 'O' && marca_posicao[1][0] == false ){
            insertChar(1, 0, 'X');
        } else if (marca_posicao[1][0] == 'O' && marca_posicao[2][0] == 'O' && marca_posicao[0][0] == false ){
            insertChar(0, 0, 'X');

        } else if (marca_posicao[0][1] == 'O' && marca_posicao[1][1] == 'O' && marca_posicao[2][1] == false ){
            insertChar(2, 1, 'X');
        } else if (marca_posicao[0][1] == 'O' && marca_posicao[2][1] == 'O' && marca_posicao[1][1] == false ){
            insertChar(1, 1, 'X');
        } else if (marca_posicao[1][1] == 'O' && marca_posicao[2][1] == 'O' && marca_posicao[0][1] == false ){
            insertChar(0, 1, 'X');

        } else if (marca_posicao[1][2] == 'O' && marca_posicao[2][2] == 'O' && marca_posicao[0][2] == false ){
            insertChar(0, 2, 'X');
        } else if (marca_posicao[0][2] == 'O' && marca_posicao[2][2] == 'O' && marca_posicao[1][2] == false ){
            insertChar(1, 2, 'X');
        } else if (marca_posicao[0][2] == 'O' && marca_posicao[1][2] == 'O' && marca_posicao[2][2] == false ){
            insertChar(0, 2, 'X');

        } else if (marca_posicao[0][0] == 'O' && marca_posicao[1][1] == 'O' && marca_posicao[2][2] == false ){
            insertChar(2, 2, 'X');

        } else if (marca_posicao[0][0] == 'O' && marca_posicao[2][2] == 'O' && marca_posicao[1][1] == false ){
            insertChar(1, 1, 'X');
        } else if (marca_posicao[1][1] == 'O' && marca_posicao[2][2] == 'O' && marca_posicao[0][0] == false ){
            insertChar(0, 0, 'X');

        } else if (marca_posicao[2][0] == 'O' && marca_posicao[1][1] == 'O' && marca_posicao[0][2] == false ){
            insertChar(0, 2, 'X');
        } else if (marca_posicao[2][0] == 'O' && marca_posicao[0][2] == 'O' && marca_posicao[1][1] == false ){
            insertChar(1, 1, 'X');
        } else if (marca_posicao[1][1] == 'O' && marca_posicao[0][2] == 'O' && marca_posicao[2][0] == false ){
            insertChar(2, 0, 'X');
        }                      

        else if (marca_posicao[linhaRandom][colunaRandom] == false) {
            marca_posicao[linhaRandom][colunaRandom] = 'X';
            document.getElementById('pos'+linhaRandom+colunaRandom).style.backgroundImage = 'url("images/xis.jpg")';
            document.getElementById('vez').innerHTML = 'Vez de O';
            getRandomInt(0, 2)
        } else if (jogadas < 9) {
            linhaRandom = getRandomInt(0, 3);
            colunaRandom = getRandomInt(0, 3);
            
            vezCpu();
            jogadas--;
            player++;
        }
        jogadas++;
        player--;
        document.getElementById('jogadas').innerHTML ='Numero de jogadas:'+ jogadas;
        fimDeJogo()
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

function defineVencedor(vencedor){
    document.getElementById('vez').style.color = 'red';
    document.getElementById('vez').innerHTML = vencedor;
}

function fimDeJogo(){

    if (
        isLineFilledBy(0,'X') || isLineFilledBy(1,'X') || isLineFilledBy(2,'X') ||
        isColumnFilledBy(0,'X') || isColumnFilledBy(1,'X') || isColumnFilledBy(2,'X') ||
        isPrimaryDiagonalFilled('X') || isSecondaryDiagonalFilled('X')
    )   {
        defineVencedor('X Venceu!');
        ha_vencedor = true;

    } else if (
        isLineFilledBy(0,'O') || isLineFilledBy(1,'O') || isLineFilledBy(2,'O') ||
        isColumnFilledBy(0,'O') || isColumnFilledBy(1,'O') || isColumnFilledBy(2,'O') ||
        isPrimaryDiagonalFilled('O') || isSecondaryDiagonalFilled('O')
    )   {
        defineVencedor('Bola Venceu!');
        ha_vencedor = true;

    } else if (jogadas == 9) 
    {
        defineVencedor('Deu velha!');
    }
}




