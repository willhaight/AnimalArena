//Setting variables
let inPlay = false;
let dodgeChance1 = 0;
let dodgeChance2 = 0;
let healthStay = 0;
let playerHealthStay = 0;
let turn = 0;
let turnNum = Math.floor(Math.random() * 2) + 1;
let amplfier = 0;
let compAmplfier = 0;
let defenseAmplfier = 0;
let compDefenseAmplfier = 0;
let movePick = 0;

if(turnNum === 1){
  turn = true;
}
if(turnNum === 2){
   turn = false;
}

let compick = Math.floor(Math.random() * 3) + 1;
let compHealth = 1000;
let playerHealth = 1000;
let play = true;

//Computer Generation
if(compick === 1){
  let health = 400
  compHealth = health
$('#computerPlay').html(`<div id="puterLion"><p>Lion</p>
<p>Health:${compHealth}</p></div>`);
}else if(compick === 2)
{ let health = 500
   compHealth = health
  $('#computerPlay').html(`<div id="puterTurtle"><p>Turtle</p>
<p>Health:${compHealth}</p></div>`);
}else if(compick === 3)
{ let health = 600
   compHealth = health
  $('#computerPlay').html(`<div id="puterGiraffe"><p>Giraffe</p>
<p>Health:${compHealth}</p></div>`)
}

//computer's turn
$('#computerTurn').click(function(){
if(turn === false && compick === 1){
  movePick = movePick - movePick;
  movePick = movePick + Math.floor(Math.random() * 3 ) + 1;
  if (movePick === 1){
  let damage = Math.floor(Math.random() * 150) + 75;
  damage = damage + compAmplfier + defenseAmplfier;
  playerHealth = playerHealth - damage;
  let e = $('#gameField');
  let ee = $(e).children()[0];
  let eee = $(ee).children()[0];
  let eeee = $(eee).children()[0];
  $(eeee).html(`<span>${playerHealth}</span>`);
  if(dodgeChance1 === true){
  playerHealth = playerHealthStay
  let e = $('#gameField');
  let ee = $(e).children()[0];
  let eee = $(ee).children()[0];
  let eeee = $(eee).children()[0];
  $(eeee).html(`<span>${playerHealth}</span>`);
    dodgeChance1 = false
  }
  if(playerHealth <= 0 && compHealth >= 0){
    let e = $('#gameField');
    let ee = $(e).children()[0];
    let eee = $(ee).children()[0];
    let eeee = $(eee).children()[0];
    $(eeee).html(`<span>You Lose</span>`);
  }}

if(movePick === 2){
    let  dodgedamage = Math.floor(Math.random() * 60) + 30;
    playerHealth = playerHealth - dodgedamage
    let e = $('#gameField');
    let ee = $(e).children()[0];
    let eee = $(ee).children()[0];
    let eeee = $(eee).children()[0];
    $(eeee).html(`<span>${playerHealth}</span>`);
    let  dodgeChance = Math.floor(Math.random() * 3) + 1;
    if(dodgeChance === 1 || dodgeChance === 2){
    healthStay = compHealth
    let dodgeGo = true
    dodgeChance2 = dodgeGo}}

if(movePick === 3){

    let healthBoost = Math.floor(Math.random()*30)+20;
    compHealth = compHealth + healthBoost;
    let e = $('#computerPlay')
    let ee = $(e).children()[0];
    let eee = $(ee).children()[1];
    $(ee).html(`<p>Lion</p><p>Health:${compHealth}</p>`);

  let attackIncrease = compAmplfier;
  attackIncrease = attackIncrease +  Math.floor(Math.random() * 50) + 50;
  compAmplfier = attackIncrease;}

turn = true;
}});

$('#computerTurn').click(function(){
if(turn === false && compick === 2){
  movePick = movePick - movePick;
  movePick = movePick + Math.floor(Math.random() * 3 ) + 1;

  if(movePick === 1){
  let damage = Math.floor(Math.random() * 100) + 65;
  damage = damage + defenseAmplfier + compAmplfier;
  playerHealth = playerHealth - damage;
  let e = $('#gameField');
  let ee = $(e).children()[0];
  let eee = $(ee).children()[0];
  let eeee = $(eee).children()[0];
  $(eeee).html(`<span>${playerHealth}</span>`);
  if(dodgeChance1 === true){
  playerHealth = playerHealthStay
  console.log(playerHealth)
  let e = $('#gameField');
  let ee = $(e).children()[0];
  let eee = $(ee).children()[0];
  let eeee = $(eee).children()[0];
  $(eeee).html(`<span>${playerHealth}</span>`);
    dodgeChance1 = false
  }
  if(playerHealth <= 0 && compHealth >= 0){
    let e = $('#gameField');
    let ee = $(e).children()[0];
    let eee = $(ee).children()[0];
    let eeee = $(eee).children()[0];
    $(eeee).html(`<span>You Lose</span>`);
  }}

  if(movePick === 2){
    let heal = Math.floor(Math.random() * 5) + 5;
    compHealth = compHealth + heal
    let e = $('#computerPlay')
    let ee = $(e).children()[0];
    let eee = $(ee).children()[1];
    $(ee).html(`<p>Turtle</p><p>Health:${compHealth}</p>`);

    let defense = compDefenseAmplfier
  defense = defense +  Math.floor(Math.random() * -1) - 5;
  compDefenseAmplfier = defense;}

  if(movePick === 3){
    let damage = Math.floor(Math.random() * 125) + 175;
    playerHealth = playerHealth - damage - defenseAmplfier;
    let e = $('#gameField');
    let ee = $(e).children()[0];
    let eee = $(ee).children()[0];
    let eeee = $(eee).children()[0];
    $(eeee).html(`<span>${playerHealth}</span>`);

    let defense = compDefenseAmplfier - compDefenseAmplfier;
  defense = defense +  Math.floor(Math.random() * 50) + 150;
  compDefenseAmplfier = defense;
  if(playerHealth <= 0 && compHealth >= 0){
  $(eeee).html(`You Lose</p></div>`);
  }}

  turn = true;
}});

//giraffe

$('#computerTurn').click(function(){
  if (turn === false && compick === 3){
  movePick = movePick - movePick;
  movePick = movePick + Math.floor(Math.random() * 3) + 1;
  console.log(movePick);
  if(movePick === 1){
  let damage = Math.floor(Math.random() * 25) + 50;
  damage = damage + defenseAmplfier;
  playerHealth = playerHealth - damage;
  let e = $('#gameField');
  let ee = $(e).children()[0];
  let eee = $(ee).children()[0];
  let eeee = $(eee).children()[0];
  $(eeee).html(`<span>${playerHealth}</span>`);

  if(dodgeChance1 === true){
  playerHealth = playerHealthStay;
  $(eeee).html(`<span>${playerHealth}</span>`);
    dodgeChance1 = false
  }

  if(playerHealth <= 0 && compHealth >= 0){
    let e = $('#gameField');
    let ee = $(e).children()[0];
    let eee = $(ee).children()[0];
    let eeee = $(eee).children()[0];
    $(eeee).html(`<span>You Lose</span>`);
  }}

  if(movePick === 2){
    let damage = Math.floor(Math.random() * 125) + 75;
    playerHealth = playerHealth - damage - defenseAmplfier;
    let selfHarm = damage/2
    console.log(selfHarm);
    compHealth = compHealth - selfHarm
    console.log(compHealth);
    damage = damage + compAmplfier

    let e = $('#gameField');
    let ee = $(e).children()[0];
    let eee = $(ee).children()[0];
    let eeee = $(eee).children()[0];
    $(eeee).html(`<span>${playerHealth}</span>`);
    if(playerHealth <= 0 && compHealth >= 0){
    $(eeee).html(`You Lose</p></div>`);}

    let a = $('#computerPlay')
    let aa = $(a).children()[0];
    let aaa = $(aa).children()[1];
    $(aaa).html(`<span>Health:${compHealth}</span>`);

    if(compHealth <= 0){
      $(aaa).html(`<span>You Win!</span>`);

    }
    if (playerHealth <= 0 && compHealth <= 0){
      $(aaa).html(`<span>You both Lose</span>`);
      $(eeee).html(`You both Lose</p>`)
    }

    if(dodgeChance1 === true){
      playerHealth = playerHealthStay;
      $(eeee).html(`<span>${playerHealth}</span>`);
      dodgeChance1 = false;

    }}

    if(movePick === 3){
      let heal = Math.floor(Math.random() * 150) + 25;

      compHealth = compHealth + heal
      let a = $('#computerPlay')
      let aa = $(a).children()[0];
      let aaa = $(aa).children()[1];
      $(aaa).html(`<span>Health:${compHealth}</span>`);

      if(dodgeChance1 === true){
        playerHealth = healthStay
        dodgeChance1 = false;
      }}

  turn = true;
}});

//Player picking class
$('#lion').click(function(){
  if(inPlay === false){
    let health = 400;
    playerHealth = health;
$('#gameField').append('<div id=lionMob><p>Lion Health:'
+`<span>${playerHealth}</span>`
  +'</p>'
+'<input type="button" id="lionAttack" value="Attack">'
+'<input type="button" value="dodge" id="lionDodge">'
+'<input type="button" value="bask" id="bask">'
+'</div>');
inPlay = true }});

$('#giraffe').click(function(){
  if(inPlay === false){
    let health = 600;
    playerHealth = health;
$('#gameField').append('<div id=lionMob><p>Giraffe Health:'
+`<span>${playerHealth}</span>`
  +'</p>'
+'<input type="button" id="giraffeAttack" value="Attack">'
+'<input type="button" value="Flail" id="flail">'
+'<input type="button" value="Munch" id="munch">'
+'</div>');
inPlay = true }});

$('#turtle').click(function(){
  if(inPlay === false){
    let health = 500;
    playerHealth = health;
$('#gameField').append('<div id=lionMob><p>Turtle Health:'
+`<span>${playerHealth}</span>`+ '</p>'
+'<input type="button" id="turtleAttack" value="Attack">'
+'<input type="button" value="Shell Retreat" id="turtleShell">'
+'<input type="button" value="Snap" id="snap">'
+'</div>');
let e = $(this)
let ee = $(e).parents()[1];
let eee = $(ee).children()[0];
let eeee = $(eee).children()[0];
let eeeee = $(eeee).children()[1];
$(eeeee).html(`Health:${compHealth}</p></div>`);
inPlay = true }

//Lion Class Abilities
});
$('#gameField').on('click', '#lionAttack', function(){
  if(turn === true){

  let damage = Math.floor(Math.random() * 150) + 75;
  damage = damage + amplfier + compDefenseAmplfier;
  compHealth = compHealth - damage;
  let e = $(this);
  let ee = $(e).parents()[2];
  let eee = $(ee).children()[1];
  let eeee = $(eee).children()[0];
  let eeeee = $(eeee).children()[1];
  $(eeeee).html(`Health:${compHealth}</p></div>`);
  if(compHealth <= 0 && playerHealth >= 0){
  $(eeeee).html(`You Win!</p></div>`);}

  if(dodgeChance2 === true){
    compHealth = healthStay
    $(eeeee).html(`Health:${compHealth}</p></div>`);
    dodgeChance2 = false;}

  turn = false}});

$('#gameField').on('click', '#lionDodge', function(){
  if(turn === true){
  let  dodgedamage = Math.floor(Math.random() * 60) + 30;
  dodgedamage = dodgedamage + compDefenseAmplfier;
  compHealth = compHealth - dodgedamage;
  let  dodgeChance = Math.floor(Math.random() * 3) + 1;
  if(dodgeChance === 1 || dodgeChance === 2){
  playerHealthStay = playerHealth
  console.log(playerHealthStay);
  let dodgeGo = true
  dodgeChance1 = dodgeGo}
  let e = $(this)
  let ee = $(e).parents()[2];
  let eee = $(ee).children()[1];
  let eeee = $(eee).children()[0];
  let eeeee = $(eeee).children()[1];
  $(eeeee).html(`Health:${compHealth}</p></div>`);
  if(compHealth <= 0 && playerHealth >= 0){
  $(eeeee).html(`You Win!</p></div>`);
  }
  turn = false}});

$('#gameField').on('click', '#bask', function(){
  if(turn === true){
    let attackIncrease = amplfier;
  attackIncrease = attackIncrease +  Math.floor(Math.random() * 50) + 50;
  amplfier = attackIncrease;
  let healthBoost = Math.floor(Math.random()*30)+20;
  playerHealth = playerHealth + healthBoost
  let e = $('#gameField');
  let ee = $(e).children()[0];
  let eee = $(ee).children()[0];
  let eeee = $(eee).children()[0];
  $(eeee).html(`<span>${playerHealth}</span>`);

  if(dodgeChance2 === true){
    compHealth = healthStay
    dodgeChance2 = false;}
  turn = false;}});
//End of Lion abilities

//Giraffe Class Ablities
$('#gameField').on('click', '#giraffeAttack', function(){
  if(turn === true){
  let damage = Math.floor(Math.random() * 25) + 50;
  damage = damage + amplfier + compDefenseAmplfier;
  compHealth = compHealth - damage
  let e = $(this)
  let ee = $(e).parents()[2];
  let eee = $(ee).children()[1];
  let eeee = $(eee).children()[0];
  let eeeee = $(eeee).children()[1];
  $(eeeee).html(`Health:${compHealth}</p></div>`);
  if(compHealth <= 0 && playerHealth >= 0){
  $(eeeee).html(`You Win!</p></div>`);

  if(dodgeChance2 === true){
    compHealth = healthStay
    $(eeeee).html(`Health:${compHealth}</p></div>`);
    dodgeChance2 = false;}}
  turn = false}});

$('#gameField').on('click', '#flail', function(){
  if(turn === true){
  let damage = Math.floor(Math.random() * 125) + 75;
  compHealth = compHealth - damage - compDefenseAmplfier;
  let selfHarm = damage/2
  playerHealth = playerHealth - selfHarm
  damage = damage + amplfier

  let e = $(this)
  let ee = $(e).parents()[2];
  let eee = $(ee).children()[1];
  let eeee = $(eee).children()[0];
  let eeeee = $(eeee).children()[1];
  $(eeeee).html(`Health:${compHealth}</p></div>`);
  if(compHealth <= 0 && playerHealth >= 0){
  $(eeeee).html(`You Win!</p></div>`);}

  let a = $('#gameField');
  let aa = $(a).children()[0];
  let aaa = $(aa).children()[0];
  let aaaa = $(aaa).children()[0];
  $(aaaa).html(`<span>${playerHealth}</span>`);

  if(playerHealth <= 0){
    $(aaaa).html(`<span>You Lose</span>`);

  }
  if (playerHealth <= 0 && compHealth <= 0){
    $(aaaa).html(`<span>You both Lose</span>`);
    $(eeeee).html(`You both Lose</p>`)
  }

  if(dodgeChance2 === true){
    compHealth = healthStay
    $(eeeee).html(`Health:${compHealth}</p></div>`);
    dodgeChance2 = false;
  }

  turn = false}});

$('#gameField').on('click', '#munch', function(){
  if(turn === true){
  let heal = Math.floor(Math.random() * 150) + 25;
  playerHealth = playerHealth + heal
  let a = $('#gameField');
  let aa = $(a).children()[0];
  let aaa = $(aa).children()[0];
  let aaaa = $(aaa).children()[0];
  $(aaaa).html(`<span>${playerHealth}</span>`);

  if(dodgeChance2 === true){
    compHealth = healthStay
    dodgeChance2 = false;
  }}
  turn = false});

  //end of Giraffe Abilities
  //Start of Turtle abilities

  $('#gameField').on('click', '#turtleAttack', function(){
    if(turn === true){
    let damage = Math.floor(Math.random() * 100) + 65;
    damage = damage + amplfier + compDefenseAmplfier;
    compHealth = compHealth - damage
    let e = $(this)
    let ee = $(e).parents()[2];
    let eee = $(ee).children()[1];
    let eeee = $(eee).children()[0];
    let eeeee = $(eeee).children()[1];
    $(eeeee).html(`Health:${compHealth}</p></div>`);
    if(compHealth <= 0 && playerHealth >= 0){
    $(eeeee).html(`You Win!</p></div>`);}
    if(dodgeChance2 === true){
      compHealth = healthStay
      $(eeeee).html(`Health:${compHealth}</p></div>`);
      dodgeChance2 = false;
    }
    turn = false}});

  $('#gameField').on('click', '#turtleShell', function(){
    if(turn === true){
    let heal = Math.floor(Math.random() * 15) + 25;
    playerHealth = playerHealth + heal
    let a = $('#gameField');
    let aa = $(a).children()[0];
    let aaa = $(aa).children()[0];
    let aaaa = $(aaa).children()[0];
    $(aaaa).html(`<span>${playerHealth}</span>`);

    let defense = defenseAmplfier;
  defense = defense +  Math.floor(Math.random() * -5) - 5;
  defenseAmplfier = defense;
  if(dodgeChance2 === true){
    compHealth = healthStay
    $(eeeee).html(`Health:${compHealth}</p></div>`);
    dodgeChance2 = false;
  }
    turn = false}});

  $('#gameField').on('click', '#snap', function(){
    if(turn === true){
    let damage = Math.floor(Math.random() * 175) + 125;
    compHealth = compHealth - damage - compDefenseAmplfier;
    let e = $(this)
    let ee = $(e).parents()[2];
    let eee = $(ee).children()[1];
    let eeee = $(eee).children()[0];
    let eeeee = $(eeee).children()[1];
    $(eeeee).html(`Health:${compHealth}</p></div>`);

    let defense = defenseAmplfier - defenseAmplfier;
  defense = defense +  Math.floor(Math.random() * 50) + 150;
  defenseAmplfier = defense;
  if(compHealth <= 0 && playerHealth >= 0){
  $(eeeee).html(`You Win!</p></div>`);
  }
  if(dodgeChance2 === true){
    compHealth = healthStay
    $(eeeee).html(`Health:${compHealth}</p></div>`);
    dodgeChance2 = false;
  }
    turn = false}});
