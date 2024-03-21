
function Computerchoice(){
    let choices = [`Rock`, `Paper`, `Scissors`];
    num = Math.floor(Math.random() * choices.length);
    if (num == 1){
        return `Rock`;
    }
    else if (num == 2){
        return `Paper`
    }
    else {
        return `Scissors`
    }
}

function Playerinput(select){
    player = select.charAt(0).toUpperCase() + select.slice(1).toLowerCase();
    return player;
}

let playerselect = prompt("Choose an action: ");
playerselect = Playerinput(playerselect);
let computerselect = Computerchoice();

function choose(player, computer){
    if (player == 'Rock'){
        if (computer == 'Rock'){    
            return `It's a tie!`
        }
        else if (computer == 'Paper'){
            return 'You lose! Paper beats Rock!'
        }
        else{
            return 'You win! Rock beats Scissors!'
        }
    }
    if (player == 'Paper'){
        if (computer == 'Paper'){    
            return `It's a tie!`
        }
        else if (computer == 'Rock'){
            return 'You win! Paper beats Rock!'
        }
        else{
            return 'You lose! Scissors beats Paper!'
        }
    }
    else {
        if (computer == 'Scissors'){    
            return `It's a tie!`
        }
        else if (computer == 'Rock'){
            return 'You lose! Rock beats Scissors!'
        }
        else{
            return 'You win! Scissors beats Paper!'
        }
    }
}


console.log(choose(playerselect, computerselect))



