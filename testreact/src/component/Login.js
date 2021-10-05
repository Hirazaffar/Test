import React, {useState} from 'react';
import { Jumbotron ,Form , Button } from 'react-bootstrap';
import{Paper, TextField, Typography } from '@material-ui/core';


import Product from './Product'

                const Login = () => {

                   
                    

                    const [data , setData] = useState(
                        {  email: "",
                            password: "",

                        }  );


                        const InputEvent = (event) => {
                            const {name, value} = event.target;
                            setData((preVal) =>{
                                return{
                                    ...preVal,
                                    [name]:value,
                                }

                            })
                        }

                    const formsubmit = (e) => {
                        e.preventDefault();

                    }

                    return (
                        <>
                    
     <Jumbotron className="jumbotron__box">
  
             <div className="my-5"> </div>
                <h1 className="text-center"> Login Page </h1>
                        
                    <div className="container contact_div"> 

                        <div className="row">
                     <div className="col-md-6 col-10 mx-auto">
                        
                        <Form onSubmit={formsubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Label>Email address</Form.Label>
                               <Form.Control type="email" 
                                   Name="email"
                                   value={data.email}
                                   onChange={InputEvent}
                                   placeholder="Enter email" />
                   
                           <Form.Text className="text-muted pt-2">
                    
                            </Form.Text>
                        </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" 
                       Name="password"
                      value={data.password}
                      onChange={InputEvent}
                      placeholder="Password" />
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                        
                        
                        </div>
                            </div>
                        </div>
                     
                        </Jumbotron>

                      
                        
                        </>
                    )
                }

                export default Login
