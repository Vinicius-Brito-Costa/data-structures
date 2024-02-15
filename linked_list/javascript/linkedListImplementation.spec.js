const LinkedListImplementation = require('./linkedListImplementation')

test('Can add N values', () => {
    let linkedList = new LinkedListImplementation(5)
    let linkedListSize = 300
    for (let index = 0; index <= linkedListSize; index++){
        linkedList.add(index)
    }

    expect(linkedListSize).toBe(linkedList.value())
    let loopedOver = 0

    while (linkedList.next()){
        loopedOver++
    }

    expect(linkedListSize).toBe(loopedOver)
})

test('Next should do nothing', () => {
    let linkedList = new LinkedListImplementation(5)
    
    let firstItem = 1
    linkedList.add(firstItem)

    expect(firstItem).toBe(linkedList.value())
    
    expect(false).toBe(linkedList.next())

    linkedList.add(2)

    expect(true).toBe(linkedList.next())

    expect(false).toBe(linkedList.next())
    expect(false).toBe(linkedList.next())
    expect(firstItem).toBe(linkedList.value())

})

test('Can add multiple types of values', () => {
    let linkedList = new LinkedListImplementation(5)
    
    linkedList.add(1)
    expect(1).toBe(linkedList.value())
    
    linkedList.add("olá, mundo")
    expect("olá, mundo").toBe(linkedList.value())
    
    let message = { greeting: "olá, mundo" }
    linkedList.add(message)
    expect(linkedList.value() != undefined).toBe(true)
    expect(linkedList.value().greeting).toBe(message.greeting)

})

test('Order of itens is respected', () => {
    let linkedList = new LinkedListImplementation(5)
    let itemCount = 3000

    for(let index = 0; index < itemCount; index++){
        linkedList.add(`index-${index}`)
    }

    for(let index = itemCount; index > 0; index--){
        expect(linkedList.value()).toBe(`index-${index - 1}`)
        linkedList.next()
    }
})

test('Size is correct', () => {
    let linkedList = new LinkedListImplementation(5)
    let itemCount = 3000

    expect(linkedList.size()).toBe(0)

    for(let index = 0; index < itemCount; index++){
        linkedList.add(`index-${index}`)
    }

    expect(linkedList.size()).toBe(itemCount)

    for(let index = itemCount; index > 0; index--){
        expect(linkedList.value()).toBe(`index-${index - 1}`)
        linkedList.next()
    }

    expect(linkedList.size()).toBe(1)
})