/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BlockE extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Block-e", "./BlockE/costumes/Block-e.svg", { x: 25, y: 39 })
    ];

    this.sounds = [new Sound("meow", "./BlockE/sounds/meow.wav")];

    this.triggers = [];
  }
}
