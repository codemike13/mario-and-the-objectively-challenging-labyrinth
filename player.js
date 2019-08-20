// Give the player some a `hitPoints` property set to some number, a minimum attack property, and a maximum attack property. The idea is that we can set a minimum and maximum attack to randomize things within a certain range.

let spaceMarine = newMarine();

function newMarine() {
  let obj = {
    hitPoints: 100,
    hpDefault: 100,
    weapons: [
      { bolter: 10, reload: 2 },
      { heavyBolter: 15, reload: 3 },
      { plasmaCannon: 25, reload: 5 },
      { chainSword: 5, reload: 1 }
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
    reload: () => {}
  };

  return obj;
}
