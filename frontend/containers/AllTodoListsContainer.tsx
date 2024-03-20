import React from "react";
import {useAllTodoLists} from "@/hooks/useAllTodoLists";
import TodoListItem from "@/components/TodoListItem";
import List from "@/components/ui/List";


const AllTodoListsContainer = () => {
    const {
        items,
        lastEvaluatedKey,
        loading,
        error,
        fetchMore
    } = useAllTodoLists();

    return <List loading={loading}
                 error={error}
                 fetchMore={fetchMore}
                 lastEvaluatedKey={lastEvaluatedKey}>
        {items.map(list => <li key={list.sk}><TodoListItem list={list}/></li>)}
    </List>;
};

export default AllTodoListsContainer;
