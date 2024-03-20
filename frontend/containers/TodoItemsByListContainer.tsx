import React from "react";
import {useTodoItemsByList} from "@/hooks/useTodoItemsByList";
import List from "@/components/ui/List";
import TodoItem from "@/components/TodoItem";

interface TodoListContainerProps {
    listId: string | null;
}


const TodoItemsByListContainer: React.FC<TodoListContainerProps> = ({listId}) => {
    const {
        items,
        lastEvaluatedKey,
        loading,
        error,
        fetchMore
    } = useTodoItemsByList(listId as string);

    return <List
        loading={loading}
        error={error}
        fetchMore={fetchMore}
        lastEvaluatedKey={lastEvaluatedKey}>
        {items.map((item) => <li key={item.sk}><TodoItem item={item}/></li>)}
    </List>;
};

export default TodoItemsByListContainer;
