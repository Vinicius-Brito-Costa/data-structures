from stack_interface import StackInterface, StackSuper

class LinkedListItem(StackSuper):

    def __init__(self, item: any) -> None:
        self.item = item
        self.next = None
    
    def set_item(self, item: any) -> any:
        self.item = item
        return self.item
    def set_next(self, item: any) -> None:
        self.next = item
    def get_next(self) -> any:
        return self.next
    def get_item(self) -> any:
        return self.item

class StackLinkedListImpl:
    def __init__(self, stack_size: int) -> None:
        self.stack_size = stack_size
        self.linked_list = None
        self.current_stack_size = 0

    def pop(self) -> any:
        if self.size() > 0 and self.linked_list != None:
            li = self.linked_list.get_item()
            self.linked_list = self.linked_list.get_next()
            self.current_stack_size -= 1
            return li
        return None
    
    def push(self, item: any) -> None:
        if not self.is_full():
            if self.linked_list != None:
                current_linked_list = self.linked_list
                li = LinkedListItem(item)
                li.set_next(current_linked_list)
                self.linked_list = li
            else:
                self.linked_list = LinkedListItem(item)
            
            self.current_stack_size += 1

    def size(self) -> int:
        return self.current_stack_size
    
    def is_full(self) -> bool:
        return self.current_stack_size >= self.stack_size
    
    def is_empty(self) -> bool:
        return self.size() == 0
    
    def peek(self) -> any:
        if self.size() > 0 and self.linked_list != None:
            return self.linked_list.get_item()
        return None
