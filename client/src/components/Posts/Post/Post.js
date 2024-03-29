import React from 'react';
import {Card, CardActions, CardContent, CardMedia,Button, Typography} from "@material-ui/core"

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import { useDispatch } from 'react-redux';
import moment from "moment"
import useStyles from './styles';
import {deletePost} from "../../../actions/posts"

function Post({post,setCurrentId}) {
  const dispatch = useDispatch()
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardMedia className = {classes.media} image={post.selectedFile}
      title={post.title}/>
      <div className={classes.overlay}>
        <Typography variant="h6">
          {post.creator}
        </Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{color:"white"}} size="small" 
          onClick={()=>{setCurrentId(post._id)}} >
          <MoreHorizIcon fontSize='default'/>
        </Button>
      </div>
      <div  className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag)=> `#${tag} `)}
        </Typography>

      </div>
      <CardContent>
      <Typography className={classes.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{}}>
          <ThumbUpAltIcon fontSize="small"/>
            Like {post.likecount}
        </Button>
        <Button size="small" color="primary" onClick={()=>{dispatch(deletePost(post._id))}}>
          <DeleteIcon fontSize="small"
          />
            Delete 
        </Button>
      </CardActions>
      </Card>
  );
}

export default Post;