/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BlockO extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Block-o", "./BlockO/costumes/Block-o.svg", { x: 32, y: 40 })
    ];

    this.sounds = [new Sound("meow", "./BlockO/sounds/meow.wav")];

    this.triggers = [];
  }
}
