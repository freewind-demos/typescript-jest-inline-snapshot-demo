# TypeScript Jest Inline Snapshot Demo

这个项目演示了如何在 TypeScript 项目中使用 Jest 的 inline snapshot 功能进行测试。

## 项目设置

本项目使用以下技术栈：
- TypeScript 5.3.3
- Jest 24.5.0
- ts-jest 24.0.0
- prettier (用于格式化 inline snapshots)

## 安装依赖

```bash
# 使用 npm
npm install

# 或使用 pnpm
pnpm install
```

## 运行测试

```bash
# 使用 npm
npm test

# 或使用 pnpm
pnpm test
```

## 更新 Snapshots

如果你修改了代码并需要更新 snapshots，可以运行：

```bash
# 使用 npm
npm test -- -u

# 或使用 pnpm
pnpm test -- --updateSnapshot
```

## Inline Snapshot 示例

本项目包含多种 inline snapshot 测试示例：

1. **基本类型测试**：
   ```typescript
   test("1+2 === 3", () => {
     expect(1 + 2).toMatchInlineSnapshot(`3`);
   });
   ```

2. **字符串测试**：
   ```typescript
   test("a+b === ab", () => {
     expect("a" + "b").toMatchInlineSnapshot(`"ab"`);
   });
   ```

3. **数组测试**：
   ```typescript
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
   ```

4. **函数测试**：
   ```typescript
   test("function", () => {
     expect(hello).toMatchInlineSnapshot(`[Function]`);
   });
   ```

## 工作原理

Inline snapshots 通过 Jest 和 Prettier 协同工作：

1. 首次运行测试时，Jest 会自动填充 `toMatchInlineSnapshot()` 中的内容
2. 后续运行时，Jest 会将当前输出与保存的 snapshot 进行比较
3. 如果不匹配，测试将失败，提示你更新 snapshot 或修复代码

## 注意事项

- 确保安装了 prettier 依赖，否则 inline snapshots 将无法工作
- 使用 `-u` 或 `--updateSnapshot` 参数可以更新所有 snapshots
- 使用 `-t` 参数可以只运行特定的测试

```
npm install
npm test
```
