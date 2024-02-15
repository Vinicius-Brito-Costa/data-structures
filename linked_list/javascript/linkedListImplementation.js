class ListNode {
    #value
    #nextValue
    constructor(value){
        this.#value = value
    }
    getValue(){
        return this.#value
    }
    getNext(){
        return this.#nextValue
    }
    setNext(node){
        this.#nextValue = node
    }
}
class LinkedListImplementation {
    #node
    #size = 0
    value(){
        if(this.#node){
            return this.#node.getValue()
        }
        return null
    }
    next(){
        let response = false
        if (this.#node && this.#node.getNext()){
            this.#node = this.#node.getNext()
            response = true
            this.#size--
        }
        return response
    }
    add(value){
        if (this.#node){
            let node = new ListNode(value)
            node.setNext(this.#node)
            this.#node = node
        }
        else {
            this.#node = new ListNode(value)
        }
        this.#size++
    }
    size(){
        return this.#size
    }
}

module.exports = LinkedListImplementation