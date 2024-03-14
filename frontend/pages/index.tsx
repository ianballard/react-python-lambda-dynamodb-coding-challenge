import type {NextPage} from 'next';
import TodoList from '../components/TodoLists';
import '../app/globals.css'

const Index: NextPage = () => {
    return (
        <div className={'pt-5'}>
            <TodoList/>
        </div>
    );
};

export default Index;
