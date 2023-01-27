import { useContext } from "react";
import { userContext } from "Routes";
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";
function Homepage() {
    const [user] = useState({
        email:"Jerniferharwell@gmail.com",
        password:"jen54zh"
    })
    const [inputUser,setInputUser] = useState({
        email:"",
        password:""
    })
    const {isSignedIn,setisSignedIn} = useContext(userContext)
    const navigate = useNavigate()
    const handleChange = (e)=>{
        setInputUser({...inputUser,[e.target.name]:e.target.value})
    }
    const handleLog = () => {
      if(user.email===inputUser.email && user.password===inputUser.password){
        setisSignedIn(true)
      navigate("/dashboard")
      }
    }
    return ( <div>
       <section class="bg-gray-50 min-h-screen flex items-center justify-center" style={{backgroundImage:"url(images/bank.jpeg)", backgroundSize:"contain"}}>

  <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
    
    <div class="md:w-1/2 px-8 md:px-16">
        <h1 class="font-bold text-2xl text-[#002D74]"> <Link to="/">CAPITAL BANK</Link></h1>
        
      
      <h2 class="text-xs mt-4 text-[#002D74]">Login</h2>

      <form action="" class="flex flex-col gap-4">
        <input onChange={(e)=>{handleChange(e)
            console.log(isSignedIn)
            console.log(inputUser)}}
             class="p-2 mt-8 rounded-xl border" 
             type="email" 
             name="email" 
             placeholder="Email"
             value={inputUser.email} />
        <div class="relative">
          <input onChange={(e)=>{handleChange(e)
            console.log(isSignedIn)
            console.log(inputUser)}}
            value={inputUser.password}
            class="p-2 rounded-xl border w-full" 
            type="password" 
            name="password"
             placeholder="Password" />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
        </div>
        <button onClick={()=>{handleLog()}} class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
      </form>

      <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr class="border-gray-400" />
        <p class="text-center text-sm">OR</p>
        <hr class="border-gray-400" />
      </div>

      

      

      <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
        <p>Don't have an account?</p>
        <button onClick={()=>{navigate("/register")}} class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>
      </div>
    </div>


   
  </div>

 
</section>
        
    </div>  );
}

export default Homepage;