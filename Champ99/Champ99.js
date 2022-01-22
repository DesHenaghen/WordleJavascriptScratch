/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Champ99 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("champ99-a", "./Champ99/costumes/champ99-a.png", {
        x: 248,
        y: 306
      }),
      new Costume("champ99-b", "./Champ99/costumes/champ99-b.png", {
        x: 164,
        y: 290
      }),
      new Costume("champ99-c", "./Champ99/costumes/champ99-c.png", {
        x: 152,
        y: 270
      }),
      new Costume("champ99-d", "./Champ99/costumes/champ99-d.png", {
        x: 188,
        y: 260
      }),
      new Costume("champ99-e", "./Champ99/costumes/champ99-e.png", {
        x: 190,
        y: 248
      }),
      new Costume("champ99-f", "./Champ99/costumes/champ99-f.png", {
        x: 114,
        y: 250
      }),
      new Costume("champ99-g", "./Champ99/costumes/champ99-g.png", {
        x: 132,
        y: 258
      })
    ];

    this.sounds = [
      new Sound("dance celebrate", "./Champ99/sounds/dance celebrate.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.costumeNumber += 1;
      yield* this.wait(0.3);
      yield;
    }
  }
}
