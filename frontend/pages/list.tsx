import React from "react";
import type {NextPage} from "next";
import AllTodoListsContainer from "@/containers/AllTodoListsContainer";
import "../app/globals.css";

const Lists: NextPage = () => {
    return (
        <div className={"pt-5"}>
            <AllTodoListsContainer/>
        </div>
    );
};

export default Lists;
