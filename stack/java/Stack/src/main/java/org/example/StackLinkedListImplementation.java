package org.example;

public class StackLinkedListImplementation<E> implements StackInterface<E>{
    private Node<E> linkedList;
    private int currentSize = 0;
    private int maxSize = 0;

    @SuppressWarnings("unchecked")
    StackLinkedListImplementation(int maxSize){
        this.maxSize = maxSize;
    }

    public E peek(){
        if (!isEmpty()){
            return linkedList.getItem();
        }
        return null;
    }
    public void push(E item){
        if (!isFull()){
            if (linkedList != null){
                Node<E> newNode = new Node<>(item);
                newNode.setNext(linkedList);
                linkedList = newNode;
            }
            else {
                linkedList = new Node<>(item);
            }
            currentSize++;
        }
    }
    public E pop(){
        if (!isEmpty()){
            E oldItem = linkedList.getItem();
            linkedList = linkedList.getNext();
            currentSize--;
            return oldItem;
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
        return currentSize >= maxSize;
    }

    public class Node<T> {
        private T item;
        private Node<T> next;

        Node(T item){
            this.item = item;
        }

        public Node<T> getNext(){
            return this.next;
        }

        public void setNext(Node<T> next){
            this.next = next;
        }

        public T getItem(){
            return this.item;
        }

        public void setItem(T item){
            this.item = item;
        }
    }
}
