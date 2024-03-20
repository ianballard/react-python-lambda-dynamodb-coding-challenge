export interface TodoAppRecordKey {
    pk: string;
    sk: string;
}

export interface TodoListItem {
    pk: string;
    sk: string;
    name: string;
}

export interface TodoListsApiResponse {
    items: TodoListItem[];
    last_evaluated_key: TodoAppRecordKey | null;
}


export interface TodoItem {
    pk: string;
    sk: string;
    title: string;
    completed: boolean;
}


export interface TodoListApiResponse {
    items: TodoItem[];
    last_evaluated_key: TodoAppRecordKey | null;
}
