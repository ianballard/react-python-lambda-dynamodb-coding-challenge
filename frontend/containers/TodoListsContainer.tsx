import React from 'react';
import TodoListItemsComponent from '../components/TodoListItemsComponent';
import {useTodoLists} from "@/hooks/useTodoLists";


const TodoListsContainer = () => {
    const {
        items,
        lastEvaluatedKey,
        loading,
        error,
        fetchMore
    } = useTodoLists();

    return <TodoListItemsComponent
        lists={items}
        loading={loading}
        error={error}
        fetchMore={fetchMore}
        lastEvaluatedKey={lastEvaluatedKey}
    />;
};

export default TodoListsContainer;
