---
title: 行事件
---

### rowPinnedChanged

```typescript
(row?: string, pinned?: RowPinned) => void;
```

行的固定状态被修改后触发。

| 参数   | 类型        | 描述             |
| ------ | ----------- | ---------------- |
| row    | `string`    | 当前行           |
| pinned | `RowPinned` | 当前行的固定状态 |

### rowBaseHeightChanged

```typescript
(height?: number) => void;
```

行的基础高度被修改后触发。

| 参数   | 类型     | 描述         |
| ------ | -------- | ------------ |
| height | `number` | 修改后的高度 |

### selectedRowsChanged

```typescript
(rows?: string[]) => void;
```

行被选择的时候触发。

| 参数 | 类型       | 描述             |
| ---- | ---------- | ---------------- |
| rows | `string[]` | 所有被选择的行。 |

### rowAdded

```typescript
(row?: string) => void;
```

行被添加时触发。

| 参数 | 类型     | 描述              |
| ---- | -------- | ----------------- |
| row  | `string` | 被添加的行 `ID`。 |

### rowRemoved

```typescript
(row?: string) => void);
```

行被删除时触发。

| 参数 | 类型     | 描述              |
| ---- | -------- | ----------------- |
| row  | `string` | 被删除的行 `ID`。 |

