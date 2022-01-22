/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 48,
        y: 50
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 46,
        y: 53
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.arbitrarydate = 1624057200000;
    this.stage.vars.todaysepochdate =
      Math.floor(
        ((new Date().getTime() - new Date(2000, 0, 1)) / 1000 / 60 +
          new Date().getTimezoneOffset()) /
          60 /
          24
      ) *
        86400000 +
      946684800000;
    this.stage.vars.indexhash = Math.round(
      (this.stage.vars.todaysepochdate - this.stage.vars.arbitrarydate) /
        86400000
    );
    this.stage.vars.index =
      this.stage.vars.indexhash % this.stage.vars.wordlewords.length;
    this.say(this.stage.vars.wordlewords[this.stage.vars.index + 1 - 1]);
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.costumeNumber += 1;
      yield* this.wait(0.3);
      yield;
    }
  }
}
