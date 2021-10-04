---
title: 网格接口
---

### on

网格事件绑定，支持两种事件的绑定，一种是 [UI 事件](../events/01-hooks.md)，一种是数据修改事件，UI 事件一般支持 `boolean` 类型的返回值，如果返回 `false` 可以阻止 UI 事件的进行。
事件绑定方法的返回值是一个取消绑定的回调方法，调用返回的方法可以取消当前绑定。

```typescript
public on(event: string, handler: Function): () => void;
```

### destroy

销毁当前网格，销毁后的网格不能再使用，网格的销毁是异步的，所以，如果你想要在网格销毁后进行一些操作，需要使用返回的 `Promise` 对象。

```typescript
public destroy(): Promise<void>;
```

### isLoading

获取网格的 loading 状态

```typescript
public isLoading(): boolean;
```

### setLoading

修改网格的 loading 状态

```typescript
public setLoading(loading: boolean): void;
```

### selectCells

选择单元格。

```typescript
public selectCells(start: Coordinate, end: Coordinate): void;
```

### deselectAllCells

取消选择所有单元格。

```typescript
public deselectAllCells(): void;
```

### copySelection

将当前选中的单元格数据复制到剪贴板。

```typescript
public copySelection(): void;
```

### pasteFromClipboard

解析剪贴板中的数据，并按照顺序设置选中的单元格数据。

```typescript
public pasteFromClipboard(): void;
```
