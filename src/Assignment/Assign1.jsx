import React from "react"; 

function Assign1(props){
  return(
    <>
 
    <div id="box">
        <div className="img">
            <img src={props.image}></img>
        </div>
    <h5 >Name :- {props.title}</h5>
    <h5>Age :- {props.age} </h5>
    <h5>career :- {props.career}</h5>
  
    </div>
    
    </>
  )
}

export default Assign1;