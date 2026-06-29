import tasks  from "../data/tasks";
import TaskList from "../components/TaskList";
import SearchBar from "../components/SearchBar";

export default function TasksMenu() {
    return (
        <div>
            <h1>Tasks</h1>

            <SearchBar />

            <TaskList tasks={tasks} />
        </div>
    );
}