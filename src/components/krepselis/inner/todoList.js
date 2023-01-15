
import Card from "../../ui/card";
import TaskItem from "./taskitem";


const ToDoList=(props)=>{

    let todoList=[];
    props.tasks.forEach((task, index)=>{

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
        </Card>


    );

}
export  default ToDoList;