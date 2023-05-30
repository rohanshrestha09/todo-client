export const queryKeys = (key: string) => ({
   all: [key] as const,
   lists: () => [...queryKeys(key).all, 'list'] as const,
   list: (filters: object) => [...queryKeys(key).lists(), filters] as const,
   details: () => [...queryKeys(key).all, 'detail'] as const,
   detail: (id: number) => [...queryKeys(key).details(), id] as const,
});
