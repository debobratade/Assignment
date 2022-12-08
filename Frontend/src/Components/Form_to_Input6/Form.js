import react, { useState } from 'react'
import './Form.css'

const Form=()=>{

    const[task_name, setTaskname]= useState('')
    const[created, setCreated]=useState('')
    const[due, setDue]=useState('')
    const[assignee, setAssignee]=useState('')
    const[category, setCategory]=useState('')
    const[status, setStatus]=useState('')
    const[jira_id, setJiraid]=useState('')
    const[mock_up, setMockup]=useState('')
    const[notes, setNotes]=useState('')


    const submit=async()=>{
        let result= await fetch('http://localhost:5000/taskinprogress', {
            method: 'post',
            body: JSON.stringify({ task_name, created, due, assignee, category, status, jira_id, mock_up, notes }),
          
             
            headers:{
                'Content-Type':'application/json',
             
            }
        })
       
      
         result=await result.json()
         console.log(result)
    }
    return(
       <div className='Main_Form'>
        <div className='first_row'>
          <input className="firstBox" type='text'  value={task_name} onChange={(e)=>setTaskname(e.target.value)}  placeholder="    Task Name"/>
          <select className="firstBox" onChange={(e)=>setCategory(e.target.value)} >
                <option>Select Category</option>
                <option>Nap Bug Task</option>
                <option>Nap Dev</option>
                <option>New Project</option>
                <option>HP Update</option>
                </select>
          <input className="first3Box" type='text' value={jira_id} onChange={(e)=>setJiraid(e.target.value)}  placeholder="    Jira ID"/>
        </div>
        <div className='second_row'>
        <select className="secondBox" onChange={(e)=>setAssignee(e.target.value)} >
                <option>Select Assignee</option>
                <option>Bibhu</option>
                <option>Tanzil</option>
                <option>Ram</option>
                <option>Sham</option>
                </select>
           <select className="secondBox" onChange={(e)=>setStatus(e.target.value)}>
                <option>Select Status</option>
                <option>In QC</option>
                <option>In Deployment</option>
                <option>On Hold</option>
                <option>Completed</option>
                </select>
          <input className="secondBox" type='Date' onChange={(e)=>setCreated(e.target.value)} />
          <input className="secondBox" type='Date' onChange={(e)=>setDue(e.target.value)} />
        </div>
        <div className='secondLast_Row'>
          <input className="secondLastBox" type='text' value={mock_up} onChange={(e)=>setMockup(e.target.value)}   placeholder="    Mock UP"/>
        </div>
        <div className='Last_Row' >
          <input className="lastBox" type='text' value={notes} onChange={(e)=>setNotes(e.target.value)}   placeholder="    Other Comments "/>
        </div>
        <button className='btn_Form' onClick={submit}>SUBMIT</button>
       </div>
    )
}

export default Form