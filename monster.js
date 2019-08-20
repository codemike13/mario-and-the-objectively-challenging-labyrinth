function newChaosMarine() {
  let obj = {
    hitPoints: 100,
    hpDefault: 100,
    weapons: [
      { bolter: 3, ammo: 10, reload: 2 },
      { heavyBolter: 5, ammo: 5, reload: 3 },
      { squadAttack: 10, ammo: 3, reload: 5 },
      { plasmaSword: 8, ammo: 4, reload: 1 }
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
          console.log("Monster REGEN! " + this.hitPoints);
        }, 1000);
      }
    },
    bolterAttack: function() {
      let i = 0;
      if (i <= 2) {
        let show = setInterval(() => {
          chaosImg.src = "/Chaos Marine.gif/Chaos Bolter.gif";
          i++;
          if (i === 2) {
            chaosImg.src = chaosDefault;
            clearInterval(show);
          }
          console.log(i);
        }, 2000);
      }
      chaosMarine.weapons[0].ammo -= 1;
      spaceMarine.hitPoints -= chaosMarine.weapons[0].bolter;
      marineHealth.style.width = `${spaceMarine.hitPoints}%`;
      marineHealth.innerText = spaceMarine.hitPoints;
      console.log("hit");
    },
    heavyAttack: function() {
      let i = 0;
      if (i <= 2) {
        let show = setInterval(() => {
          chaosImg.src = "/Chaos Marine.gif/chaos heavy bolter.gif";
          i++;
          if (i === 2) {
            chaosImg.src = chaosDefault;
            clearInterval(show);
          }
          console.log(i);
        }, 2000);
      }
      chaosMarine.weapons[1].ammo -= 1;

      spaceMarine.hitPoints -= chaosMarine.weapons[1].heavyBolter;
      marineHealth.style.width = `${spaceMarine.hitPoints}%`;
      marineHealth.innerText = spaceMarine.hitPoints;
      console.log("hit");
    },
    squadAttack: function() {
      let i = 0;
      if (i <= 2) {
        let show = setInterval(() => {
          chaosImg.src = "/Chaos Marine.gif/chaos squad.gif";
          i++;
          if (i === 2) {
            chaosImg.src = chaosDefault;
            clearInterval(show);
          }
          console.log(i);
        }, 2000);
        chaosMarine.weapons[0].ammo -= 1;
        chaosMarine.weapons[0].ammo -= 1;
        chaosMarine.weapons[0].ammo -= 1;
      }
      chaosMarine.weapons[0].ammo -= 1;
      spaceMarine.hitPoints -= chaosMarine.weapons[2].squadAttack;
      marineHealth.style.width = `${spaceMarine.hitPoints}%`;
      marineHealth.innerText = spaceMarine.hitPoints;
      console.log("hit");
    },
    plasmaAttack: function() {
      let i = 0;
      if (i <= 2) {
        let show = setInterval(() => {
          chaosImg.src = "/Chaos Marine.gif/chaos plasma sword.gif";
          i++;
          if (i === 2) {
            chaosImg.src = chaosDefault;
            clearInterval(show);
          }
          console.log(i);
        }, 2000);
      }
      chaosMarine.weapons[3].ammo -= 1;
      spaceMarine.hitPoints -= chaosMarine.weapons[3].plasmaSword;
      marineHealth.style.width = `${spaceMarine.hitPoints}%`;
      marineHealth.innerText = spaceMarine.hitPoints;
      console.log("hit");
    }
  };

  return obj;
}

