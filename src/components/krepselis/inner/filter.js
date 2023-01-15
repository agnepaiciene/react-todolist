// import {useEffect, useMemo, useState} from "react";
// import ToDoList from "./todoList";
// import TodoList from "./todoList";
// const Filter=(props)=>{
//
//     const box=TodoList;
//     const list1 = [];
//     for (let i = 0; i < box.length; i++) {
//         list1.push(<TodoList todoList={box[i]}></TodoList>);
//     }
//     console.log(list1);
//
//     const [taskList, setTaskList] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState();
//
//     useEffect(() => {
//         setTaskList(ToDoList);
//     }, []);
//     function getFilteredList() {
//         if (!selectedCategory) {
//             return taskList;
//         }
//         return taskList.filter((ToDoList) => ToDoList.value === selectedCategory);
//     }
//     console.log(taskList);
//
//     let filteredlist1 = useMemo(getFilteredList, [selectedCategory, taskList]);
//     console.log(filteredlist1);
//
//     const list2 = [];
//     for (let i = 0; i < filteredlist1.length; i++) {
//         list2.push(<ToDoList todoList={filteredlist1[i]}></ToDoList>);
//     }
//     console.log(list2);
//
//
//
//
//     return(
//     // <div className="filter-container d-flex flex-row justify-content-between" >
//     //  <div className=" col-md-6 mb-3 fw-bold ">Filtruoti pagal kategoriją:</div>
//     //        <div className=" col-md-6 mb-3 ">
//
//
//
//
//     );
//
//
//
//
//
//
//
// }
// export default Filter;