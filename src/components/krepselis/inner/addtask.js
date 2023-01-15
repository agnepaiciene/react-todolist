
import {useContext, useState} from "react";
import Card from "../../ui/card";
import TasksContext from "../../context/productsContext";
const AddTask=(props)=>{

    const initValue={
        pavadinimas:"",
        tipas:""
    }
    const [task, setTask]=useState(initValue);
    const [pavadinimasTouched, setPavadinimasTouched]=useState(false);
    const tasksCtx=useContext(TasksContext);
    const isPavadinimasInValid=task.pavadinimas=="";

    const  onFormSubmit=(event)=>{
        event.preventDefault();
        if (isPavadinimasInValid) return;
        tasksCtx.addTask(task);
        //props.onAddTask(task);
        setTask(initValue);
        setPavadinimasTouched(false);

    }

    const onPavadinimasChange=(event)=>{
        setTask({
            ...task,
            pavadinimas: event.target.value,
        });
    }

    const onTipasChange=(event)=>{
        setTask({
            ...task,
          tipas: event.target.value,
        });
    }


    return (
        <Card title="Pridėti naują užduotį">
            <form onSubmit={onFormSubmit}>
                <div className="mb-3 ms-2 me-2">
                    <label className="form-label fw-bold">Užduoties pavadinimas</label>
                    <input type="text" className="form-control" onBlur={ ()=>setPavadinimasTouched(true) } onChange={onPavadinimasChange} value={task.pavadinimas}/>
                    { isPavadinimasInValid && pavadinimasTouched? <div className="alert alert-danger">Pavadinimas neteisingas</div>:" "}
                </div>
                <div className="mb-3 ms-2 me-2">
                    <label className="form-label fw-bold ">Užduoties tipas</label>
                    <br></br>
                    <select
                        list="category-list"
                        id="category-list"
                        onChange={onTipasChange}
                        value={task.tipas}
                    >
                        <option value="">Pasirinkite užduoties tipą</option>
                        <option value="Skubus">Skubus</option>
                        <option value="Ypač skubus">Ypač skubus</option>
                        <option value="Neskubus">Neskubus</option>
                        <option value="Rutininis">Rutininis</option>
                    </select>
                    <input type="text" className="form-control mt-2" onChange={onTipasChange} value={task.tipas}/>

                </div>
                <button className="btn btn-success m-2">Pridėti užduotį</button>
            </form>
        </Card>

    )




}
export  default AddTask;