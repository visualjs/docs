---
title: Hooks
---

### beforeCellDbClicked

```typescript
beforeCellDbClicked: (pos: CellPosition, ev: MouseEvent, cell: HTMLDivElement) => boolean | void;
```

### afterCellDbClicked

```typescript
afterCellDbClicked: (pos: CellPosition, ev: MouseEvent, cell: HTMLDivElement) => boolean | void;
```

### beforeCellMouseDown

```typescript
beforeCellMouseDown: (pos: CellPosition, ev: MouseEvent, cell: HTMLDivElement) => boolean | void;
```

### afterCellMouseDown

```typescript
afterCellMouseDown: (pos: CellPosition, ev: MouseEvent, cell: HTMLDivElement) => boolean | void;
```

### beforeCellMouseMove

```typescript
beforeCellMouseMove: (pos: CellPosition, ev: MouseEvent, cell: HTMLDivElement) => boolean | void;
```

### afterCellMouseMove

```typescript
afterCellMouseMove: (pos: CellPosition, ev: MouseEvent, cell: HTMLDivElement) => boolean | void;
```

### beforeFillerMouseDown

```typescript
beforeFillerMouseDown: (pos: CellPosition, ev: MouseEvent, filler: HTMLDivElement) => boolean | void;
```

### afterFillerMouseDown

```typescript
afterFillerMouseDown: (pos: CellPosition, ev: MouseEvent, filler: HTMLDivElement) => boolean | void;
```

### beforeFilling

```typescript
beforeFilling: (range: FillRange) => boolean | void;
```

### afterFilling

```typescript
afterFilling: (range: FillRange) => boolean | void;
```

### beforeSelectionChange

```typescript
beforeSelectionChange: (start: Coordinate, end: Coordinate) => boolean | void;
```

### afterSelectionChange

```typescript
afterSelectionChange: (start: Coordinate, end: Coordinate) => boolean | void;
```

### beforeContextMenuShow

```typescript
beforeContextMenuShow: (pos: CellPosition, items: MenuItem[]) => boolean | void;
```

### afterContextMenuShow

```typescript
afterContextMenuShow: (pos: CellPosition, items: MenuItem[]) => boolean | void;
```

### beforeColumnResizingStart

```typescript
beforeColumnResizingStart: (column: string, width: number) => boolean | void;
```

### afterColumnResizingStart

```typescript
afterColumnResizingStart: (column: string, width: number) => boolean | void;
```

### beforeColumnResizingEnd

```typescript
beforeColumnResizingEnd: (column: string, width: number) => boolean | void;
```

### afterColumnResizingEnd

```typescript
afterColumnResizingEnd: (column: string, width: number) => boolean | void;
```

### beforeRowResizingStart

```typescript
beforeRowResizingStart: (row: string, height: number) => boolean | void;
```

### afterRowResizingStart

```typescript
afterRowResizingStart: (row: string, height: number) => boolean | void;
```

### beforeRowResizingEnd

```typescript
beforeRowResizingEnd: (row: string, height: number) => boolean | void;
```

### afterRowResizingEnd

```typescript
afterRowResizingEnd: (row: string, height: number) => boolean | void;
```

### beforeKeyDown

```typescript
beforeKeyDown: (ev: KeyboardEvent) => boolean | void;
```

### afterKeyDown

```typescript
afterKeyDown: (ev: KeyboardEvent) => boolean | void;
```

### beforeKeyPress

```typescript
beforeKeyPress: (ev: KeyboardEvent) => boolean | void;
```

### afterKeyPress

```typescript
afterKeyPress: (ev: KeyboardEvent) => boolean | void;
```

### beforeKeyUp

```typescript
beforeKeyUp: (ev: KeyboardEvent) => boolean | void;
```

### afterKeyUp

```typescript
afterKeyUp: (ev: KeyboardEvent) => boolean | void;
```

### beforeCopy

```typescript
beforeCopy: (text: string) => boolean | void;
```

### afterCopy

```typescript
afterCopy: (text: string) => boolean | void;
```

### beforePaste

```typescript
beforePaste: (text: string) => boolean | void;
```

### afterPaste

```typescript
afterPaste: (text: string) => boolean | void;
```

### beforeRowDragStart

```typescript
beforeRowDragStart: (startRow: string) => boolean | void;
```

### afterRowDragStart

```typescript
afterRowDragStart: (startRow: string) => boolean | void;
```

### beforeRowDragEnd

```typescript
beforeRowDragEnd: (startRow: string, endRow: string) => boolean | void;
```

### afterRowDragEnd

```typescript
afterRowDragEnd: (startRow: string, endRow: string) => boolean | void;
```

### beforeColumnDragStart

```typescript
beforeColumnDragStart: (startColumn: string) => boolean | void;
```

### afterColumnDragStart

```typescript
afterColumnDragStart: (startColumn: string) => boolean | void;
```

### beforeColumnDragEnd

```typescript
beforeColumnDragEnd: (startColumn: string, endColumn: string) => boolean | void;
```

### afterColumnDragEnd

```typescript
afterColumnDragEnd: (startColumn: string, endColumn: string) => boolean | void;
```
