import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label, Spinner,Button } from "reactstrap";


const CreateUser=()=>{
    const [updateLoading,setUpdateLoading]=useState(false);
    const [userData,setUserData]=useState({
        name:"",
        email:"",
        department:"",
        country:""
    });
    const navigate = useNavigate();

    ////Define a function userDataHandler
    //the input that you are taking from input form should be updated using belong
    // ->onChange 
    const userDataHandler=(event)=>{
        setUserData({...userData,[event.target.name]:event.target.value});
    }


    // Handle Form Submission ->submitHandler->post methods->send the data to server
    const submitHandler=async()=>{
        const url="https://6456721c5f9a4f2361445c32.mockapi.io/users";
        setUpdateLoading(true);
        try {
            await axios.post(url,userData);//payload request
            setUpdateLoading(false);
            navigate("/");//navigate to the dashboard
            
        } catch (error) {
            console.log(error);
        }
    }

    return(
    <Form  className="container mt-5 w-50">
        <FormGroup className="mb-2 mb-sm-2">
            <Label
            for="username"
            
            >
            Username
            </Label>
            <Input
            id="name"
            name="name"
            placeholder="Mr.Frank"
            type="text"
            value={userData.name}
            onChange={userDataHandler}
            />
        </FormGroup>



        <FormGroup className="mb-2 mb-sm-2">
            <Label
            for="email"
            >
            Email
            </Label>
            <Input
            id="email"
            name="email"
            placeholder="frank@example.com"
            type="email"
            value={userData.email}
            onChange={userDataHandler}
            />
        </FormGroup>

        <FormGroup className="mb-2 mb-sm-2">
            <Label
            for="department"> Department</Label>
            <Input
            id="department"
            name="department"
            placeholder="Books"
            type="text"
            value={userData.department}
            onChange={userDataHandler}
            />
        </FormGroup>

        <FormGroup className="mb-2 mb-sm-2">
            <Label
            for="department"> Country</Label>
            <Input
            id="country"
            name="country"
            placeholder="India"
            type="text"
            value={userData.country}
            onChange={userDataHandler}
            />
        </FormGroup>
        {updateLoading?(
            <>
            <Button color='primary'>
                <Spinner size="sm">Loading...</Spinner>
                <span>Creating</span>
            </Button>
            </>
        ):(
            <Button color="primary" onClick={submitHandler}>
              Create
            </Button>  
        )}
        </Form>
    )
}

export default CreateUser;