import { createTestCircuit } from "./graph.js";
import { renderCircuit } from "./rendering.js";

const canvas = document.getElementById("test-canvas");
const circuit = createTestCircuit();
renderCircuit(circuit, canvas);