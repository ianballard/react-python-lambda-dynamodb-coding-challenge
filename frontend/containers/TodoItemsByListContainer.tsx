import React, {useState} from "react";
import {useTodoItemsByList} from "@/hooks/useTodoItemsByList";
import List from "@/components/ui/List";
import {TodoItem as Todo} from "@/types/types";
import TodoItem from "@/components/TodoItem";
import {createTodoItem, updateTodoItem} from "@/api";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

interface TodoListContainerProps {
    listId: string | null;
}

const TodoItemsByListContainer: React.FC<TodoListContainerProps> = ({listId}) => {

    const {
        items,
        lastEvaluatedKey,
        loading,
        error,
        fetchMore,
        setItems
    } = useTodoItemsByList(listId as string);
    const [newTodoTitle, setNewTodoTitle] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!newTodoTitle.trim()) {
            return;
        }
        const todoDetails = {title: newTodoTitle};
        const todo = await createTodoItem(listId as string, todoDetails);
        setItems(currentItems => [...currentItems, ...[todo]]);
        setNewTodoTitle("");
    };

    const markComplete = async (todo: Todo) => {
        const todoId = todo.sk.split("#")[1];
        todo.completed = !todo.completed;
        const updates = {completed: todo.completed};
        await updateTodoItem(listId as string, todoId, updates);
    };

    return <Container>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
                placeholder="Add new todo item"
                aria-label="New todo item title"
                className={"mr-2"}
            />
            <Button value='Add Todo' type={"submit"}/>
        </form>
        <List
            loading={loading}
            error={error}
            fetchMore={fetchMore}
            lastEvaluatedKey={lastEvaluatedKey}>
            {items.map((item) => <li key={item.sk}><TodoItem item={item} markComplete={markComplete}/></li>)}
        </List>
    </Container>;
};

export default TodoItemsByListContainer;
