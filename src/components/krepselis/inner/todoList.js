
import Card from "../../ui/card";
import TaskItem from "./taskitem";
import TasksContext from "../../context/productsContext";
import {useContext} from "react";


const ToDoList=(props)=>{

    const tasksCtx=useContext(TasksContext);

    let todoList=[];
    tasksCtx.tasks.forEach((task, index)=>{
        todoList.push(
            (<TaskItem key={index} task={ {...task, key:index} } onTrintiTask={props.onTrintiTask}></TaskItem>)
        );
    })

    return(

        <Card className="fw-bold"
              title="Užduočių sąrašas">
                <div className="m-2"></div>
                        <ul className="list-group m-2">
                            {todoList}
                        </ul>
            { tasksCtx.tasks.length===0 ? <div className="alert alert-info">Užduočių nėra</div> : " "}
        </Card>


    );

}
export  default ToDoList;