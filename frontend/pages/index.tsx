import React from "react";
import type {NextPage} from "next";
import AllTodoListsContainer from "@/containers/AllTodoListsContainer";
import "../app/globals.css";

const Index: NextPage = () => {
    return (
        <div className={"pt-5"}>
            <AllTodoListsContainer/>
        </div>
    );
};

export default Index;
