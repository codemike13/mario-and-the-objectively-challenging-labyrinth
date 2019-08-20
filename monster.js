


function newChaosMarine() {
  let obj = {
    hitPoints: 100,
    hpDefault: 100,
      weapons: [
          { bolter: 5, reload: 2 },
          { heavyBolter: 8, reload: 3 },
          { squadAttack: 12, reload: 5 },
          { plasmaSword: 19, reload: 1 }
      ],
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
