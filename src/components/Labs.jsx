import { useNavigate } from "react-router-dom"

export default function Labs() {
    let navigate = useNavigate()
    function backhandler() {
        navigate(-1);
    }
    return (
        <div className="">
            <div>This is lab page</div>
            <button onClick={backhandler}>previous page</button>
        </div>
    )
}