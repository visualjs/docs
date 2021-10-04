---
title: Hooks
---

### beforeCellDbClicked

```typescript
beforeCellDbClicked: (pos: CellPosition, ev: MouseEvent) => boolean | void;
```

### afterCellDbClicked

```typescript
afterCellDbClicked: (pos: CellPosition, ev: MouseEvent) => boolean | void;
```

### beforeCellMouseDown

```typescript
beforeCellMouseDown: (pos: CellPosition, ev: MouseEvent) => boolean | void;
```

### afterCellMouseDown

```typescript
afterCellMouseDown: (pos: CellPosition, ev: MouseEvent) => boolean | void;
```

### beforeCellMouseMove

```typescript
beforeCellMouseMove: (pos: CellPosition, ev: MouseEvent) => boolean | void;
```

### afterCellMouseMove

```typescript
afterCellMouseMove: (pos: CellPosition, ev: MouseEvent) => boolean | void;
```

### beforeFillerMouseDown

```typescript
beforeFillerMouseDown: (pos: CellPosition, ev: MouseEvent) => boolean | void;
```

### afterFillerMouseDown

```typescript
afterFillerMouseDown: (pos: CellPosition, ev: MouseEvent) => boolean | void;
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

### beforeColumnResizing

```typescript
beforeColumnResizing: (column: string, width: number) => boolean | void;
```

### afterColumnResizing

```typescript
afterColumnResizing: (column: string, width: number) => boolean | void;
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

