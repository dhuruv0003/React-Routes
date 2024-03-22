import { useNavigate } from "react-router-dom";
export default function About() {

    let navigate = useNavigate()
    function backhandler() {
        navigate(-1);
    }

    return (
        <div className="">
            <div>This is About Page</div>
            <button onClick={backhandler}>previous page</button>
        </div>
    )
}