package org.example;

/**
 * StackInterface
 */
public interface StackInterface<E> {
    public E peek();
    public void push(E item);
    public E pop();
    public int size();
    public boolean isEmpty();
    public boolean isFull();
}