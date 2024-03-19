import type {NextPage} from 'next';
import TodoListsContainer from "@/containers/TodoListsContainer";
import "../app/globals.css";

const Index: NextPage = () => {
    return (
        <div className={'pt-5'}>
            <TodoListsContainer/>
        </div>
    );
};

export default Index;
