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
const marineDefault = "/Space Marine/marine.jpg"
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
const chaosImg = document.querySelector("#chaos")
const chaosDefault = "/Chaos Marine.gif/chaos.jpg"
/////////////// VITALS and MEGA ///////////////////////
const chaosHealth = document.querySelector(".hp1");
const chaosMega = document.querySelector("sup1");

///////////////////////////////////////////////////////
////////// DOM Battlefield objects ///////////////////

marineBolter.addEventListener("click", () => {
  let i = 0;
  if (i<=2) {
    let show = setInterval(() => {
      marineImg.src = "Space Marine/purging intensifies.gif";
      i++;
        if (i === 2) {
            marineImg.src = marineDefault;
            clearInterval(show);
        }
      console.log(i);
    }, 2000);
  }
  chaosMarine.hitPoints -= spaceMarine.weapons[0].bolter;
  chaosHealth.style.width = `${chaosMarine.hitPoints}%`;
  chaosHealth.innerText = chaosMarine.hitPoints;
  console.log("hit");
  console.log(chaosMarine.hitPoints);
});

marineHeavy.addEventListener("click", () => {
    let i = 0;
    if (i <= 2) {
        let show = setInterval(() => {
            marineImg.src = "/Space Marine/heavyBolter.gif";
            i++;
            if (i === 2) {
                marineImg.src = marineDefault;
                clearInterval(show);
            }
            console.log(i);
        }, 2000);
    }
    chaosMarine.hitPoints -= spaceMarine.weapons[1].heavyBolter;
    chaosHealth.style.width = `${chaosMarine.hitPoints}%`;
    chaosHealth.innerText = chaosMarine.hitPoints;
    console.log("hit");
});

marineSquad.addEventListener("click", () => {
    let i = 0;
    if (i <= 2) {
        let show = setInterval(() => {
           marineImg.src= "/Space Marine/space marine squad.gif"
            i++;
            if (i === 2) {
                marineImg.src = marineDefault;
                clearInterval(show);
            }
            console.log(i);
        }, 2000);
    }
    chaosMarine.hitPoints -= spaceMarine.weapons[2].squadAttack;
    chaosHealth.style.width = `${chaosMarine.hitPoints}%`;
    chaosHealth.innerText = chaosMarine.hitPoints;
    console.log("hit");
});

chainSword.addEventListener("click", () => {
    let i = 0;
    if (i <= 2) {
        let show = setInterval(() => {
            marineImg.src = "/Space Marine/marine chainsword.gif"
            i++;
            if (i === 2) {
                marineImg.src = marineDefault;
                clearInterval(show);
            }
            console.log(i);
        }, 2000);
    }
    chaosMarine.hitPoints -= spaceMarine.weapons[3].chainSword;
    chaosHealth.style.width = `${chaosMarine.hitPoints}%`;
    chaosHealth.innerText = chaosMarine.hitPoints;
    console.log("hit");
});

chaosBolter.addEventListener("click", () => {
    let i = 0;
    if (i <= 2) {
        let show = setInterval(() => {
            chaosImg.src = "/Chaos Marine.gif/Chaos Bolter.gif"
            i++;
            if (i === 2) {
                chaosImg.src = chaosDefault ;
                clearInterval(show);
            }
            console.log(i);
        }, 2000);
    }
    spaceMarine.hitPoints -= chaosMarine.weapons[0].bolter;
    marineHealth.style.width = `${spaceMarine.hitPoints}%`;
    marineHealth.innerText = spaceMarine.hitPoints;
    console.log("hit");
});
chaosHeavy.addEventListener("click", () => {
    let i = 0;
    if (i <= 2) {
        let show = setInterval(() => {
            chaosImg.src = "/Chaos Marine.gif/chaos heavy bolter.gif"
            i++;
            if (i === 2) {
                chaosImg.src = chaosDefault ;
                clearInterval(show);
            }
            console.log(i);
        }, 2000);
    }
    spaceMarine.hitPoints -= chaosMarine.weapons[1].heavyBolter;
    marineHealth.style.width = `${spaceMarine.hitPoints}%`;
    marineHealth.innerText = spaceMarine.hitPoints;
    console.log("hit");
});
chaosSquad.addEventListener("click", () => {
    let i = 0;
    if (i <= 2) {
        let show = setInterval(() => {
            chaosImg.src = "/Chaos Marine.gif/chaos squad.gif"
            i++;
            if (i === 2) {
                chaosImg.src = chaosDefault ;
                clearInterval(show);
            }
            console.log(i);
        }, 2000);
    }
    spaceMarine.hitPoints -= chaosMarine.weapons[2].squadAttack;
    marineHealth.style.width = `${spaceMarine.hitPoints}%`;
    marineHealth.innerText = spaceMarine.hitPoints;
    console.log("hit");
});

plasmaSword.addEventListener("click", () => {
    let i = 0;
    if (i <= 2) {
        let show = setInterval(() => {
            chaosImg.src = "/Chaos Marine.gif/chaos plasma sword.gif"
            i++;
            if (i === 2) {
                chaosImg.src = chaosDefault ;
                clearInterval(show);
            }
            console.log(i);
        }, 2000);
    }
    spaceMarine.hitPoints -= chaosMarine.weapons[3].plasmaSword;
    marineHealth.style.width = `${spaceMarine.hitPoints}%`;
    marineHealth.innerText = spaceMarine.hitPoints;
    console.log("hit");
});