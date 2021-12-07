import { useFormik } from 'formik';
import { useHistory } from "react-router-dom";
import * as yup from 'yup';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export function Register() {
const history = useHistory();

  const formValidateSchema = yup.object({

    firstname: yup.string().min(3 , "please provide a valid name").required("firstname filed is empty"),
    lastname: yup.string().min(3 , "please provide a valid name").required("lastname filed is empty"),
    email : yup.string().min(5 , "please provide a vaild Email Address").required("Email filed is empty")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i , "invalid pattern"),
    password : yup.string().min(8).max(12 , "Need a shorter password").required("password filed is empty"),
  });
  const formik = useFormik({
    initialValues : {firstname: "", lastname:"", email : "" , password : ""},
    validationSchema : formValidateSchema,
    //only when no error sumbit,
    onSubmit : (values) => {
      console.log("onSumbit" , values);
    }
  });

  return (
     
    <div>
    <form onSubmit = {formik.handleSubmit} className="sign-up">

        <TextField  
         id = "firstname"
        name = "firstname"
        type = "text"
        value={formik.values.firstname}
        onChange = {formik.handleChange}
        onBlur = {formik.handleBlur}
        error = {formik.errors.firstname && formik.touched.firstname}
        helperText =   {formik.errors.firstname && formik.touched.firstname && formik.errors.firstname}
        placeholder = "Enter your First Name" label="First Name" variant="outlined" />  

        <TextField  
         id = "lastname"
        name = "lastname"
        type = "text"
        value={formik.values.lastname}
        onChange = {formik.handleChange}
        onBlur = {formik.handleBlur}
        error = {formik.errors.lastname && formik.touched.lastname}
        helperText =   {formik.errors.lastname && formik.touched.lastname && formik.errors.lastname}
        placeholder = "Enter your Last Name" label="Last Name" variant="outlined" />  

        <TextField  
         id = "email"
        name = "email"
        type = "email"
        value={formik.values.email}
        onChange = {formik.handleChange}
        onBlur = {formik.handleBlur}
        error = {formik.errors.email && formik.touched.email}
        helperText =   {formik.errors.email && formik.touched.email && formik.errors.email}
        placeholder = "Enter your email" label="Email" variant="outlined" />  
     
    <TextField
     id = "password"
     name = "password"
     value={formik.values.password}
     onChange = {formik.handleChange}
     onBlur = {formik.handleBlur}
     type = "password"
     error = {formik.errors.password && formik.touched.password}
     helperText =   {formik.errors.password && formik.touched.password && formik.errors.password}
     placeholder = "Enter your password"
     label="Password" variant="outlined"
    />
  
    <button className="btn btn-primary" type = "submit">Sumbit</button>
    <button onClick={()=>{
       history.goBack()
    }} className=" btn btn-dark">Go Back</button>
  </form>
  </div>
    );
}
