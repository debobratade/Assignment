import React, { useEffect, useState } from 'react'

function TaskCompleted() {
    const [data, setData] = useState([]);
 
    useEffect(() => {
      getdata();
    }, []);
  
    const getdata = async () => {
      let result = await fetch("http://localhost:5000/gettasks",{
  
  
    })
      result = await result.json();
      setData(result.data);
    };
       console.warn("data", data)
    return (
      <>
  
      <h2>Tasks In Progress</h2>
    
      <div className="product-list">
  
        <ul>
          <li>SL.NO.</li>
          <li>TASK NAME</li>
          <li>CREATED</li>
          <li>DUE</li>
          <li>ASSIGNEE</li>
          <li>CATEGORY</li>
          <li>STATUS</li>
          <li>JIRA ID</li>
          <li>MOCK-UP</li>
          <li>NOTES</li>
          <li>ACTION</li>
        </ul>
        {
        data.length>0 ? data.map((item, index) => (
         
          <ul key={item._id}>
            <li>{index+1}</li>
            {/* console.log(item.task_name); */}
            <li>{item.task_name}</li>
            <li>{item.created}</li>
            <li>{item.due}</li>
            <li>{item.assignee}</li>
            <li>{item.category}</li>
            <li>{item.status}</li>
            <li>{item.jira_id}</li>
            <li>{item.mock_up}</li>
            <li>{item.notes}</li>
            <li>
              <div className='btndv'> 
              <button className="cart-btn" >EDIT</button>
              <button className="cart-btn" >DONE</button>
              </div>
            </li>
          </ul>
        ))
        : <h1>No result found</h1>
        }
      </div>
      </>
    )
}

export default TaskCompleted
