/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BlockD extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Block-d", "./BlockD/costumes/Block-d.svg", { x: 31, y: 41 })
    ];

    this.sounds = [new Sound("meow", "./BlockD/sounds/meow.wav")];

    this.triggers = [];
  }
}
