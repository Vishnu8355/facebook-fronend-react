import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Unknown from './Unknown.jpeg'
import {Link} from 'react-router-dom'



export default function Signup() {
	const[fname,setFname]=useState("");
	const[lname,setLname]=useState("");
	const[email,setEmail]=useState("");
	const[password,setPassword]=useState("");
	const[newpassword,setNewPassword]=useState("");
	
	const[birthday,setBirthday]=useState("");
	const[gender,setGender]=useState("");

	const lgnbtn=async()=>{

		const regData={fname,lname,email,password,newpassword,gender,birthday
		}
		const res=await axios.post("http://localhost:3000/api/facebook",regData);
		if(res.status===200){
			setFname("")
			setLname("")
			setEmail("")
			setPassword("")
			setNewPassword("")
			setGender("")
			
			setBirthday("")

		}
	}
	return (
		<div>
		<div className="bg-gray-200 h-auto">
			<div className="flex">
				<div className="w-6/12 bg-white text-center">
				<h1 className="mt-10 font-sm text-xl">facebook help to connect the people</h1>
				<img src={Unknown} className="w-full pl-20 mt-20 h-80"/>
				</div>
				<div className="w-6/12 bg-white text-center">
				
				<div className="justify-center pl-20 mt-8">
				<div className="justify-center bg-white shadow-lg w-full h-auto p-2 border rounded-lg pb-6 pr-4 ">
				<h1 className="mt-6 text-3xl font-sm border-b border-gray-400">Create a new account</h1>
				<div className="space-x-6 flex pl-4 pr-4 ">
				<input type="text" placeholder="First name" className="p-2 mt-6 w-80 focus:outline-none border rounded-md"  value={fname} onChange={(e)=>setFname(e.target.value)}/>
				<input type="text" placeholder="Last name" className="p-2 mt-6 w-80  focus:outline-none border rounded-md" value={lname} onChange={(e)=>setLname(e.target.value)}/>
				</div>
				<div className="space-x-6 flex pl-4 pr-4 mt-2">
				<input type="Email" placeholder="Email" className="p-2 mt-2 w-full focus:outline-none border rounded-md" value={email} onChange={(e)=>setEmail(e.target.value)}/>
				
				</div>

				<div className="space-x-6 flex pl-4 pr-4 mt-2">
				<input type="password" placeholder="Password" className="p-2 mt-2 w-full focus:outline-none border rounded-md" value={password} onChange={(e)=>setPassword(e.target.value)} />
				
				</div>

				<div className="space-x-6 flex pl-4 pr-4 mt-2">
				<input type="text" placeholder="New password" className="p-2 mt-2 w-full focus:outline-none border rounded-md" value={newpassword} onChange={(e)=>setNewPassword(e.target.value)} />
				
				</div>

				<div className="text-left pl-4 mt-3 text-xl"><h1>Birthday:</h1>
				<input type="date" className="border bg-white rounded-md w-40 shadow-lg" value={birthday} onChange={(e)=>setBirthday(e.target.value)}/>
				
				</div>

				<div className="text-left pl-4 mt-3">
				<label className="text-xl font-sm">Gender:</label>
				<div className="flex space-x-4">
				<div>male:<input type="radio" name="aa" value="male" onChange={(e)=>setGender(e.target.value)}/ ></div>
				<div>female:<input type="radio" name="aa" value="female" onChange={(e)=>setGender(e.target.value)}/></div>
				</div>
				</div>

				<div className="mt-10"><button className="bg-blue-800 text-white border rounded-lg p-2 w-80 hover:bg-blue-900 text-xl " onClick={(e)=>lgnbtn()} >Create</button></div>

				<Link to=""><p className="text-blue-900 text-xl text-right pr-3 mt-4">Login here</p></Link>
				
				
				

				</div>
				</div>
				</div>
			</div>
		</div>

	


		</div>
		
		
			
		
	)
}