import canIterate from '../js/canIterate';

test('check iterate object return true', () => {
  expect(canIterate([])).toBe(true);
});
test('check iterate object return true', () => {
  expect(canIterate('df')).toBe(true);
});
test('check iterate object return true', () => {
  expect(canIterate(new Map())).toBe(true);
});
test('check iterate object return false', () => {
  expect(canIterate(null)).toBe(false);
});
test('check iterate object return false', () => {
  expect(canIterate(10)).toBe(false);
});
