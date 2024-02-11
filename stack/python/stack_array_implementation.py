from stack_interface import StackInterface, StackSuper

class StackArrayImpl(StackSuper):
    def __init__(self, stack_size: int) -> None:
        self.stack = []
        self.stack_size = stack_size

    def pop(self) -> any:
        if self.size() > 0:
            return self.stack.pop()
        return None
    
    def push(self, item: any) -> None:
        if not self.is_full():
            self.stack.append(item)

    def size(self) -> int:
        return len(self.stack)
    
    def is_full(self) -> bool:
        return self.size() >= self.stack_size
    
    def is_empty(self) -> bool:
        return self.size() == 0
    
    def peek(self) -> any:
        if self.size() > 0:
            return self.stack[self.size() - 1]
        return None
