import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FormGroup, Input, Label, Spinner,Form } from "reactstrap";


const Edit=()=>{
    const [editLoading,setEditLoading]=useState(false);
    const[profile,setProfile]=useState({
        name:"",
        email:"",
        department:"",
        country:""
    });
    let { id } = useParams();
    console.log(id);
    const navigate=useNavigate();


    //Write a logic to edit data
    useEffect(()=>{
        const editProfile=async()=>{
            try {
                const url=`https://6456721c5f9a4f2361445c32.mockapi.io/users/${id}`;
                const {data}=await axios.get(url);
                setProfile({...data})   
            } catch (error) {
                console.log(error);
            }
        };
        editProfile();
    },[id])

    //put logic data
//logic to update the data 
    const profileHandler=async ()=>{
        const url=`https://6456721c5f9a4f2361445c32.mockapi.io/users/${id}`;
        setEditLoading(true);
        try {
            await axios.put(url,profile);
            setEditLoading(false);
            navigate('/')      
        } catch (error) {
            console.log(error);
        }
    }

    //to target the input
    const editProfileHandler=(event)=>{
        setProfile({...profile,[event.target.name]:event.target.value})
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
            value={profile.name}
            onChange={editProfileHandler}
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
            value={profile.email}
            onChange={editProfileHandler}
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
            value={profile.department}
            onChange={editProfileHandler}
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
            value={profile.country}
            onChange={editProfileHandler}
            />
        </FormGroup>
        {editLoading?(
            <>
            <Button color='primary'>
                <Spinner size="sm">Loading...</Spinner>
                <span>Updating</span>
            </Button>
            </>
        ):(
            <Button color="primary" onClick={profileHandler}>
              Update
            </Button>  
        )}
        </Form>
    )
}

export default Edit;