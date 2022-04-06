import React, {useState}from 'react'
import axios from 'axios'


export default function Navbar() {
	const[email,setEmail]=useState("");
	const[password,setPassword]=useState("");

		
		const lgnbtn=async()=>{
	
		const regData={
			email,password
		}
       const res = await axios.post("http://localhost:3000/api/login",regData);
       
       if(res.status===200){
       	setEmail("")
       	setPassword("")
       	
       }
	}
	return (
		<div>
		<div>
			<nav>
			<div className="flex float-right mt-6 space-x-2 pr-32">
			<label className="text-white font-sm mt-1">Email:</label>
				<input type="text" placeholder="Email..." className="p-1 focus:outline-none border rounded-lg" value={email} onChange={(e)=>setEmail(e.target.value)}/>
				<label className="text-white font-sm mt-1">Password:</label>
				<input type="password" placeholder="Password" className="p-1 focus:outline-none border rounded-lg" value={password} onChange={(e)=>setPassword(e.target.value)}/>
				<button className="p-1 bg-blue-700 text-white border rounded-lg hover:bg-blue-900" onClick={(e)=>lgnbtn()} >Login</button>
				</div>
			</nav>
		</div>
			
		</div>

	)
}