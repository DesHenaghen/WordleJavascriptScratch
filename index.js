import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import CassyDance from "./CassyDance/CassyDance.js";
import Champ99 from "./Champ99/Champ99.js";
import BlockW from "./BlockW/BlockW.js";
import BlockO from "./BlockO/BlockO.js";
import BlockR from "./BlockR/BlockR.js";
import BlockD from "./BlockD/BlockD.js";
import BlockL from "./BlockL/BlockL.js";
import BlockE from "./BlockE/BlockE.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: -165,
    y: -66,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  CassyDance: new CassyDance({
    x: 161,
    y: -37,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: true
  }),
  Champ99: new Champ99({
    x: 11,
    y: -44,
    direction: 90,
    costumeNumber: 5,
    size: 100,
    visible: true
  }),
  BlockW: new BlockW({
    x: -170,
    y: 131,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  BlockO: new BlockO({
    x: -81,
    y: 134,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  BlockR: new BlockR({
    x: -11,
    y: 142,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  BlockD: new BlockD({
    x: 71,
    y: 134,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  BlockL: new BlockL({
    x: 138,
    y: 139,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  BlockE: new BlockE({
    x: 201,
    y: 136,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
