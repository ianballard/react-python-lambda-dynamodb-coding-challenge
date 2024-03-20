import {fetchApi} from "./utils";
import {TodoItem, TodoListApiResponse, TodoListItem, TodoListsApiResponse} from "@/types/types";

export const createTodoList = (todoListDetails: Record<string, any>): Promise<TodoListItem> => {
    return fetchApi("todo-list", {
        body: todoListDetails,
        method: "POST"
    });
};

export const fetchAllTodoLists = (lastEvaluatedKey: string | null): Promise<TodoListsApiResponse> => {
    const queryParams = {
        limit: 3,
    };
    if (lastEvaluatedKey) {
        // @ts-ignore
        queryParams["nextToken"] = lastEvaluatedKey;
    }
    return fetchApi("todo-list", {
        queryParams
    });
};

export const fetchTodoItemsByListId = (listId: string, lastEvaluatedKey: string | null): Promise<TodoListApiResponse> => {
    const queryParams = {
        limit: 3
    };
    if (lastEvaluatedKey) {
        // @ts-ignore
        queryParams["nextToken"] = lastEvaluatedKey;
    }
    return fetchApi(`todo-list/${listId}/todo`, {
        queryParams
    });
};

export const createTodoItem = (listId: string, todoDetails: Record<string, any>): Promise<TodoItem> => {
    return fetchApi(`todo-list/${listId}/todo`, {
        body: todoDetails,
        method: "POST"
    });
};

export const updateTodoItem = (listId: string, todoId: string, updates: Record<string, any>): Promise<any> => {
    return fetchApi(`todo-list/${listId}/todo/${todoId}`, {
        body: updates,
        method: "PATCH"
    });
};