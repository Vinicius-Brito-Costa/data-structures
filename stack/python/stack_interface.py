from typing import Any


class StackMeta(type):
    """A Stack metaclass that will be used for stack class creation.
    """
    def __call__(self, stack_size: int) -> Any:
        if not isinstance(stack_size, int):
            raise TypeError("stack_size must be int")
        return super().__call__(stack_size)

    def __instancecheck__(cls, instance):
        return cls.__subclasscheck__(type(instance))

    def __subclasscheck__(cls, subclass):
        return (hasattr(subclass, 'pop') and 
                callable(subclass.pop) and 
                hasattr(subclass, 'push') and 
                callable(subclass.push) and 
                hasattr(subclass, 'size') and 
                callable(subclass.size) and 
                hasattr(subclass, 'is_full') and 
                callable(subclass.is_full) and 
                hasattr(subclass, 'is_empty') and 
                callable(subclass.is_empty) and 
                hasattr(subclass, 'peek') and 
                callable(subclass.peek))

class StackInterface(metaclass=StackMeta):
    pass

class StackSuper:
    def __init__(self, stack_size: int) -> None:
        pass
    
    def pop(self) -> any:
        pass
    
    def push(self, item: any) -> None:
        pass

    def size(self) -> int:
        pass
    
    def is_full(self) -> bool:
        pass
    
    def is_empty(self) -> bool:
        pass
    
    def peek(self) -> any:
        pass