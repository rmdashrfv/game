class Warrior {
  constructor(name) {
    this.name = name
    this.hp = 100
    this.str = 25
    this.mp = 10
    this.mag_str = 5
    this.def = 10
    this.alive = true
  }

  attack() {
   return `${this.name} did sword strike!`
  }

  defend() {
    console.log(`${this.name} took a defensive stance!`)
  }
}


class Mage {
  constructor(name) {
    this.name = name
    this.hp = 50
    this.str = 5
    this.mp = 100
    this.mag_str = 30
    this.def = 2
    this.alive = true
}

  castSpell() {
    return 'fireball'
  }

}

let warrior = new Warrior('Garrick')
warrior.attack()
