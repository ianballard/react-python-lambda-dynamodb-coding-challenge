import {TodoItem, TodoListItem} from "@/types/todoTypes";

const API_BASE_URL = 'http://127.0.0.1:2999';

export interface TodoListsApiResponse {
    items: TodoListItem[];
    last_evaluated_key: string | null;
}

export const getTodoLists = async (): Promise<TodoListsApiResponse> => {
    const response = await fetch(`${API_BASE_URL}/todo-list`);
    return response.json();
};

export interface TodoListApiResponse {
    items: TodoItem[];
    last_evaluated_key: string | null;
}

export const getTodoList = async (listId: string, lastEvaluatedKey: string | null): Promise<TodoListApiResponse> => {
    const response = await fetch(`${API_BASE_URL}/todo-list/${listId}/todo`);
    return response.json();
};
