import React, {useState} from "react";
import {useAllTodoLists} from "@/hooks/useAllTodoLists";
import TodoListItem from "@/components/TodoListItem";
import List from "@/components/ui/List";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {createTodoList} from "@/api";


const AllTodoListsContainer = () => {

    const {
        items,
        lastEvaluatedKey,
        loading,
        error,
        fetchMore,
        setItems
    } = useAllTodoLists();
    const [newTodoListName, seNewTodoListName] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!newTodoListName.trim()) {
            return;
        }
        const todoListDetails = {name: newTodoListName};
        const todoList = await createTodoList(todoListDetails);
        setItems(currentItems => [...currentItems, ...[todoList]]);
        seNewTodoListName("");
    };

    return <Container>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTodoListName}
                onChange={(e) => seNewTodoListName(e.target.value)}
                placeholder="Add new todo list"
                aria-label="New todo list name"
                className={"mr-2"}
            />
            <Button value='Add Todo List' type={"submit"}/>
        </form>
        <List loading={loading}
              error={error}
              fetchMore={fetchMore}
              lastEvaluatedKey={lastEvaluatedKey}>
            {items.map(list => <li key={list.sk}><TodoListItem list={list}/></li>)}
        </List>
    </Container>;
};

export default AllTodoListsContainer;
