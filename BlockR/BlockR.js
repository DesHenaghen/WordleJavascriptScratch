/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BlockR extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Block-r", "./BlockR/costumes/Block-r.svg", { x: 22, y: 33 })
    ];

    this.sounds = [new Sound("meow", "./BlockR/sounds/meow.wav")];

    this.triggers = [];
  }
}
