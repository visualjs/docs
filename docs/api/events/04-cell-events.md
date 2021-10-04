---
title: 单元格事件
---

### selectedCellsChanged

```typescript
(current?: CellRange, selections?: CellRange[]) => void;
```

单元格被选择时触发。

| 参数       | 类型          | 描述                 |
| ---------- | ------------- | -------------------- |
| current    | `CellRange`   | 当前激活的选择的范围 |
| selections | `CellRange[]` | 网格所有的选择范围   |

### editingCellChanged

```typescript
(cell?: CellPosition, previous?: CellPosition) => void;
```

被编辑的单元格切换时触发。

| 参数     | 类型           | 描述               |
| -------- | -------------- | ------------------ |
| cell     | `CellPosition` | 当前被编辑的单元格 |
| previous | `CellPosition` | 之前被编辑的单元格 |

### fillingRangeChanged

```typescript
(range?: FillRange, previous?: FillRange) => void;
```

自动填充范围发生修改时触发。

| 参数     | 类型        | 描述           |
| -------- | ----------- | -------------- |
| range    | `FillRange` | 当前的填充范围 |
| previous | `FillRange` | 之前的填充范围 |

### cellValueChanged

```typescript
(cell?: CellPosition, value?: any) => void;
```

单元格数据被修改时触发。

| 参数  | 类型           | 描述             |
| ----- | -------------- | ---------------- |
| cell  | `CellPosition` | 当前修改的单元格 |
| value | `any`          | 被修改的值       |

