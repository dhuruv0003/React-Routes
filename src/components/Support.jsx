import { useNavigate } from "react-router-dom"

export default function Support(){
    let navigate=useNavigate();
    function clickhandler(){   
        navigate("/labs")
    }
    function backhandler(){
        navigate(-1);
    }
    return(
        <div className="">
            <div>This is support page</div>
            <button onClick={clickhandler}>Move to Labs page</button>

{/* using useNavigate we can also navigate to previous page i.e back propagation is possible using usw navigate.. */}

        <button onClick={backhandler}>Go to previious page</button>

        </div>
    )
}