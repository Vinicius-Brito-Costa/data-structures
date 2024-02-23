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