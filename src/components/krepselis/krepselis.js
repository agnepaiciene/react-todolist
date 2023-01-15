
import ToDoList from "./inner/todoList";
import AddTask from "./inner/addtask";
import Card from "../ui/card";
import {useState, useEffect} from "react";
// import todoList from "./inner/todoList";
// import Filter from "./inner/filter";


const Krepselis=(props)=>{

    let initTasks=[
        // {pavadinimas: "Isnesti siuksles", tipas: "Skubus"},
        // {pavadinimas: "Isvalyti kambarius", tipas: "Rutininis"}
    ]

    useEffect(()=>{
        const data=localStorage.getItem("tasks")
        if(data!=null) {
            initTasks = JSON.parse(data);
            setTasks(initTasks);
            console.log("Uzkraunu uzduotis");


        }

    }, []);


    const [tasks, setTasks]=useState(initTasks);

    // const [tasksTipas, setTasksTipas]=useState(2);



    const issaugotiTasks=()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    const addTask=(task)=>{
        tasks.push(task);
        issaugotiTasks();
        setTasks(Array.from(tasks));

        console.log("Uzduotis gauta ir prideta");
        console.log(task);
        console.log(tasks);
    }

    const trintiTask=(index)=>{
        tasks.splice(index, 1);
        issaugotiTasks();
        setTasks(Array.from(tasks));
        console.log(tasks);
        console.log("Triname:" +index);

    };

    return(
        <div className="row mt-5">
            <div className="col-md-6">
                <AddTask onAddTask={addTask}></AddTask>
            </div>

            <div className="col-md-6">

                <ToDoList tasks={tasks} onTrintiTask={trintiTask}></ToDoList>

            </div>
            {/*<div className="col-md-12 mt-3">*/}
            {/*    <Card title="Užduočių kiekis">*/}
            {/*      <div className="alert alert-danger" tasks={tasks.length}></div>*/}

            {/*    </Card>*/}

            {/*</div>*/}
        </div>
    )
}

export default  Krepselis;