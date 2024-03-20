import {TodoItem} from "@/types/types";
import React from "react";

interface TodoItemComponentProps {
    item: TodoItem;
}

const TodoItem: React.FC<TodoItemComponentProps> = ({item}) => {
    const handleItemClick = (id: string) => {
        console.log(id);
    };

    const id = item.sk.split("#")[1];
    return (
        <div className={"flex items-center p-3 hover:bg-gray-100"}>
            <div className="text-sm font-medium text-black mr-2">
                {item.title}
            </div>
            <input type={"checkbox"} onClick={() => handleItemClick(id)}/>
        </div>
    );
};

export default TodoItem;