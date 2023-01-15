import {useContext} from "react";
import TasksContext from "../../context/productsContext";


const TaskItem=(props)=>{

    const tasksCtx=useContext(TasksContext);
    const onIstrintiClick=()=>{
        tasksCtx.trintiTask(props.task.key);
        //props.onTrintiTask(props.task.key);
    };



    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-md-6">{props.task.pavadinimas}</div>
                <div className="col-md-3">{props.task.tipas} / {tasksCtx.tasks.length}</div>
                <div className="col-md-3">
                    <button className="btn btn-danger" onClick={onIstrintiClick}>Istrinti</button>
                </div>
            </div>
        </li>
    )
};

export default TaskItem;