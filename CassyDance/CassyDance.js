/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CassyDance extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cassy-a", "./CassyDance/costumes/cassy-a.png", {
        x: 104,
        y: 192
      }),
      new Costume("cassy-b", "./CassyDance/costumes/cassy-b.png", {
        x: 140,
        y: 192
      }),
      new Costume("cassy-c", "./CassyDance/costumes/cassy-c.png", {
        x: 74,
        y: 188
      }),
      new Costume("cassy-d", "./CassyDance/costumes/cassy-d.png", {
        x: 94,
        y: 180
      })
    ];

    this.sounds = [
      new Sound("dance around", "./CassyDance/sounds/dance around.wav")
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
