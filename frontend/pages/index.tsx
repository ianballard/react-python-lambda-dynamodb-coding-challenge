import type { NextPage } from 'next';
import TodoList from '../components/TodoLists';

const Index: NextPage = () => {
    return (
        <div>
            <h1>Todo Lists</h1>
            <TodoList />
        </div>
    );
};

export default Index;
