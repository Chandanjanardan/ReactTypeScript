import React, { ChangeEvent, useState ,FormEvent,MouseEvent} from 'react'
interface RegisterForm{
    username:string,
    email:string
}

const Login:React.FC=()=>{
    const [formData,setFormData]=useState<RegisterForm>({username:"",email:""})
    function handleChange(e:ChangeEvent<HTMLInputElement>){
        // e.preventDefault()
        const {name,value}=e.target
        setFormData(prev=>({...prev,[name]:value}))
    }
    function handleSubmit(e:MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        console.log(formData)
    }
    return(
        <>
        <h1>Login</h1>
        <form >
            <input name="username" value={formData.username} onChange={handleChange} />
            <input name="email" type='email' value={formData.email} onChange={handleChange}/>
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
        </>
    )
}

export default Login