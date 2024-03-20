import {TodoItem} from "@/types/types";
import React from "react";

interface TodoItemComponentProps {
    item: TodoItem;
    markComplete: any;
}

const TodoItem: React.FC<TodoItemComponentProps> = ({item, markComplete}) => {
    const handleItemClick = (item: TodoItem) => {
        markComplete(item);
    };

    const checked = item.completed ? true : undefined;
    
    return (
        <div className={"flex items-center p-3 hover:bg-gray-100"}>
            <div className="text-sm font-medium text-black mr-2">
                {item.title}
            </div>
            <input type={"checkbox"} onClick={() => handleItemClick(item)} defaultChecked={checked}/>
        </div>
    );
};

export default TodoItem;