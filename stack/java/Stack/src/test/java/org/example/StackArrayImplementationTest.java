package org.example;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class StackArrayImplementationTest {
    
    @Test
    void test_peek(){
        StackArrayImplementation<String> stack = new StackArrayImplementation<>(5);

        Assertions.assertEquals(null, stack.peek());

        for (int index = 0; index < 5; index++){
            stack.push(String.format("index-%s", index));
        }
        Assertions.assertEquals("index-4", stack.peek());
    }

    @Test
    void test_push(){
        StackArrayImplementation<String> stack = new StackArrayImplementation<>(5);

        for (int index = 0; index < 3; index++){
            stack.push(String.format("index-%s", index));
        }
        Assertions.assertEquals("index-2", stack.peek());
    }

    @Test
    void test_pop(){
        StackArrayImplementation<String> stack = new StackArrayImplementation<>(5);
        for (int index = 0; index < 5; index++){
            stack.push(String.format("index-%s", index));
        }
        for (int index = 0; index < 4; index++){
            Assertions.assertEquals(String.format("index-%s", 5 - (index + 1)), stack.pop());
        }
        Assertions.assertEquals("index-0", stack.pop());
        Assertions.assertEquals(null, stack.pop());
    }

    @Test
    void test_limit(){
        StackArrayImplementation<String> stack = new StackArrayImplementation<>(5);
        for (int index = 0; index < 50; index++){
            stack.push(String.format("index-%s", index));
        }

        Assertions.assertEquals(5, stack.size());
        Assertions.assertEquals(true, stack.isFull());
        Assertions.assertEquals("index-4", stack.peek());
    }

    @Test
    void test_empty(){
        StackArrayImplementation<String> stack = new StackArrayImplementation<>(50);
        Assertions.assertEquals(true, stack.isEmpty());
        for (int index = 0; index < 50; index++){
            stack.push(String.format("index-%s", index));
        }
        for (int index = 0; index < 50; index++){
            stack.pop();
        }

        Assertions.assertEquals(0, stack.size());
        Assertions.assertEquals(true, stack.isEmpty());
    }

    @Test
    void test_order(){
        StackArrayImplementation<String> stack = new StackArrayImplementation<>(50);
        Assertions.assertEquals(true, stack.isEmpty());
        for (int index = 0; index < 50; index++){
            stack.push(String.format("index-%s", index));
            Assertions.assertEquals(String.format("index-%s", index), stack.peek());
        }
        for (int index = 0; index < 50; index++){
            Assertions.assertEquals(String.format("index-%s", 50 - (index + 1)), stack.peek());
            stack.pop();
        }

        Assertions.assertEquals(0, stack.size());
        Assertions.assertEquals(true, stack.isEmpty());
    }
}
