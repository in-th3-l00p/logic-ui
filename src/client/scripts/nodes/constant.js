import { Node } from "./node.js";

export class Constant extends Node {
    constructor(value) {
        super("Constant", 0, 1);
        this.value = value;
    }
}