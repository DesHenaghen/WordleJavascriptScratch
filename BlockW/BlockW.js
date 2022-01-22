/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BlockW extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Block-w", "./BlockW/costumes/Block-w.svg", { x: 47, y: 39 })
    ];

    this.sounds = [new Sound("meow", "./BlockW/sounds/meow.wav")];

    this.triggers = [];
  }
}
