import React from "react";
import {useRouter} from "next/router";
import {TodoListItem as TodoList} from "@/types/types";


interface TodoListItemComponentProps {
    list: TodoList;
}

const TodoListItem: React.FC<TodoListItemComponentProps> = ({list}) => {
    const router = useRouter();

    const handleItemClick = (id: string) => {
        router.push(`/list/${id}`);
    };

    const id = list.sk.split("#")[1];
    return (
        <div className="w-full" onClick={() => handleItemClick(id)} role={"button"}>
            <span className="flex items-center p-3 hover:bg-gray-100 text-sm font-medium text-black">
                {list.name}
            </span>
        </div>
    );
};

export default TodoListItem;