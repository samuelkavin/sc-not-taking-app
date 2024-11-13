import { TasksProvider } from './components/tasks/TasksContext';
import Sidebar from './components/sidebar';
import './App.css';

function App() {
    return (
        <div className="App">
            <TasksProvider>
                <Sidebar />
            </TasksProvider>
        </div>
    );
}

export default App;
