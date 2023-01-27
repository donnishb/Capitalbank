import { useNavigate } from "react-router-dom";

function ThankYou() {
    const navigate = useNavigate()
    return ( <>
    <div style={{backgroundImage:"url(images/bank1.jpeg)",color:"white"}}>
    Thank you for Registering with Us.
    <div>Your Application would be reviewed.</div>
   <div> Upon approval, you will receive a message in your registered e-mail.</div>
    </div>
    <button onClick={()=>{navigate("/")}}style={{marginLeft:"5rem",marginTop:"2.5rem"}} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Done</button>
    </>  );
}

export default ThankYou;