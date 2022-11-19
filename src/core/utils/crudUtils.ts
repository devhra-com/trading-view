export function addOne<T>(newItem: T, items: T[] = []) {
  return [...items, newItem];
}

export function removeOne<T extends { id: string }>(
  itemId: string,
  items: T[] = [],
) {
  return items.filter((item) => item.id !== itemId);
}

export function removeMany<T extends { id: string }>(
  itemIds: string[],
  items: T[] = [],
) {
  return items.filter((item) => !itemIds.includes(item.id));
}

export function updateOne<T extends { id: string }>(
  updatedItem: T,
  items: T[] = [],
) {
  return items.map((item) => (item.id === updatedItem.id ? updatedItem : item));
}
