import React from "react";
import type {NextPage} from "next";
import "../app/globals.css";
import FeedContainer from "@/containers/FeedContainer";

const Feed: NextPage = () => {
    return (
        <div className={"pt-5"}>
            <FeedContainer/>
        </div>
    );
};

export default Feed;
