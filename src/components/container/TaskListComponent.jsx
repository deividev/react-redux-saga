import React from 'react';
import { LEVELS } from '../../models/enums/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/TaskComponent';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    return (
        <div>
            <div>
                <h1> Your Tasks: </h1> 
            </div>
            {/* TODO Aplicar un map para renderizar la lista de tareas */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;