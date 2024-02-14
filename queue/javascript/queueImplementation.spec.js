const QueueImpl = require('./queueImplementation')

test('First item to enter is the first to leave', () => {
    let queue = new QueueImpl(5)
    let expected = "olá"
    queue.push(expected)
    queue.push("mundo")
    let front = queue.front()
    expect(front).toBe(expected)
    let poppedItem = queue.pop()
    expect(poppedItem).toBe(expected)
})

test('Front is correct', () => {
    let queue = new QueueImpl(3)
    queue.push("ola")
    queue.push(",")
    queue.push("mundo")
    queue.push("!")

    expect("ola").toBe(queue.front())
})

test('Rear is correct', () => {
    let queue = new QueueImpl(3)
    queue.push("ola")
    queue.push(",")
    queue.push("mundo")
    queue.push("!")

    expect("mundo").toBe(queue.rear())
})

test('Push item beyond limit', () => {
    let queue = new QueueImpl(3)
    queue.push("ola")
    queue.push(",")
    queue.push("mundo")
    queue.push("!")
    
    expect(3).toBe(queue.size())
    expect(3).toBe(queue.maxSize())
    expect("mundo").toBe(queue.rear())
    expect("ola").toBe(queue.front())
})

test('Pop beyond 0', () => {
    let queue = new QueueImpl(3)
    queue.push("ola")
    queue.push(",")
    queue.push("mundo")

    queue.pop()
    queue.pop()
    queue.pop()
    queue.pop()
    queue.pop()
    queue.pop()

    expect(0).toBe(queue.size())
    expect(3).toBe(queue.maxSize())
    expect(null).toBe(queue.rear())
})

test('IsEmpty returns true', () => {
    let queue = new QueueImpl(3)
    queue.push("ola")
    queue.push(",")
    queue.push("mundo")

    queue.pop()
    queue.pop()
    queue.pop()
    queue.pop()
    queue.pop()
    queue.pop()

    expect(true).toBe(queue.isEmpty())
})

test('IsEmpty returns false', () => {
    let queue = new QueueImpl(3)
    queue.push("ola")

    expect(false).toBe(queue.isEmpty())

    queue.pop()

    queue.push("ola")
    queue.push("ola")

    expect(false).toBe(queue.isEmpty())

    queue.pop()

    queue.push("ola")
    queue.push("ola")
    queue.push("ola")

    expect(false).toBe(queue.isEmpty())
})

test('Size is correct', () => {
    let queue = new QueueImpl(3)
    queue.push("ola")

    expect(1).toBe(queue.size())

    queue.pop()
    
    expect(0).toBe(queue.size())

    queue.pop()

    queue.push("ola")
    queue.push("ola")
    queue.push("ola")

    expect(3).toBe(queue.size())
})