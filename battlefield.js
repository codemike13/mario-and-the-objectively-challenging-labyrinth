//////////// Add player and enemy to field ////////////
let chaosMarine = newChaosMarine();
let spaceMarine = newMarine();

///////////////////////////////////////////////////////
////////// Space Marine DOM objects////////////////////
//////////////// WEAPONS //////////////////////////////
const marineBolter = document.querySelector(".weapon1");
const marineHeavy = document.querySelector(".weapon2");
const marineSquad = document.querySelector(".weapon3");
const chainSword = document.querySelector(".weapon4");
const marineImg = document.querySelector("#marine");
const marineDefault = "/Space Marine/marine.jpg";
/////////////// VITALS and MEGA ///////////////////////
const marineHealth = document.querySelector(".hp");
const marineMega = document.querySelector("sup");

///////////////////////////////////////////////////////
///////// Chaos Marine DOM objects ////////////////////
//////////////// WEAPONS //////////////////////////////
const chaosBolter = document.querySelector(".weapon1-1");
const chaosHeavy = document.querySelector(".weapon1-2");
const chaosSquad = document.querySelector(".weapon1-3");
const plasmaSword = document.querySelector(".weapon1-4");
const chaosImg = document.querySelector("#chaos");
const chaosDefault = "/Chaos Marine.gif/chaos.jpg";
/////////////// VITALS and MEGA ///////////////////////
const chaosHealth = document.querySelector(".hp1");
const chaosMega = document.querySelector("sup1");

///////////////////////////////////////////////////////
////////// DOM Battlefield objects & Listeners/////////

marineBolter.addEventListener("click", spaceMarine.bolterAttack);

marineHeavy.addEventListener("click", spaceMarine.heavyAttack);

marineSquad.addEventListener("click", spaceMarine.squadAttack);

chainSword.addEventListener("click", spaceMarine.swordAttack);

chaosBolter.addEventListener("click", chaosMarine.bolterAttack);
chaosHeavy.addEventListener("click", chaosMarine.heavyAttack);
chaosSquad.addEventListener("click", chaosMarine.squadAttack);
plasmaSword.addEventListener("click", chaosMarine.plasmaAttack);



function fightChaos() {
    const attackTimer = document.querySelector("#attkTimer")
let i=1;
if(i <= 6){
    let timer = setInterval(()=>{
        attackTimer.style.height=`${i*20}%`
        i++
        if(i===6){
            i=0;
            clearInterval(timer)
            attkRndm();
            fightChaos();
        }
    },1500)
}
    // fightChaos();
}

function getNum() {
    return Math.round(Math.random() * 5)
}
function attkRndm(){
    switch (getNum()) {
        case 1: chaosMarine.bolterAttack(); break;
        case 2: chaosMarine.heavyAttack(); break;
        case 3: chaosMarine.squadAttack(); break;
        case 4: chaosMarine.plasmaAttack(); break;
        case 5: chaosMarine.regen(); break;
    }
}
fightChaos()



