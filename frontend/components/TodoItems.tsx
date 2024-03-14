import React from 'react';
import {TodoItem} from "@/types/todoTypes";
import '../app/globals.css'


interface TodoItemsProps {
    items: TodoItem[];
}

const TodoItems: React.FC<TodoItemsProps> = ({items}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <ul className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-md">
                {items.map((item) => {
                        const id = item.sk.split("#")[1]
                        return <li key={id} className="w-full">
                            <a href={`#`} className="flex items-center p-3 hover:bg-gray-100">
                                <span className="ml-2 text-sm font-medium text-black">{item.title}</span>
                            </a>
                        </li>
                    }
                )}
            </ul>
        </div>
    );
};

export default TodoItems;
