---
title: 行接口
---

### getRowIdByIndex

根据行的索引获取行的 `id`。

```typescript
public getRowIdByIndex(y: number): string;
```

### getRowIndex

根据行的 `id` 获取行的索引。

```typescript
public getRowIndex(id: string): number;
```

### getRowDataByIndex

根据行的索引获取行数据。

```typescript
public getRowDataByIndex(y: number): RowData;
```

### getRowData

根据行的 `id` 获取行数据。

```typescript
public getRowData(row: string): RowData
```

### appendRows

向网格的末尾追加行。

```typescript
public appendRows(rows: RowData[]): void;
```

### appendRowsBefore

向网格指定行之前追加新的行。

```typescript
public appendRowsBefore(index: number, rows: RowData[]): void;
```

### removeRows

从网格中删除行。

```typescript
public removeRows(rows: string[]): void;
```

### clearRows

清除所有行。

```typescript
public clearRows(): void;
```

### getSelectedRows

获取选择的行。

```typescript
public getSelectedRows(): string[];
```

### selectRows

选择指定的行。

```typescript
public selectRows(rows: string[]): void;
```

### appendSelectedRows

向选择的行中追加新的行。

```typescript
public appendSelectedRows(rows: string[]): void;
```

### takeSelectedRow

从已经选择的行中取消选择指定行。

```typescript
public takeSelectedRow(row: string): void;
```

### getRowIds

获取所有行id，不包含固定行。

```typescript
public getRowIds(): string[];
```

### getRowsBetween

获取开始结束索引范围内的所有有效行id。

```typescript
public getRowsBetween(start: number, end: number): string[];
```

### getPinnedTopRows

获取固定在顶部的行。

```typescript
public getPinnedTopRows(): string[];
```

### setPinnedTopRows

设置固定顶部的行。

```typescript
public setPinnedTopRows(rows: string[]): void;
```

### appendPinnedTopRows

向固定顶部的行追加新的行。

```typescript
public appendPinnedTopRows(rows: string[]): void;
```

### getPinnedBottomRows

获取固定在底部的行。

```typescript
public getPinnedBottomRows(): string[];
```

### setPinnedBottomRows

设置固定底部的行。

```typescript
public setPinnedBottomRows(rows: string[]): void;
```

### appendPinnedBottomRows

向固定底部的行追加新的行。

```typescript
public appendPinnedBottomRows(rows: string[]): void;
```

### takePinnedRows

取消行的固定。

```typescript
public takePinnedRows(rows: string[]): void;
```

### isPinnedTop

获取行是否固定在顶部。

```typescript
public isPinnedTop(row: string): boolean;
```

### isPinnedBottom

获取行是否固定在底部。

```typescript
public isPinnedBottom(row: string): boolean;
```

### isPinnedRow

获取行是否是固定状态。

```typescript
public isPinnedRow(row: string): boolean;
```

### setRowBaseHeight

设置基础行高。

```typescript
public setRowBaseHeight(height: number): void;
```

