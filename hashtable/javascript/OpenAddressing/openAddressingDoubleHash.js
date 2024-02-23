class Hashtable {
    #size
    #keys
    #values
    #usedSpaces = 0

    constructor(size){
        if(typeof size == 'number' && size > 0){
            this.#size = size
            this.#values = [size]
            this.#keys = [size]
            for(let index = 0; index < size; index++){
                this.#values[index] = null
            }
        }
        else {
            throw new Error("Hashtable needs a set limit size.")
        }
    }

    get(key){
        if(this.#usedSpaces > 0){
            let hash = this.hash(key)
            let node = this.#values[hash % this.#size]
            if(this.#keys[hash % this.#size] == key){
                return node
            }
            for(let index = 1; index < this.#size; index++){
                let keyIndex = ((this.hash(key) + index) * this.hash2(key)) % this.#size
                if (this.#keys[keyIndex] == key){
                    return this.#values[keyIndex]
                }
                if (this.#values[keyIndex] == null){
                    return null
                }
            }
        }
        return null
    }

    add(key, value){
        if(this.#usedSpaces < this.#size){
            let hash = this.hash(key)
            let node = this.#values[hash % this.#size]
            if (node != null){
                for(let index = 1; index <= this.#size; index++){
                    hash = ((this.hash(key) + index) * this.hash2(key)) % this.#size
                    node = this.#values[hash]
                    if (node == null || node == undefined){
                        this.#keys[hash] = key
                        this.#values[hash] = value
                        return
                    }
                }
            }
            else {
                this.#values[hash % this.#size] = value
                this.#keys[hash % this.#size] = key
            }
            this.#usedSpaces++
        }
    }

    remove(key){
        if(this.#usedSpaces > 0){
            let hash = this.hash(key) % this.#size
            if (this.#keys[hash] == key){
                this.#values[hash] = undefined
                this.#keys[hash] = null
                return
            }
            for(let index = 1; index < this.#size; index++){
                let hash = ((this.hash(key) + index) * this.hash2(key)) % this.#size
                if(this.#keys[hash] == key){
                    this.#values[hash] = undefined
                    this.#keys[hash] = null
                    return
                }
                if(this.#values[hash] == null){
                    return
                }
            }
        }
    }

    hash2(key){
        //(hash(x)+1*hash2(x))%size
        if(key == null) return null
        return key.length
    }

    hash(key){
        if(key == null) return null
        let index = key.length + this.#size
        for (let i = 0; i < key.length; i++){
            index += key.charCodeAt(i) + key.length * this.#size
        }
        index *= key.length - (key.length % 2 == 0 ? 1 : 0)
        return index
    }

    toJSON(){
        return {
            keys: this.#keys,
            values: this.#values,
            size: this.#size
        }
    }
}

let hash = new Hashtable(5)

// hash.add("123", "olá, mundo 123")
// hash.add("1234", "olá, mundo 1234")
// hash.add("12345", "olá, mundo 12345")
// hash.add("123456", "olá, mundo 123456")
// hash.add("1234567", "olá, mundo 1234567")

// console.log(hash.get("123"))
// console.log(hash.get("1234"))
// console.log(hash.get("12345"))
// console.log(hash.get("123456"))
// console.log(hash.get("1234567"))
//console.log(hash.toJSON())