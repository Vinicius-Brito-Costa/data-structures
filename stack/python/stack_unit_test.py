import unittest
from stack_array_implementation import StackArrayImpl
from stack_linked_list_implementation import StackLinkedListImpl

class TestStackArray(unittest.TestCase):
    def test_stack_limit(self):
        stack = StackArrayImpl(3)
        for index in range(40):
            stack.push("index-" + str(index))
        self.assertEqual(3, stack.size())
    
    def test_stack_item_order(self):
        stack = StackArrayImpl(40)
        for index in range(40):
            stack.push("index-" + str(index))
        for index in range(40):
            self.assertEqual("index-" + str(40 - (index + 1)), stack.peek())
            self.assertEqual("index-" + str(40 - (index + 1)), stack.pop())
        self.assertEqual(True, stack.is_empty())
    
    def test_stack_peek_top(self):
        stack = StackArrayImpl(40)
        print("Stack size() "+ str(stack.size()))
        for index in range(40):
            stack.push("index-" + str(index))

        self.assertEqual("index-39", stack.peek())
    
    def test_stack_is_full(self):
        stack = StackArrayImpl(40)
        for index in range(40):
            stack.push("index-" + str(index))
        self.assertEqual(True, stack.is_full())
    
    def test_stack_is_empty(self):
        stack = StackArrayImpl(40)
        for index in range(40):
            stack.push("index-" + str(index))
        for index in range(40):
            stack.pop()
        self.assertEqual(True, stack.is_empty())
    
    def test_stack_size(self):
        stack = StackArrayImpl(40)
        for index in range(40):
            stack.push("index-" + str(index))
        for index in range(39):
            stack.pop()
        self.assertEqual(1, stack.size())

class TestStackLinkedList(unittest.TestCase):
    def test_stack_limit(self):
        stack = StackLinkedListImpl(3)
        for index in range(40):
            stack.push("index-" + str(index))
        self.assertEqual(3, stack.size())
    
    def test_stack_item_order(self):
        stack = StackLinkedListImpl(40)
        for index in range(40):
            stack.push("index-" + str(index))
        for index in range(40):
            self.assertEqual("index-" + str(40 - (index + 1)), stack.peek())
            self.assertEqual("index-" + str(40 - (index + 1)), stack.pop())
        self.assertEqual(True, stack.is_empty())
    
    def test_stack_peek_top(self):
        stack = StackLinkedListImpl(40)
        print("Stack size() "+ str(stack.size()))
        for index in range(40):
            stack.push("index-" + str(index))

        self.assertEqual("index-39", stack.peek())
    
    def test_stack_is_full(self):
        stack = StackLinkedListImpl(40)
        for index in range(40):
            stack.push("index-" + str(index))
        self.assertEqual(True, stack.is_full())
    
    def test_stack_is_empty(self):
        stack = StackLinkedListImpl(40)
        for index in range(40):
            stack.push("index-" + str(index))
        for index in range(40):
            stack.pop()
        self.assertEqual(True, stack.is_empty())
    
    def test_stack_size(self):
        stack = StackLinkedListImpl(40)
        for index in range(40):
            stack.push("index-" + str(index))
        for index in range(39):
            stack.pop()
        self.assertEqual(1, stack.size())
if __name__ == '__main__':
    unittest.main()