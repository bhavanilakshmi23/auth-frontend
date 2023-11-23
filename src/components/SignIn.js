import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import {toast} from 'react-toastify'
import {useNavigate,Link} from 'react-router-dom'

function SignIn() {
    let navigate = useNavigate()
    let handleSignin = async(e)=>{
        e.preventDefault()

        let data = {
            email:e.target.email.value,
            password:e.target.password.value
        }
        
        try {
            let res = await axios.post(`${process.env.REACT_APP_API_URL}/user/signin`,data)
            if(res.status===200)
            {
                toast.success(res.data.message)
                sessionStorage.setItem('token',res.data.token)
                navigate('/dashboard')
            }
        } catch (error) {
            toast.error(error.response.data.error || error.response.data.message)
        }
    }

  return <div className='container-fluid'>
       <div className='signup-wrapper'>
  <h1 className='title'>Sign In</h1>
 <Form onSubmit={handleSignin}>
    <Form.Group className="mb-3" >
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email"/>
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name="password"/>
    </Form.Group>
    <Button variant="primary" type="submit" cclassName="button3">
      Submit
    </Button>
      <p className="para">Don't have an account?</p>
        <span><Link to='/sign-up'>Create New Account</Link></span>
  </Form>
  </div>
</div>
}

export default SignIn
