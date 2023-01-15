
import React, {useEffect, useState} from "react";

const TasksContext=React.createContext({
    tasks:[
       // {pavadinimas: "Kazkas", tipas:"kazkoks"}

    ],
    addTask:(task)=>{},
    trintiTask:(index)=>{}
});

export const TaskContextProvider=(props)=>{
    const [tasks, setTasks]=useState([]);

    const issaugotiTasks=()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    const addTask=(task)=>{
        tasks.push(task);
        issaugotiTasks();
        setTasks(Array.from(tasks));

    }

    const trintiTask=(index)=>{
        tasks.splice(index, 1);
        issaugotiTasks();
        setTasks(Array.from(tasks));
    };

    useEffect(()=>{
        const data=localStorage.getItem("tasks")
        if(data!=null) {
          const  initTasks = JSON.parse(data);
            setTasks(initTasks);

        }
    }, []);

    return(

            <TasksContext.Provider value={
                {
                tasks:tasks,
                addTask:addTask,
                trintiTask:trintiTask
            }

            }>
                {props.children}
            </TasksContext.Provider>

    );
}
export default TasksContext;