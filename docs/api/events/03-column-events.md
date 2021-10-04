---
title: 列事件
---

### columnsChanged

```typescript
() => void;
```

网格列被重置时触发，修改列选项时不会被触发。

### columnHeightChanged

```typescript
(height?: number) => void;
```

列的高度被修改时触发。

| 参数   | 类型     | 描述 |
| ------ | -------- | ---- |
| height | `number` | 高度 |

### columnPinnedChanged

```typescript
(column?: string, pinned?: ColumnPinned) => void;
```

列的固定状态被修改时触发。

| 参数   | 类型           | 描述                   |
| ------ | -------------- | ---------------------- |
| column | `string`       | 当前被修改的列 `field` |
| pinned | `ColumnPinned` | 修改后的固定状态       |

### columnVisibleChanged

```typescript
(column?: string, visible?: boolean) => void;
```

列的显示状态被修改时触发。

| 参数    | 类型      | 描述                   |
| ------- | --------- | ---------------------- |
| column  | `string`  | 当前被修改的列 `field` |
| visible | `boolean` | 修改后的列显示状态     |

### columnWidthChanged

```typescript
(column?: string, width?: number) => void;
```

列的宽度被修改时触发。

| 参数    | 类型     | 描述                   |
| ------- | -------- | ---------------------- |
| column  | `string` | 当前被修改的列 `field` |
| visible | `number` | 修改后的列宽度         |

### columnNameChanged

```typescript
(column?: string, name?: string) => void;
```

列的名字被修改时触发。

| 参数   | 类型     | 描述                   |
| ------ | -------- | ---------------------- |
| column | `string` | 当前被修改的列 `field` |
| name   | `string` | 修改后的列名称         |

### groupCollapsedChanged

```typescript
(group?: string, collapsed?: boolean) => void;
```

列分组折叠状态被修改时触发。

| 参数      | 类型      | 描述                  |
| --------- | --------- | --------------------- |
| group     | `string`  | 当前被修改的分组 `id` |
| collapsed | `boolean` | 修改后的分组折叠状态  |

### groupNameChanged

```typescript
(group?: string, name?: string) => void;
```

列分组名称被修改时触发。

| 参数  | 类型     | 描述                  |
| ----- | -------- | --------------------- |
| group | `string` | 当前被修改的分组 `id` |
| name  | `string` | 修改后的分组名称      |

