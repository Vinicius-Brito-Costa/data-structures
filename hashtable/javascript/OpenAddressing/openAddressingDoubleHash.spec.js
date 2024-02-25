const Hashtable = require('./openAddressingDoubleHash')

test('Key has the same hash everytime', () => {
    let hashtable = new Hashtable(5)
    expect(hashtable.hash("test-123")).toBe(hashtable.hash("test-123"))
    expect(hashtable.hash2("test-123")).toBe(hashtable.hash2("test-123"))
})

test('Trying to add a different value on the same key will update it', () => {
    let hashtable = new Hashtable(5)

    hashtable.add("add2times", "ola, mundo - 1")
    expect(hashtable.get("add2times")).toBe("ola, mundo - 1")

    hashtable.add("add2times", "ola, mundo - 2")
    expect(hashtable.get("add2times")).toBe("ola, mundo - 2")

})

test('All added itens are retrivable', () => {
    let hashtable = new Hashtable(100)
    
    for (let index = 0; index < 100; index++){
        hashtable.add(`test-${index}`, `ola, mundo - ${index}`)
    }
    for (let index = 0; index < 100; index++){
        expect(hashtable.get(`test-${index}`)).toBe(`ola, mundo - ${index}`)
    }
})

test('Removed itens are cleared from the hashtable', () => {
    let hashtable = new Hashtable(100)
    
    let initialSize = getSizeInBytes(hashtable)
    for (let index = 0; index < 100; index++){
        hashtable.add(`test-${index}`, `ola, mundo - ${index}`)
    }
    for (let index = 0; index < 100; index++){
        hashtable.remove(`test-${index}`)
    }
    for (let index = 0; index < 100; index++){
        expect(hashtable.get(`test-${index}`)).toBe(null)
    }
    expect(getSizeInBytes(hashtable)).toBe(initialSize)
})

test('Hashtable needs a set size', () => {
    expect(() => new Hashtable()).toThrow(Error)
})

function getSizeInBytes(obj){
    let str = null;
    if (typeof obj === 'string') {
        str = obj;
    } else {
        str = JSON.stringify(obj);
    }
    const bytes = new TextEncoder().encode(str).length;
    return bytes;
};