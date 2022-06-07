import * as api  from "../api"

//  ACTION creators are functions which return / dispatch an action...
// that action is an object which has a type and payload

// #@% ---  
export  const getPosts = ()=> async(dispatch) =>{
    try{
        const {data}  = await api.fetchPosts()
        const action = {type:"FETCH_ALL", payload : data}
        dispatch(action)
    }
    catch(error)
    {
        console.log(error);
    }
}


export const createPost = (post)=> async(dispatch)=>{
    try{
        const {data} = await api.createPost(post)
        const action = {type:"CREATE", payload: data}
        dispatch(action)
    }
    catch (error)
    {
        console.log(error);
    }
}


export const updatePost = (id,updatedPost) => async(dispatch)=>{
    try{
        const {data} = await api.updatePost(id,updatedPost)
        const action = {type:"UPDATE",payload:data}
        dispatch(action)
    }
    catch(error)
    {   
        console.log(error)
    }
}