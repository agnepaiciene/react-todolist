
import ToDoList from "./inner/todoList";
import AddTask from "./inner/addtask";
// import Card from "../ui/card";
import {useState, useEffect, useContext} from "react";
import TasksContext from "../context/productsContext";

// // import todoList from "./inner/todoList";
// // import Filter from "./inner/filter";

const Krepselis=(props)=>{


    return(
        <div className="row mt-5">
            <div className="col-md-6">
                <AddTask></AddTask>
            </div>

            <div className="col-md-6">

                <ToDoList></ToDoList>

            </div>

        </div>
    )
}

export default  Krepselis;
