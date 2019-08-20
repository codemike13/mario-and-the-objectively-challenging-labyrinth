// Make a function called `newMonster` that takes in a number and returns a new object with:
// * a `hitPoints` property set to a number of your choice
// * a minimum attack based in some way on the number that gets passed in, and
// * a maximum attack that's based on the that as well (but bigger than the minimum attack.)

// The idea here is that we can get back a monster with a certain "level" that's based on what we pass in, and we can set a minimum and maximum attack to randomize things within a certain range.

let chaosMarine = newChaosMarine();

function newChaosMarine() {
  let obj = {
    hitPoints: 100,
    hpDefault: 100,
    weapons:{bolter:5,heavyBolter:10,plasmaCannon:15,chainSword:25},
    beefed: function(num) {
      this.hitPoints = this.hitPoints * num;
      this.hpDefault = this.hpDefault * num;
      this.minAttack = this.minAttack * num;
      this.maxAttack = this.maxAttack * num;
    },
    regen: function() {
      if (this.hitPoints <= this.hpDefault){
        let id = setInterval(() => {
          this.hitPoints += 5;
            if (this.hitPoints === this.hpDefault){clearInterval(id)}
          console.log("Monster REGEN! " + this.hitPoints);
        }, 1000);
    }
    },

  };

  return obj;
}
