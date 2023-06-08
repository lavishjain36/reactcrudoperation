import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, ButtonToolbar, ListGroup, ListGroupItem,Spinner } from "reactstrap";
import axios from 'axios';
import {Link} from "react-router-dom";
import { HiUserCircle,HiEye, HiTrash, HiPencil} from "react-icons/hi2";

const Dashboard=()=>{
    const [id,setId]=useState(0);
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);
    const [deleteLoading,setDeleteLoading]=useState(false);



    //function to get the data
    const getUser=async ()=>{
        const url="https://6456721c5f9a4f2361445c32.mockapi.io/users";

        try {
            await axios.get(url).then(({data})=>setUsers(data));
            setLoading(false);
            
        } catch (error) {
            console.log(error);
        }
    }

    
    //Delete user 
    const deleteUser=async(userId)=>{
        const url=`https://6456721c5f9a4f2361445c32.mockapi.io/users/${userId}`;
        setDeleteLoading(true);
        setId(userId);
        try {
            await axios.delete(url);
            getUser();
            setDeleteLoading(false);
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getUser();
    })

    return(
       <div className="d-flex my-4 container-fluid col-sm-6 offset-sm-2 offset-lg-4">
        <ListGroup>
            {loading?(
                <Spinner className="m-5" color="dark">
                  Loading...
                </Spinner>
            ):(
                <>
                 <ListGroupItem className="d-flex justify-content-between w-100 m-3" >
                    <span className="fw-bold my-auto">User List</span>
                    <Link to="/create">
                        <Button color="primary">Add users +</Button>
                    </Link>
                </ListGroupItem>
                
                {/* use map function and get the data from API  */}
                {users.map((user)=>(
                    <ListGroupItem className="d-flex justify-content-between"
                    key={user.id}
                    >
                        <div className="d-flex me-5">
                            <Button color="none" className="outline-none">
                                <Link to={"/profile"+user.id}>
                                    <HiUserCircle className="fs-3 mx-3 my-auto text-dark"/>

                                </Link>
                            </Button>
                            <div>
                                {user.name}
                                <br/>
                                <span className="text-primary">{user.email}</span>
                            </div>
                        </div>

                        <ButtonToolbar>
                            <ButtonGroup className="me-2">
                            <Button color="link">
                            <Link to={"/profile/" +user.id}>
                            <HiEye />
                            </Link>
                            </Button>

                            <Button color="link">
                            <Link to={"/edit/"+ user.id}>
                            <HiPencil />
                            </Link>
                            </Button>


                            <Button color="link">
                           {id===user.id&& deleteLoading?(
                            <Spinner color="danger">
                                Loading...
                            </Spinner>
                           ):(
                            <HiTrash onClick={()=>deleteUser(user.id)} />
                           )}
                          </Button>
                        </ButtonGroup>
                        </ButtonToolbar>

                    </ListGroupItem>
                    )
                )}
                </>
            )}
        </ListGroup>
       </div>
    )
}

export default Dashboard;