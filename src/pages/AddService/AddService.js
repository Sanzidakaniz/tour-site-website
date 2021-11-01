import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
const AddService = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    console.log(data);
axios.post('https://fierce-sierra-02972.herokuapp.com/services',data)
    .then(res=>{
      if(res.data.insertedId){
        alert('Successfully Added');
        reset();
      }
    })

  }
   
    return (
        <div className="add-service">
          <br/>
        <br/>
        
        <br/>
       <h1 >Please Add Service</h1>
       <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name" )} placeholder="Name" />
      <textarea {...register("description" )} placeholder="description"/>
      <input type="number" {...register("price")} placeholder="price" />
      <input {...register("img" )} placeholder="image url"/>
      <input className="btn-danger"type="submit" />
    </form>
    <br/>
    <br/>
    <br/>
    <br/>
        </div>
    );
};

export default AddService;