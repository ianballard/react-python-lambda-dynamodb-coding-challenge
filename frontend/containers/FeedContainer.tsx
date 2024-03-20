import React from "react";
import List from "@/components/ui/List";
import Container from "@/components/ui/Container";


const FeedContainer = () => {

    return <Container>
        <List
            loading={false}
            error={null}
            fetchMore={() => {
            }}
            lastEvaluatedKey={null}>
            Todo: Implement
        </List>
    </Container>;
};

export default FeedContainer;
