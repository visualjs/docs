---
title: 列接口
---

### getColumnOptions

获取列的选项，如果 `row` 参数不是 `undefined` 则会尝试返回应用 `columnOptionsSelector` 后的选项。

```typescript
public getColumnOptions(column: string, row: string = undefined): ColumnOptions;
```

### getColumnOptionsByIndex

`getColumnOptions` 的索引版本。

```typescript
public getColumnOptionsByIndex(x: number, y: number = undefined): ColumnOptions;
```

### getColumnByIndex

根据列的索引获取列 `field`。

```typescript
public getColumnByIndex(x: number): string;
```

### getPinnedLeftColumns

获取所有左固定的列。

```typescript
public getPinnedLeftColumns(): string[];
```

### getPinnedRightColumns

获取所有右固定的列。

```typescript
public getPinnedRightColumns(): string[];
```

### getNoPinnedColumns

获取所有没有固定的列。

```typescript
public getNoPinnedColumns(): string[];
```

### setColumns

设置网格的列。

```typescript
public setColumns(columns: ColumnsDef, defaultOptions?: BaseColumnOptions): void;
```

### setColumnName

修改列的名称。

```typescript
public setColumnName(field: string, name: string): void;
```

### setColumnPinned

修改列的固定状态。

```typescript
public setColumnPinned(field: string, pinned: Pinned): void;
```

### setColumnVisible

修改列的显示和隐藏。

```typescript
public setColumnVisible(field: string, visible: boolean): void;
```

### setColumnWidth

修改列的宽度。

```typescript
public setColumnWidth(field: string, params: { width?: number, flex?: number }): void;
```

### setColumnHeight

修改列的高度。

```typescript
public setColumnHeight(height: number): void;
```

### getGroups

获取所有列分组。

```typescript
public getGroups(): GroupData[];
```

### getGroupData

根据分组 id 获取列分组。

```typescript
public getGroupData(): GroupData;
```

### setGroupCollapsed

修改列分组的折叠状态。

```typescript
public setGroupCollapsed(group: string, collapsed: boolean): void;
```

### toggleGroupCollapsed

切换分组的折叠状态。

```typescript
public toggleGroupCollapsed(group: string): void;
```

### setGroupName

修改列分组的名称。

```typescript
public setGroupName(group: string, name: string): void;
```
