import { atom } from "jotai";

export const editingItemIdAtom = atom<number | null>(null);

export const setEditingItemAtom = atom(null, (get, set, id: number) => {
  const currentId = get(editingItemIdAtom);
  const nextId = currentId === id ? null : id;
  set(editingItemIdAtom, nextId);
});

export const clearEditingItemAtom = atom(null, (_get, set) => {
  set(editingItemIdAtom, null);
});
