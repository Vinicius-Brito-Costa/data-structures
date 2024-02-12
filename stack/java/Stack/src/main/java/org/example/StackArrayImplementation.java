package org.example;

public class StackArrayImplementation<E> implements StackInterface<E>{
    private E[] stack;
    private int currentSize = 0;

    @SuppressWarnings("unchecked")
    StackArrayImplementation(int maxSize){
        this.stack = (E[]) new Object[maxSize];
    }

    public E peek(){
        if (!isEmpty()){
            return stack[currentSize - 1];
        }
        return null;
    }
    public void push(E item){
        if (!isFull()){
            stack[size()] = item;
            currentSize++;
        }
    }
    public E pop(){
        if (!isEmpty()){
            E poppedItem = stack[currentSize - 1];
            stack[currentSize - 1] = null;
            currentSize--;
            return poppedItem;
        }

        return null;
    }
    public int size(){
        return currentSize;
    }
    public boolean isEmpty(){
        return currentSize < 1;
    }
    public boolean isFull(){
        return currentSize >= stack.length;
    }
}
