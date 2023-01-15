const Card=(props)=>{
    return(
        <div className="card">
            <div className="card-header fw-bold">{props.title}</div>
            <div className="card-body m-1"></div>
            {props.children}
        </div>
    )
}
export default Card;