import React, {useState} from 'react'

function MyPractice3(){
    let [isLit,setLit]=useState(true);
    return(
        <div>
            My room is : {isLit? "lit":"dark"}
            <br/>
            <button onClick={()=>{
                setLit(!isLit);
            }}> Toggle Light State </button>
        </div>
    )
}
export default MyPractice3;