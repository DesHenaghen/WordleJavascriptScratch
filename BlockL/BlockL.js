/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BlockL extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Block-l", "./BlockL/costumes/Block-l.svg", { x: 26, y: 40 })
    ];

    this.sounds = [new Sound("meow", "./BlockL/sounds/meow.wav")];

    this.triggers = [];
  }
}
