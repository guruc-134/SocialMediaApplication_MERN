import React , {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
// @#%
import FileBase from 'react-file-base64'
import useStyles from './styles';
import {useSelector} from 'react-redux'
import { createPost,updatePost } from '../../actions/posts';
function Form({currentId,setCurrentId}) {
  const post = useSelector((state)=> currentId ? state.posts.find((p)=> p._id === currentId ): null )
  const classes = useStyles()
  const dispatch = useDispatch()
  const [postData, setpostData] = useState({creator:"", title:"", message:"",tags:"",selectedFile:""});
  
  const handleSubmit = (e)=>{
    e.preventDefault() 

    // basically here this logic will tell, if we have selected to 
    // edit any post or not, if we selected then our currentId will not be null
    // so then we are technically updating an alreasy existing post
    if(currentId)
    {
      dispatch(updatePost(currentId,postData))
      clear()
    }
    else{
      dispatch(createPost(postData))
      clear() 
    }
  }
  const clear = ()=>{
      setCurrentId(0)
      setpostData({creator:"", title:"", message:"",tags:"",selectedFile:""})
  }

  useEffect(() => {
    if(post){
      setpostData(post)
    }
  }, [post]);
  return (
    <Paper className={classes.paper} >

      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6"> Create a memory</Typography>
        <TextField name="creator" variant="outlined"
        label="Creator" fullWidth
        value={postData.creator}
        onChange={(e)=> setpostData({...postData,creator:e.target.value})} />

        <TextField name="title" variant="outlined"
        label="Title" fullWidth
        value={postData.title}
        onChange={(e)=> setpostData({...postData,title:e.target.value})} />

        <TextField name="message" variant="outlined"
        label="Message" fullWidth
        value={postData.message}
        onChange={(e)=> setpostData({...postData,message:e.target.value})} />

        <TextField name="tags" variant="outlined"
        label="Tags" fullWidth
        value={postData.tags}
        onChange={(e)=> setpostData({...postData,tags:e.target.value})} />

        <div className={classes.fileInput}>
          <FileBase 
            type="file"
            multiple={false}
            onDone={({base64})=> setpostData({...postData,selectedFile:base64})}
          />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary"
        size="large" type="submit" fullWidth>
          Submit 
        </Button>
        <Button variant="contained" color="secondary"
        size="small" onClick = {clear} fullWidth>
         Clear
        </Button>
      </form>

    </Paper>

  );
}

export default Form;
