// Problem 8

function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every(k => k in obj);
}
