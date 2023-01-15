import TasksContext from "./context/productsContext";
import {useContext} from "react";
const Footer=()=>{

    const tasksCtx=useContext(TasksContext);

    return(
        <div className="col-md-12">
            <div className="alert alert-danger">Užduočių sąraše yra: { tasksCtx.tasks.length }</div>
        </div>
    );
}
export default Footer;