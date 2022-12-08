const mongoose=require('mongoose')

const taskinprogressSchema = new mongoose.Schema({

    task_name: {
      type: String, 
      trim:true
    },
    created: {
      type:String, 
      trim:true
    },
    due: {
      type: String, 
      trim:true
    },
    assignee: {
      type:String, 
    }, 
    category: {
      type:String, 
      trim:true
    }, 
    status: {
      type:String,
      trim:true
    }, 
    jira_id: {
        type:String,
        trim:true
    },
    mock_up: {
        type:String,
        trim:true
    },
    notes: {
        type:String,
        trim:true
    },
   
  }, { timestamp:true})


  module.exports= mongoose.model('TaskInProgress', taskinprogressSchema)