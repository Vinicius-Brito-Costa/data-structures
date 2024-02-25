class Hashtable {
    #size
    #keys
    #values
    #usedSpaces = 0

    constructor(size){
        if(typeof size == 'number' && size > 0){
            this.#size = size
            this.#values = []
            this.#keys = []
            for(let index = 0; index < size; index++){
                this.#values[index] = null
                this.#keys[index] = null
            }
        }
        else {
            throw new Error("Hashtable needs a set limit size.")
        }
    }

    get(key){
        if(this.#usedSpaces > 0){
            for(let i = 0; i < this.#size; i++){
                let index = (this.hash(key) + i * this.hash2(key)) % this.#size
                if(this.#keys[index] == key){
                    return this.#values[index]
                }
            }
        }
        return null
    }

    add(key, value){
        if(this.#usedSpaces < this.#size){
            for(let i = 0; i < this.#size; i++){
                let index = (this.hash(key) + i * this.hash2(key)) % this.#size
                if(this.#keys[index] == key){
                    this.#values[index] = value
                    return
                }
                else if (this.#keys[index] == null){
                    this.#keys[index] = key
                    this.#values[index] = value
                    this.#usedSpaces++
                    return
                }
            }
        }
    }

    remove(key){
        if(this.#usedSpaces > 0){
            for(let i = 0; i < this.#size; i++){
                let index = (this.hash(key) + i * this.hash2(key)) % this.#size
                if(this.#keys[index] == key){
                    this.#values[index] = null
                    this.#keys[index] = null
                    this.#usedSpaces--
                    return
                }
            }
        }
    }

    hash2(key){
        if(key == null) return null
        return (this.#size / 2) - key.length % (this.#size / 2)
    }

    hash(key){
        return key.length % this.#size
    }

    toJSON(){
        return {
            keys: this.#keys,
            values: this.#values,
            size: this.#size,
            usedSpaces: this.#usedSpaces
        }
    }
}
module.exports = Hashtable