import { createTestCircuit } from "./graph.js";
import { renderCircuit } from "./canvas/rendering.js";

const canvas = document.getElementById("test-canvas");
const circuit = createTestCircuit();
renderCircuit(circuit, canvas);