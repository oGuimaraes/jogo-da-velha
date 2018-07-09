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

function clic(coluna,linha){
    
    if(valida_posicao[coluna][linha] == 0 && ha_vencedor == false){
        if(player == 1) {
            valida_posicao[coluna][linha] = "bola";
            document.getElementById("pos"+coluna+linha).style.backgroundImage = 'url("images/bola.jpg")';
            marca_posicao[coluna][linha] = 'O';
            player++;
            jogadas++;
            console.log(jogadas);
            document.getElementById("vez").innerHTML = 'Vez de X';

        } else if (player == 2){
            valida_posicao[coluna][linha] = "xis";
            document.getElementById("pos"+coluna+linha).style.backgroundImage = 'url("images/xis.jpg")';
            marca_posicao[coluna][linha] = 'X';
            player--;
            jogadas++;
            console.log(jogadas);
            document.getElementById("vez").innerHTML = 'Vez de O';
        }
    }

    fimDeJogo();
}

function clic(coluna,linha){
    
    if(valida_posicao[coluna][linha] == 0 && ha_vencedor == false){
        if(player == 1) {
            valida_posicao[coluna][linha] = "bola";
            document.getElementById("pos"+coluna+linha).style.backgroundImage = 'url("images/bola.jpg")';
            marca_posicao[coluna][linha] = 'O';
            player++;
            jogadas++;
            console.log(jogadas);
            document.getElementById("vez").innerHTML = 'Vez de X';

        } else if (player == 2){

            /* Gera 2 números aleatórios (linha,coluna) entre 0 e 2(valores possiveis da matriz [0][0] até [2][2]) */
            getRandomInt(0,2);
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                var colunaRandom = Math.floor(Math.random() * (max - min)) + min;
                var linhaRandom = Math.floor(Math.random() * (max - min)) + min;

                if (valida_posicao[colunaRandom][linhaRandom] == false) { //Se a posição estiver vazia, faça:
                    valida_posicao[colunaRandom][linhaRandom] = "xis"; // Marca xis na matriz na posição aleatoria
                    marca_posicao[colunaRandom][linhaRandom] = 'X';// Marca xis na matriz na posição aleatoria
                    document.getElementById("pos"+coluna+linha).style.backgroundImage = 'url("images/xis.jpg")';
                    player--;
                    jogadas++;
                    document.getElementById("vez").innerHTML = 'Vez de O';
                } else { // se a posição de valida_posição[x][y]estiver ocupada:
                    while (valida_posicao[colunaRandom][linhaRandom] != false){ /*Enquanto valida_posição estiver
                        diferente de vazio: */
                        colunaRandom = Math.floor(Math.random() * (max - min)) + min; //Gerará um novo valor aleatorio(Coluna)
                        linhaRandom = Math.floor(Math.random() * (max - min)) + min; //Gerará um novo valor aleatorio(Linha)
                    }
                    // Se chegou nessa etapa é porque valida_posição[x][y] está vazia, então faça:
                    valida_posicao[colunaRandom][linhaRandom] = "xis";
                    marca_posicao[colunaRandom][linhaRandom] = 'X';
                    document.getElementById("pos"+coluna+linha).style.backgroundImage = 'url("images/xis.jpg")';
                    player--;
                    jogadas++;
                    document.getElementById("vez").innerHTML = 'Vez de O';
                }
            }

            valida_posicao[coluna][linha] = "xis";
            document.getElementById("pos"+coluna+linha).style.backgroundImage = 'url("images/xis.jpg")';
            marca_posicao[coluna][linha] = 'X';
            player--;
            jogadas++;
            document.getElementById("vez").innerHTML = 'Vez de O';
        }
    }

    fimDeJogo();
}

/*  Player O CPU (Inacabado)

function click(posicao_jogada){
    
    if(valida_posicao[posicao_jogada] == 0 && ha_vencedor == false){
        if(player == 1) {
            valida_posicao[posicao_jogada] = "bola";
            document.getElementById("pos"+posicao_jogada).style.backgroundImage = 'url("images/bola.jpg")';
            marca_posicao[posicao_jogada] = 'O';
            player++;
            jogadas++;
            document.getElementById("vez").innerHTML = 'Vez de O';
        } else {};
    }   
    fimDeJogo();

    function vezCPU() {
        if (player == 2){
            var posCPU = Math.floor(Math.random() * 8)
            console.log(posCPU+1);
        
            if (valida_posicao[posCPU] == false){
                document.getElementById("pos"+posCPU).style.backgroundImage = 'url("images/Ois.jpg")';
                document.getElementById("vez").innerHTML = 'Vez de O';
                valida_posicao[posCPU] = "Ois";
                marca_posicao[posicao_jogada] = 'O';
                player--;
                jogadas++;
            }
            else {
                posCPU = Math.floor(Math.random() * 8)
                document.getElementById("pos"+posCPU).style.backgroundImage = 'url("images/Ois.jpg")';
                document.getElementById("vez").innerHTML = 'Vez de O';
                valida_posicao[posCPU] = "Ois";
                marca_posicao[posicao_jogada] = 'O';
                player--;
                jogadas++;    
            }
            fimDeJogo();
            console.log(valida_posicao) 
        }
    }
    vezCPU();
}
*/


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


/*var gameOver = false;

if (gameOver) {return;} // Se game over for verdadeiro, não executará o bloco */    