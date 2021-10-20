---
title: 单元格接口
---

### getCoordinate

根据行 `id` 和列的 `field` 获取单元格坐标。

```typescript
public getCoordinate(row: string, col: string): Coordinate;
```

### getCellPosition

根据单元格坐标获取单元格的行 `id` 和列 `field`。

```typescript
public getCellPosition(coord: Coordinate): CellPosition;
```

### getRawCellValue

根据单元格位置获取单元格的原始数据。

```typescript
public getRawCellValue(row: string, column: string): any;
```

### getRawCellValueByCoord

根据单元格坐标获取单元格的原始数据。

```typescript
public getRawCellValueByCoord(coord: Coordinate): any;
```

### getCellValue

获取应用了 `transformer` 的单元格数据。

```typescript
public getCellValue(row: string, column: string): any;
```

### getCellValueByCoord

参数为坐标版本的 `getCellValue`

```typescript
public getCellValueByCoord(coord: Coordinate): any;
```

### setCellValue

根据单元格位置设置单元格的值。

```typescript
public setCellValue(row: string, column: string, value: any, force = false): void;
```

### setCellValueByCoord

根据单元格坐标设置单元格的值。

```typescript
public setCellValueByCoord(coord: Coordinate, value: any): void;
```

### stopEditing

停止正在编辑的单元格。

```typescript
public stopEditing(): void;
```

### setEditing

对指定位置的单元格启用编辑。

```typescript
public setEditing(pos?: CellPosition): void;
```

### getCoordLocatedRange

获取单元格所在的选区。

```typescript
public getCoordLocatedRange(coord: Coordinate): CellRange | undefined;
```
