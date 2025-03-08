import { hello } from "./hello";

test("1+2 === 3", () => {
  expect(1 + 2).toMatchInlineSnapshot(`3`);
});

test("a+b === ab", () => {
  expect("a" + "b").toMatchInlineSnapshot(`"ab"`);
});

test("array", () => {
  const array1 = [1, 2];
  const array2 = [3, 4];
  expect([...array1, ...array2]).toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
      4,
    ]
  `);
});

test("function", () => {
  expect(hello).toMatchInlineSnapshot(`[Function]`);
});
