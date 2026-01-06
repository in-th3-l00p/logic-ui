import { Node } from '../nodes/node.js';
import { Constant } from '../nodes/constant.js';
import { Bulb } from '../nodes/bulb.js';

describe('Node', () => {
  test('creates a node with defaults', () => {
    const node = new Node();
    expect(node.name).toBe('Node');
    expect(node.input_slots).toBe(1);
    expect(node.output_slots).toBe(1);
  });

  test('creates a node with custom params', () => {
    const node = new Node('AND', 2, 1);
    expect(node.name).toBe('AND');
    expect(node.input_slots).toBe(2);
    expect(node.output_slots).toBe(1);
  });
});

describe('Constant', () => {
  test('creates a constant node with value', () => {
    const constant = new Constant(true);
    expect(constant.name).toBe('Constant');
    expect(constant.value).toBe(true);
    expect(constant.input_slots).toBe(0);
    expect(constant.output_slots).toBe(1);
  });
});

describe('Bulb', () => {
  test('creates a bulb node', () => {
    const bulb = new Bulb();
    expect(bulb.name).toBe('Bulb');
    expect(bulb.input_slots).toBe(1);
    expect(bulb.output_slots).toBe(0);
  });
});
