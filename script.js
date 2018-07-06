var player = 1;
var jogadas = 0;
var ha_vencedor = false;
var valida_posicao =  new Array(0,0,0,0,0,0,0,0,0);
var marca_posicao = new Array();

function clic(posicao_jogada){
    
    if(valida_posicao[posicao_jogada] == 0 && ha_vencedor == false){
        if(player == 1) {
            valida_posicao[posicao_jogada] = "bola";
            document.getElementById("pos"+posicao_jogada).style.backgroundImage = 'url("images/bola.jpg")';
            marca_posicao[posicao_jogada] = 'O';
            player++;
            jogadas++;
            console.log(jogadas);
            document.getElementById("vez").innerHTML = 'Vez de X';

        } else if (player == 2){
            valida_posicao[posicao_jogada] = "xis";
            document.getElementById("pos"+posicao_jogada).style.backgroundImage = 'url("images/xis.jpg")';
            marca_posicao[posicao_jogada] = 'X';
            player--;
            jogadas++;
            console.log(jogadas);
            document.getElementById("vez").innerHTML = 'Vez de O';
        }
    }

    fimDeJogo();
}

function fimDeJogo(){

    if
    (marca_posicao[0] == 'O' && marca_posicao[1] == 'O' && marca_posicao[2] == 'O' ||
     marca_posicao[3] == 'O' && marca_posicao[4] == 'O' && marca_posicao[5] == 'O' ||
     marca_posicao[6] == 'O' && marca_posicao[7] == 'O' && marca_posicao[8] == 'O' ||
     marca_posicao[0] == 'O' && marca_posicao[3] == 'O' && marca_posicao[6] == 'O' ||
     marca_posicao[1] == 'O' && marca_posicao[4] == 'O' && marca_posicao[7] == 'O' ||
     marca_posicao[2] == 'O' && marca_posicao[5] == 'O' && marca_posicao[8] == 'O' ||  
     marca_posicao[0] == 'O' && marca_posicao[4] == 'O' && marca_posicao[8] == 'O' ||
     marca_posicao[6] == 'O' && marca_posicao[4] == 'O' && marca_posicao[2] == 'O'){
        $( "h3" ).effect( "bounce", "slow" );
        document.getElementById("vez").innerHTML = 'Bola Ganhou';
        ha_vencedor = true;
    } else if
    (marca_posicao[0] == 'X' && marca_posicao[1] == 'X' && marca_posicao[2] == 'X' ||
     marca_posicao[3] == 'X' && marca_posicao[4] == 'X' && marca_posicao[5] == 'X' ||
     marca_posicao[6] == 'X' && marca_posicao[7] == 'X' && marca_posicao[8] == 'X' ||
     marca_posicao[0] == 'X' && marca_posicao[3] == 'X' && marca_posicao[6] == 'X' ||
     marca_posicao[1] == 'X' && marca_posicao[4] == 'X' && marca_posicao[7] == 'X' ||
     marca_posicao[2] == 'X' && marca_posicao[5] == 'X' && marca_posicao[8] == 'X' ||  
     marca_posicao[0] == 'X' && marca_posicao[4] == 'X' && marca_posicao[8] == 'X' ||
     marca_posicao[6] == 'X' && marca_posicao[4] == 'X' && marca_posicao[2] == 'X'){
        $( "h3" ).effect( "bounce", "slow" );
        document.getElementById("vez").innerHTML = 'Xis Ganhou';
        ha_vencedor = true;
    } else if (jogadas == 9) {
        $( "h3" ).effect( "bounce", "slow" );
        document.getElementById("vez").innerHTML = 'Deu velha';
    }

}
