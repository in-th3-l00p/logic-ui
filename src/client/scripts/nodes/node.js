/// node parent class

export class Node {
    constructor(name = "Node", input_slots = 1, output_slots = 1) {
        this.name = name;
        this.input_slots = input_slots;
        this.output_slots = output_slots;
    }
}