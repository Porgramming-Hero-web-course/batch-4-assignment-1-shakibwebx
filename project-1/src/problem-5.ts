// problem 5

function getProperty<X, Y extends keyof X>(obj: X, key: Y): X[Y] {
    return obj[key]
}
