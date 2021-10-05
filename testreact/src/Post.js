import React , {useReducer, useEffect} from 'react';
import { PostReducer} from './PostReducer';
import axios from 'axios';
import {Container} from "react-bootstrap";
import "./Post.css";
import svc1 from "./component/svc1.jpg";
import svc2 from "./component/svc2.jfif";
import rounded from "./component/rounded.jfif"

const initialState ={
   
    loading: true,
    post: {},
    error: ""

}

const Post = () => {
    
  const [state , dispatch]  = useReducer (PostReducer,initialState)

  useEffect(() => {
      /* fake api used for testing */

     axios .get("https://jsonplaceholder.typicode.com/posts/1")
     .then( response => {
         dispatch({
             type: "FETCH_SUCCESS",
             payload: response.data,

         }) }
     )
     .catch( error => {
        dispatch({
            type: "FETCH_ERROR"   
        }
       )
    })
    
  }, [])
    return (
        <div>
          <section>
            <Container>
           
            
            <div className="row my-5 mt-3 pb-3">
            <div className="col-md-3 col-10 mx-auto ">
            
          <div className="heading_review pt-5">
              What Clients are saying about us!
          </div>                   
        <br/>
        {state.loading ? "loading" : state.post.title}
        {state.error ? state.error : null}
        {state.loading ? "loading" : state.post.body}
      </div>
        
        
        <div className="col-md-3 col-10 mx-auto pt-5 ">
       
       <div className="a-box">
       <div className="round pt-3 pb-2">
  <img src={rounded} className="round mx-3" alt="..." height="100px" width="100px"/>
  <div class="card-body">
  <div className="color">
    <p class="card-text"> {state.loading ? "loading" : state.post.body}</p>
  
  </div> 
  </div>
   </div>

</div>
            </div>
            <div className="col-md-3 col-10 mx-auto pt-5 ">
       
            <div className="a-box">
            <div className="round pt-3 pb-2">
  <img src={svc1} className="round mx-3" alt="..." height="100px" width="100px"/></div>
  <div class="card-body">
  <div className="color">
    <p class="card-text"> {state.loading ? "loading" : state.post.body}</p>
    </div>
  </div>
</div>

           </div>
           <div className="col-md-3 col-10 mx-auto pt-5 ">
           <div className="a-box">
           <div className="round pt-3 pb-2">
  <img src={svc2} className="round mx-3" alt="..." height="100px" width="100px"/>
  <div class="card-body">
  
   <div className="color"> <p class="card-text"> {state.loading ? "loading" : state.post.body}</p>
    </div>
  </div>
</div>
           </div>
        
        </div>
       
        </div>
        
        </Container>
        </section></div> 
    )
}

export default Post
