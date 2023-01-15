

const TaskItem=(props)=>{

    const onIstrintiClick=()=>{
        props.onTrintiTask(props.task.key);
    };

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-md-6">{props.task.pavadinimas}</div>
                <div className="col-md-3">{props.task.tipas}</div>
                <div className="col-md-3">
                    <button className="btn btn-danger" onClick={onIstrintiClick}>Istrinti</button>
                </div>
            </div>
        </li>
    )
};

export default TaskItem;