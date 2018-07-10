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

document.getElementById("vez").innerHTML = 'Vez de O';
function clic(coluna,linha){
    
console.log(valida_posicao[coluna][linha])
    
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
