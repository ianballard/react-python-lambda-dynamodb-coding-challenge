import React from 'react';
import {TodoItem} from "@/types/todoTypes";


interface TodoItemsProps {
    items: TodoItem[];
}

const TodoItems: React.FC<TodoItemsProps> = ({ items }) => {
    return (
        <div>
            {items.map(item => (
                <div key={item.sk}>{item.title}</div>
            ))}
        </div>
    );
};

export default TodoItems;
