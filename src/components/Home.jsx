import { useNavigate } from "react-router-dom"

export default function Home(){
    let  navigate=useNavigate();
    function clickhandler(){
       navigate("/labs")
    }
    return(
        <div className="">
            <div>This is home page</div>
            <button onClick={clickhandler}>goto labs</button>
        </div>
    )
}