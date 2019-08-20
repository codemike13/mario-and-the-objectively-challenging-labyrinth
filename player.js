// Give the player some a `hitPoints` property set to some number, a minimum attack property, and a maximum attack property. The idea is that we can set a minimum and maximum attack to randomize things within a certain range.

function newMarine() {
  let obj = {
    hitPoints: 100,
    hpDefault: 100,
    weapons: [
      { bolter: 5, reload: 2 },
      { heavyBolter: 8, reload: 3 },
      { squadAttack: 19, reload: 5 },
      { chainSword: 12, reload: 1 }
    ],
    beefed: function(num) {
      this.hitPoints = this.hitPoints * num;
      this.hpDefault = this.hpDefault * num;
      this.minAttack = this.minAttack * num;
      this.maxAttack = this.maxAttack * num;
    },
    regen: function() {
      if (this.hitPoints <= this.hpDefault) {
        let id = setInterval(() => {
          this.hitPoints += 5;
          if (this.hitPoints === this.hpDefault) {
            clearInterval(id);
          }
          console.log("REGEN! " + this.hitPoints);
        }, 5000);
      }
    },
    bolterAttack: function() {
      let i = 0;
      if (i <= 2) {
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
    },

    heavyAttack: function() {
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
    },

    squadAttack: function() {
      let i = 0;
      if (i <= 2) {
        let show = setInterval(() => {
          marineImg.src = "/Space Marine/space marine squad.gif";
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
    },

    swordAttack: function() {
      let i = 0;
      if (i <= 2) {
        let show = setInterval(() => {
          marineImg.src = "/Space Marine/marine chainsword.gif";
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
    },
    reload: () => {}
  };

  return obj;
}
