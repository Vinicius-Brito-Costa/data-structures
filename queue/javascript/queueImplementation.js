class QueueImpl {
    #queue;
    #maxSize
    constructor(maxSize){
        this.#maxSize = maxSize
        this.#queue = []
    }

    front() {
        if (this.size() > 0){
            return this.#queue[0]
        }
        return null
    }

    rear() {
        if (this.size() > 0){
            return this.#queue[this.size() - 1]
        }
        return null
    }

    push(item) {
        if (!this.isFull()){
            this.#queue.push(item)
        }
    }

    pop(){
        if (this.size() > 0){
            return this.#queue.shift()
        }
        return null
    }

    isFull(){
        return this.size() >= this.#maxSize
    }

    size(){
        return this.#queue.length
    }
    
    maxSize(){
        return this.#maxSize
    }

    isEmpty(){
        return this.size() <= 0
    }
}
module.exports = QueueImpl
