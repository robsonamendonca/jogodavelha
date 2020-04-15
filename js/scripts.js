let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes =  document.querySelectorAll(".box");
let buttons =  document.querySelectorAll("#button-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

//contador de jogadres
let player1 =0;
let player2 =0;


// adiconar o evnto de click aos box
for(let i=0; i<boxes.length;i++){

    //qundo alguem clica na caixa
    boxes[i].addEventListener('click',function(){
        
        let el = checkEl(player1, player2);

        //verificar se tem x ou o 
        if (this.childNodes.length == 0)
        {   
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);
            //computar jogada
            if(player1 == player2){
                player1++;
            }else{
                player2++;
            }

            //verificar quem ganhou?
            checkWinCondition();
        }

    })
}

function checkEl(player1,player2)
{    
    if(player1 == player2){
        //x
        el = x;
    }else{
        //o
        el = o
    }
    return el;
}

function checkWinCondition(){
    let b1 = document.getElementById('block-1');
    let b2 = document.getElementById('block-2');
    let b3 = document.getElementById('block-3');
    let b4 = document.getElementById('block-4');
    let b5 = document.getElementById('block-5');
    let b6 = document.getElementById('block-6');  
    let b7 = document.getElementById('block-7');
    let b8 = document.getElementById('block-8');
    let b9 = document.getElementById('block-9');  

    //horizontal
    if(b1.childNodes.length>0 && b2.childNodes.length>0 && b3.childNodes.length>0){

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child === 'x' && b2Child === 'x' && b3Child === 'x'){
            //x
        }else if(b1Child === 'o' && b2Child === 'o' && b3Child === 'o'){
            //o
        }
    }
    //horizontal
    if(b4.childNodes.length>0 && b5.childNodes.length>0 && b6.childNodes.length>0){

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child === 'x' && b5Child === 'x' && b6Child === 'x'){
            //x
        }else if(b4Child === 'o' && b5Child === 'o' && b6Child === 'o'){
            //o
        }
    }
//horizontal
    if(b7.childNodes.length>0 && b8.childNodes.length>0 && b9.childNodes.length>0){

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child === 'x' && b8Child === 'x' && b9Child === 'x'){
            //x
        }else if(b7Child === 'o' && b8Child === 'o' && b9Child === 'o'){
            //o
        }
    }

    
    //vertical
    if(b1.childNodes.length>0 && b4.childNodes.length>0 && b7.childNodes.length>0){

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child === 'x' && b4Child === 'x' && b7Child === 'x'){
            //x
        }else if(b1Child === 'o' && b4Child === 'o' && b7Child === 'o'){
            //o
        }
    }
    //vertical
    if(b2.childNodes.length>0 && b5.childNodes.length>0 && b8.childNodes.length>0){

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child === 'x' && b5Child === 'x' && b8Child === 'x'){
            //x
        }else if(b2Child === 'o' && b5Child === 'o' && b8Child === 'o'){
            //o
        }
    }
//vertical
    if(b3.childNodes.length>0 && b6.childNodes.length>0 && b9.childNodes.length>0){

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child === 'x' && b6Child === 'x' && b9Child === 'x'){
            //x
        }else if(b3Child === 'o' && b6Child === 'o' && b9Child === 'o'){
            //o
        }
    }

    //diagonal
    if(b1.childNodes.length>0 && b5.childNodes.length>0 && b9.childNodes.length>0){

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child === 'x' && b5Child === 'x' && b9Child === 'x'){
            //x
        }else if(b1Child === 'o' && b5Child === 'o' && b9Child === 'o'){
            //o
        }
    }
//diagonal
    if(b3.childNodes.length>0 && b5.childNodes.length>0 && b7.childNodes.length>0){

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child === 'x' && b5Child === 'x' && b7Child === 'x'){
            //x
        }else if(b3Child === 'o' && b5Child === 'o' && b7Child === 'o'){
            //o
        }
    }

   //deu velha
   let counter =0;
   for(let i=0; i<boxes.length;i++){
       if(boxes[i].childNodes[0] != undefined)
       counter++;
   }
   if(counter===9)
   {

       //velha
   }

}

//limpar o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner){

    let score;

}
