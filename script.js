var plays = 0;
var have_winner = false;

var insert_position =  [
    [false, false, false],
    [false, false, false], 
    [false, false, false], 
];

document.getElementById('turn').innerHTML = 'Vez de O';
document.getElementById('plays').innerHTML ='Jogadas feitas: '+ plays;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
var lineRandom = getRandomInt(0, 3);
var columnRandom = getRandomInt(0, 3);

var player = getRandomInt(1, 3);
console.log(player)
if (player == 2) {
    document.getElementById('turn').innerHTML = 'Vez de X';
    window.setTimeout('cpuTurn()', 1000);
}

function insertChar(line, column, char){
    var image;
    if (char === 'O'){
        image = 'url("images/bola.jpg")';
    } else if (char === 'X'){
        image = 'url("images/xis.jpg")'
    }

    document.getElementById('pos'+ line + column).style.backgroundImage = image;
    insert_position[line][column] = char;
}

function play(line, column){
    
    if(insert_position[line][column] == false && have_winner == false){
        if(player == 1) {
            insertChar(line, column, 'O');
            player++;
            plays++;
            document.getElementById('plays').innerHTML ='Jogadas feitas: '+ plays;
            document.getElementById('turn').innerHTML = 'Vez de X';
            window.setTimeout('cpuTurn()', 1000); 
        }
        checkEnd()
    } else {
        alert('Posição já marcada!')
    }
}

function insereX(line,column){
    document.getElementById('pos'+line+column).style.backgroundImage = 'url("images/xis.jpg")';
    insert_position[line][column] = 'X';
}

function isColumnFilledBy(column, char){
    if (insert_position[0][column] == char && insert_position[1][column] == char && insert_position[2][column] == char){
        return true;
    } else {
        return false;
    }
}

function cpuTurn() {
    if (player == 2 && have_winner == false){

        if (insert_position[1][1] == false && plays !== 0) {
            insertChar(1, 1, 'X');
        }
        else if (insert_position[0][0] == 'X' && insert_position[0][1] == 'X' && insert_position[0][2] == false ){
            insertChar(0, 2, 'X');
        } else if (insert_position[0][0] == 'X' && insert_position[0][2] == 'X' && insert_position[0][1] == false ){
            insertChar(0, 1, 'X');
        } else if (insert_position[0][1] == 'X' && insert_position[0][2] == 'X' && insert_position[0][0] == false ){
            insertChar(0, 0, 'X');
        } else if (insert_position[1][0] == 'X' && insert_position[1][1] == 'X' && insert_position[1][2] == false ){
            insertChar(1, 2, 'X');
        } else if (insert_position[1][0] == 'X' && insert_position[1][2] == 'X' && insert_position[1][1] == false ){
            insertChar(1, 1, 'X');
        } else if (insert_position[1][1] == 'X' && insert_position[1][2] == 'X' && insert_position[1][0] == false ){
            insertChar(1, 0, 'X');
        } else if (insert_position[2][0] == 'X' && insert_position[2][1] == 'X' && insert_position[2][2] == false ){
            insertChar(2, 2, 'X');
        } else if (insert_position[2][0] == 'X' && insert_position[2][2] == 'X' && insert_position[2][1] == false ){
            insertChar(2, 1, 'X');
        } else if (insert_position[2][1] == 'X' && insert_position[2][2] == 'X' && insert_position[2][0] == false ){
            insertChar(2, 0, 'X');

        } else if (insert_position[0][0] == 'X' && insert_position[1][0] == 'X' && insert_position[2][0] == false ){
            insertChar(2, 0, 'X');
        } else if (insert_position[0][0] == 'X' && insert_position[2][0] == 'X' && insert_position[1][0] == false ){
            insertChar(1, 0, 'X');
        } else if (insert_position[1][0] == 'X' && insert_position[2][0] == 'X' && insert_position[0][0] == false ){
            insertChar(0, 0, 'X');

        } else if (insert_position[0][1] == 'X' && insert_position[1][1] == 'X' && insert_position[2][1] == false ){
            insertChar(2, 1, 'X');
        } else if (insert_position[0][1] == 'X' && insert_position[2][1] == 'X' && insert_position[1][1] == false ){
            insertChar(1, 1, 'X');
        } else if (insert_position[1][1] == 'X' && insert_position[2][1] == 'X' && insert_position[0][1] == false ){
            insertChar(0, 1, 'X');

        } else if (insert_position[1][2] == 'X' && insert_position[2][2] == 'X' && insert_position[0][2] == false ){
            insertChar(0, 2, 'X');
        } else if (insert_position[0][2] == 'X' && insert_position[2][2] == 'X' && insert_position[1][2] == false ){
            insertChar(1, 2, 'X');
        } else if (insert_position[0][2] == 'X' && insert_position[1][2] == 'X' && insert_position[2][2] == false ){
            insertChar(0, 2, 'X');

        } else if (insert_position[0][0] == 'X' && insert_position[1][1] == 'X' && insert_position[2][2] == false ){
            insertChar(2, 2, 'X');

        } else if (insert_position[0][0] == 'X' && insert_position[2][2] == 'X' && insert_position[1][1] == false ){
            insertChar(1, 1, 'X');
        } else if (insert_position[1][1] == 'X' && insert_position[2][2] == 'X' && insert_position[0][0] == false ){
            insertChar(0, 0, 'X');

        } else if (insert_position[2][0] == 'X' && insert_position[1][1] == 'X' && insert_position[0][2] == false ){
            insertChar(0, 2, 'X');
        } else if (insert_position[2][0] == 'X' && insert_position[0][2] == 'X' && insert_position[1][1] == false ){
            insertChar(1, 1, 'X');
        } else if (insert_position[1][1] == 'X' && insert_position[0][2] == 'X' && insert_position[2][0] == false ){
            insertChar(2, 0, 'X');
        }  

        else if (insert_position[0][0] == 'O' && insert_position[0][1] == 'O' && insert_position[0][2] == false ){
            insertChar(0, 2, 'X');
        } else if (insert_position[0][0] == 'O' && insert_position[0][2] == 'O' && insert_position[0][1] == false ){
            insertChar(0, 1, 'X');
        } else if (insert_position[0][1] == 'O' && insert_position[0][2] == 'O' && insert_position[0][0] == false ){
            insertChar(0, 0, 'X');
        } else if (insert_position[1][0] == 'O' && insert_position[1][1] == 'O' && insert_position[1][2] == false ){
            insertChar(0, 2, 'X');
        } else if (insert_position[1][0] == 'O' && insert_position[1][2] == 'O' && insert_position[1][1] == false ){
            insertChar(1, 1, 'X');
        } else if (insert_position[1][1] == 'O' && insert_position[1][2] == 'O' && insert_position[1][0] == false ){
            insertChar(1, 0, 'X');
        } else if (insert_position[2][0] == 'O' && insert_position[2][1] == 'O' && insert_position[2][2] == false ){
            insertChar(2, 2, 'X');
        } else if (insert_position[2][0] == 'O' && insert_position[2][2] == 'O' && insert_position[2][1] == false ){
            insertChar(2, 1, 'X');
        } else if (insert_position[2][1] == 'O' && insert_position[2][2] == 'O' && insert_position[2][0] == false ){
            insertChar(2, 0, 'X');

        } else if (insert_position[0][0] == 'O' && insert_position[1][0] == 'O' && insert_position[2][0] == false ){
            insertChar(2, 0, 'X');
        } else if (insert_position[0][0] == 'O' && insert_position[2][0] == 'O' && insert_position[1][0] == false ){
            insertChar(1, 0, 'X');
        } else if (insert_position[1][0] == 'O' && insert_position[2][0] == 'O' && insert_position[0][0] == false ){
            insertChar(0, 0, 'X');

        } else if (insert_position[0][1] == 'O' && insert_position[1][1] == 'O' && insert_position[2][1] == false ){
            insertChar(2, 1, 'X');
        } else if (insert_position[0][1] == 'O' && insert_position[2][1] == 'O' && insert_position[1][1] == false ){
            insertChar(1, 1, 'X');
        } else if (insert_position[1][1] == 'O' && insert_position[2][1] == 'O' && insert_position[0][1] == false ){
            insertChar(0, 1, 'X');

        } else if (insert_position[1][2] == 'O' && insert_position[2][2] == 'O' && insert_position[0][2] == false ){
            insertChar(0, 2, 'X');
        } else if (insert_position[0][2] == 'O' && insert_position[2][2] == 'O' && insert_position[1][2] == false ){
            insertChar(1, 2, 'X');
        } else if (insert_position[0][2] == 'O' && insert_position[1][2] == 'O' && insert_position[2][2] == false ){
            insertChar(0, 2, 'X');

        } else if (insert_position[0][0] == 'O' && insert_position[1][1] == 'O' && insert_position[2][2] == false ){
            insertChar(2, 2, 'X');

        } else if (insert_position[0][0] == 'O' && insert_position[2][2] == 'O' && insert_position[1][1] == false ){
            insertChar(1, 1, 'X');
        } else if (insert_position[1][1] == 'O' && insert_position[2][2] == 'O' && insert_position[0][0] == false ){
            insertChar(0, 0, 'X');

        } else if (insert_position[2][0] == 'O' && insert_position[1][1] == 'O' && insert_position[0][2] == false ){
            insertChar(0, 2, 'X');
        } else if (insert_position[2][0] == 'O' && insert_position[0][2] == 'O' && insert_position[1][1] == false ){
            insertChar(1, 1, 'X');
        } else if (insert_position[1][1] == 'O' && insert_position[0][2] == 'O' && insert_position[2][0] == false ){
            insertChar(2, 0, 'X');
        }                      

        else if (insert_position[lineRandom][columnRandom] == false) {
            insert_position[lineRandom][columnRandom] = 'X';
            document.getElementById('pos'+lineRandom+columnRandom).style.backgroundImage = 'url("images/xis.jpg")';
            document.getElementById('turn').innerHTML = 'Vez de O';
            getRandomInt(0, 2)
        } else if (plays < 9) {
            lineRandom = getRandomInt(0, 3);
            columnRandom = getRandomInt(0, 3);
            
            cpuTurn();
            plays--;
            player++;
        }
        plays++;
        player--;
        document.getElementById('plays').innerHTML ='Numero de jogadas:'+ plays;
        checkEnd()
    }
}

function isLineFilledBy(line, char){
    if (insert_position[line][0] == char && insert_position[line][1] == char && insert_position[line][2] == char){
        return true;
    } else {
        return false;
    }
}

function isColumnFilledBy(column, char){
    if (insert_position[0][column] == char && insert_position[1][column] == char && insert_position[2][column] == char){
        return true;
    } else {
        return false;
    }
}

function isPrimaryDiagonalFilled(char){
    if (insert_position[0][0] == char && insert_position[1][1] == char && insert_position[2][2] == char){
        return true;
    } else {
        return false;
    }
}

function isSecondaryDiagonalFilled(char){
    if (insert_position[2][0] == char && insert_position[1][1] == char && insert_position[0][2] == char){
        return true;
    } else {
        return false;
    }
}

function setWinner(winner){
    document.getElementById('turn').style.color = 'red';
    document.getElementById('turn').innerHTML = winner;
}

function checkEnd(){

    if (
        isLineFilledBy(0,'X') || isLineFilledBy(1,'X') || isLineFilledBy(2,'X') ||
        isColumnFilledBy(0,'X') || isColumnFilledBy(1,'X') || isColumnFilledBy(2,'X') ||
        isPrimaryDiagonalFilled('X') || isSecondaryDiagonalFilled('X')
    )   {
        setWinner('X Venceu!');
        have_winner = true;

    } else if (
        isLineFilledBy(0,'O') || isLineFilledBy(1,'O') || isLineFilledBy(2,'O') ||
        isColumnFilledBy(0,'O') || isColumnFilledBy(1,'O') || isColumnFilledBy(2,'O') ||
        isPrimaryDiagonalFilled('O') || isSecondaryDiagonalFilled('O')
    )   {
        setWinner('Bola Venceu!');
        have_winner = true;

    } else if (plays == 9) 
    {
        setWinner('Deu velha!');
    }
}




