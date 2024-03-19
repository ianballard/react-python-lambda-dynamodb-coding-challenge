import React from 'react';
import {useTodoList} from "@/hooks/useTodoList";
import TodoItemsComponent from "@/components/TodoItemsComponent";

interface TodoListContainerProps {
    listId: string | null;
}


const TodoListContainer: React.FC<TodoListContainerProps> = ({listId}) => {

    const {
        items,
        lastEvaluatedKey,
        loading,
        error,
        fetchMore
    } = useTodoList(listId as string);

    return <TodoItemsComponent
        items={items}
        loading={loading}
        error={error}
        fetchMore={fetchMore}
        lastEvaluatedKey={lastEvaluatedKey}
    />;
};

export default TodoListContainer;
