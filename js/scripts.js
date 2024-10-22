let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes =  document.querySelectorAll(".box");
let buttons =  document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer="";
let btnreset = document.querySelector("#reset");
let pessoaX = document.querySelector(".img-x");
let pessoaO = document.querySelector(".img-o");
let roboO = document.querySelector(".img-r-o");

//contador de jogadres
let player1 =0;
let player2 =0;

btnreset.addEventListener('click',function(){
    reset();
});


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
                
                if (secondPlayer == "ai-players"){
                    computerPlay2();
                    player2++;
                }
            }else{
                player2++;
            }

            //verificar quem ganhou?
            checkWinCondition();
        }

    })
}

//evento para saber se é 2 players ou IA
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click",function(){
        secondPlayer = this.getAttribute("id");
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';            
        }
        let buttonsContainer = document.querySelector("#buttons-container");
        buttonsContainer.style.display = 'none';

        setTimeout(() => {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
            let containerfooter = document.querySelector("#container-footer");
            containerfooter.classList.remove("hide");            
        }, 300);
    });
    
}

function checkEl(player1,player2)
{    
    if(player1 == player2){
        //x
        el = x;
        exibeIconeJogador("o");
    }else{
        //o
        el = o
        exibeIconeJogador("x");
    }
    return el;
}

function exibeIconeJogador(player){
    if (player == "x"){
        pessoaO.classList.add("hide");
        pessoaX.classList.remove("hide");
    }else{
        pessoaX.classList.add("hide");
        if (secondPlayer == "ai-players"){
            roboO.classList.remove("hide");
            pessoaO.classList.add("hide");
        }else{
            pessoaO.classList.remove("hide");
            roboO.classList.add("hide");
        }
    }
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
            declareWinner("x");//x
        }else if(b1Child === 'o' && b2Child === 'o' && b3Child === 'o'){
            declareWinner("o");//o
        }
    }
    //horizontal
    if(b4.childNodes.length>0 && b5.childNodes.length>0 && b6.childNodes.length>0){

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child === 'x' && b5Child === 'x' && b6Child === 'x'){
            declareWinner("x");//x
        }else if(b4Child === 'o' && b5Child === 'o' && b6Child === 'o'){
            declareWinner("o");//o
        }
    }
//horizontal
    if(b7.childNodes.length>0 && b8.childNodes.length>0 && b9.childNodes.length>0){

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child === 'x' && b8Child === 'x' && b9Child === 'x'){
            declareWinner("x");//x
        }else if(b7Child === 'o' && b8Child === 'o' && b9Child === 'o'){
            declareWinner("o");//o
        }
    }

    
    //vertical
    if(b1.childNodes.length>0 && b4.childNodes.length>0 && b7.childNodes.length>0){

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child === 'x' && b4Child === 'x' && b7Child === 'x'){
            declareWinner("x");//x
        }else if(b1Child === 'o' && b4Child === 'o' && b7Child === 'o'){
            declareWinner("o");//o
        }
    }
    //vertical
    if(b2.childNodes.length>0 && b5.childNodes.length>0 && b8.childNodes.length>0){

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child === 'x' && b5Child === 'x' && b8Child === 'x'){
            declareWinner("x");//x
        }else if(b2Child === 'o' && b5Child === 'o' && b8Child === 'o'){
            declareWinner("o");//o
        }
    }
//vertical
    if(b3.childNodes.length>0 && b6.childNodes.length>0 && b9.childNodes.length>0){

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child === 'x' && b6Child === 'x' && b9Child === 'x'){
            declareWinner("x");//x
        }else if(b3Child === 'o' && b6Child === 'o' && b9Child === 'o'){
            declareWinner("o");//o
        }
    }

    //posibility
    if(b1.childNodes.length>0 && b5.childNodes.length>0 && b9.childNodes.length>0){

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child === 'x' && b5Child === 'x' && b9Child === 'x'){
            declareWinner("x");//x
        }else if(b1Child === 'o' && b5Child === 'o' && b9Child === 'o'){
            declareWinner("o");//o
        }
    }
//posibility
    if(b3.childNodes.length>0 && b5.childNodes.length>0 && b7.childNodes.length>0){

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child === 'x' && b5Child === 'x' && b7Child === 'x'){
            declareWinner("x");//x
        }else if(b3Child === 'o' && b5Child === 'o' && b7Child === 'o'){
            declareWinner("o");//o
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
    declareWinner("velha"); //velha
   }

}

//limpar o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner){

    let scoreboardX = document.querySelector('#scoreboard-1');
    let scoreboardY = document.querySelector('#scoreboard-2');
    let placarX=0;
    let placarO=0;
    let msg ="";

    if(winner == 'x'){
        scoreboardX.innerHTML = parseInt(scoreboardX.innerHTML) + 1;
        msg = mensagemX
        placarX =  parseInt(scoreboardX.innerHTML);
        exibeIconeJogador("x");
    } else if(winner == 'o'){
        scoreboardY.innerHTML = parseInt(scoreboardY.innerHTML) + 1;
        msg = mensagemO;
        placarO =  parseInt(scoreboardY.innerHTML);
        exibeIconeJogador("o");
    } else {
        msg =mensagemVelha;
    }
    //parabens
    msg = mensagemRank(placarX,placarO,msg);

    //exibe a mensagem
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");
    
    //reset 
    resetJogada();

}


function mensagemRank(placarX,placarO, msg){
    //parabenizer e futyramente guardar records
    if (placarX ==0 && placarO == 10)
    {
        return '"O" '+mensagemPodio10;
    }else if (placarX ==10 && placarO == 0){
        return '"X" '+mensagemPodio10;
    }
    else if (placarX>placarO && (placarX-placarO)==20){
        return '"X" '+mensagemPodio20.replace('@',placarX);
    }
    else if (placarO>placarX && (placarO-placarX)==20){
        return '"O" '+mensagemPodio20.replace('@',placarO);
    }
    else if (placarX>placarO && (placarX-placarO)==30){
        return '"X" '+mensagemPodio30.replace('@',placarX);
    }
    else if (placarO>placarX && (placarO-placarX)==30){
        return '"O" '+mensagemPodio30.replace('@',placarO);      

    }else if (placarX>placarO && (placarX-placarO)==50){
            return '"X" '+mensagemPodio50.replace('@',placarX);
    }
    else if (placarO>placarX && (placarO-placarX)==50){
        return '"O" '+mensagemPodio50.replace('@',placarO);  

    }else if (placarX>placarO && (placarX-placarO)==70){
        return '"X" '+mensagemPodio70.replace('@',placarX);
    }
    else if (placarO>placarX && (placarO-placarX)==70){
        return '"O" '+mensagemPodio70.replace('@',placarO);  
        
    } else if (placarX>placarO && (placarX-placarO)==100){
        return '"X" '+mensagemPodio100.replace('@',placarX);
    }
    else if (placarO>placarX && (placarO-placarX)==100){
        return '"O" '+mensagemPodio100.replace('@',placarO);  

    }else{
        return msg;
    }

}

function resetJogada(){
        //esconde a mensagem
        setTimeout(() => {
            messageContainer.classList.add("hide");
            pessoaO.classList.add("hide");
            pessoaX.classList.add("hide");
            roboO.classList.add("hide");

        }, 3000);
        
        //zera os jogadores
        player1=0;
        player2=0;

        //remove x e o
        let boxesToRemove = document.querySelectorAll(".box div");
        for (let i = 0; i < boxesToRemove.length; i++) {
            boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);            
        }

        //define o x como o 1 primeiro a jogar
        exibeIconeJogador("x");
}

function reset(){
    location.reload(true);
}

//executar a logica do jogador da CPU
function computerPlay(){
    let cloneO = o.cloneNode(true);
    counter =0;
    fliled =0;

    for (let i = 0; i < boxes.length; i++) {
        let randonNumber = Math.floor(Math.random()*5);
        //so preencher se estiver vazio o filtro
        if(boxes[i].childNodes[0] == undefined){
            if(randonNumber <=i ){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
            //checagem de quantas estao preenchidas
        }else{
            fliled++;
        }        
    }

    if(counter == 0 && fliled < 9 ){
        computerPlay();
    }

}

function computerPlay2(){
    let cloneO = o.cloneNode(true);
    counter =0;
    fliled =0;

    for (let i = 0; i < boxes.length; i++) {
        let randonNumber = checkValidateWin();
        //so preencher se estiver vazio o filtro
        if(boxes[randonNumber].childNodes[0] == undefined){
            boxes[randonNumber].appendChild(cloneO);
            counter++;
            break;
            //checagem de quantas estao preenchidas
        }else{
            fliled++;
        }        
    }

    if(counter == 0 && fliled < 9 ){
        computerPlay();
    }

}

function checkValidateWin(){
    let posibility =[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
    let contador=0;
    let position =0;
    //verificar
    //posibility
    for (let i = 0; i < posibility.length; i++) { 
        for (let j = 0; j < posibility[i].length; j++) { 
            position = posibility[i][j]-1;
            if(boxes[position].childNodes[0] != undefined){
                if(boxes[position].childNodes.length>0){
                    let bChild = boxes[position].childNodes[0].className;
                    if(bChild === 'x'){
                        contador++;
                    }else{
                        contador--;
                    }
                }else{
                }       
            }
            else{
            }
        }
        if(contador ==2 && position>0){
            for (let j = 0; j < posibility[i].length; j++) { 
                position = posibility[i][j]-1;
                if(boxes[position].childNodes[0] == undefined){
                    return position;
                }
            }
            position = Math.floor(Math.random()*5);
        }else{
            contador=0;
            position = Math.floor(Math.random()*5);
        }
    }
    return position;
}