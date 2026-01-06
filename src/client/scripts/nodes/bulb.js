/// passthrough node that represents a bulb in a circuit

import { Node } from "./node.js";

export class Bulb extends Node {
    constructor() {
        super("Bulb", 1, 0);
    }
}