class HashtableNode {
    #originalKey
    #value
    #next

    constructor(originalKey, value) {
        this.#originalKey = originalKey
        this.#value = value
    }
    originalKey(){
        return this.#originalKey
    }
    setOriginalKey(originalKey){
        this.#originalKey = originalKey
    }
    keyMatch(key){
        return this.#originalKey == key
    }

    next() {
        return this.#next
    }
    setNext(next) {
        this.#next = next
    }

    value(){
        return this.#value
    }
    setValue(value){
        this.#value = value
    }
}

class Hashtable {
    #listLimit = 10
    #table = []

    constructor(){
        for (let index = 0; index < this.#listLimit; index++){
            this.#table.push(new HashtableNode())
        }
    }

    get(key){
        let hash = this.hash(key)
        let linkedList = this.#table[hash]
        if (linkedList.value() != null){
            let currentNode = linkedList
            while (currentNode != null){
                if (currentNode.keyMatch(key)){
                    return currentNode.value()
                }
                currentNode = currentNode.next()
            }
            
        }
        return null
    }

    add(key, value){
        let node = this.#table[this.hash(key)]
        if (node != null && node.originalKey()){
            let current = node
            while(current != null){
                if (current.keyMatch(key)){
                    current.setValue(value)
                    return
                }
                else {
                    current = current.next()
                }
            }
            let newNode = new HashtableNode(key, value)
            newNode.setNext(node)
            this.#table[this.hash(key)] = newNode
        }
        else {
            this.#table[this.hash(key)] = new HashtableNode(key, value)
        }
    }

    remove(key) {
        let node = this.#table[this.hash(key)]
        let current = node
        while(current != null){
            if (current.keyMatch(key)){
                let next = current.next()
                if (current != node){
                    node.setNext(next)
                }
                else {
                    if (next) {
                        this.#table[this.hash(key)] = next
                    }
                    else {
                        this.#table[this.hash(key)] = new HashtableNode()
                    }
                }
            }
            current = current.next()
        }
    }

    hash(key) {
        if(key == null) return null
        let index = key.length + this.#listLimit
        for (let i = 0; i < key.length; i++){
            index += key.charCodeAt(i) + key.length * this.#listLimit
        }
        index *= key.length - (key.length % 2 == 0 ? 1 : 0)
        return index % this.#listLimit
    }
}

let hashtable = new Hashtable()

hashtable.add("olá, mudo", "12345")
hashtable.add("olmundo.", "123")
hashtable.add("olá! !", "1234")

console.log(`olá, mudo -> ${hashtable.hash("olá, mudo")} -> ${hashtable.get("olá, mudo")}`)
console.log(`olmundo. -> ${hashtable.hash("olmundo.")} -> ${hashtable.get("olmundo.")}`)
console.log(`olá! ! -> ${hashtable.hash("olá! !")} -> ${hashtable.get("olá! !")}`)
