import React from "react";
import {useRouter} from "next/router";
import {NextPage} from "next";
import TodoItemsByListContainer from "@/containers/TodoItemsByListContainer";
import "../../app/globals.css";

const TodoListPage: NextPage = () => {

    const router = useRouter();
    const {listId} = router.query;

    return (
        <div className={"pt-5"}>
            <TodoItemsByListContainer listId={listId as string}/>
        </div>
    );
};

export default TodoListPage;
