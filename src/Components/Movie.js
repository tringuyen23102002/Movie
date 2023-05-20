import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function Movie() {
    const { show, count } = useContext(AppContext);
    console.log(count);
    return (
        <div>
            <h1>I am movie</h1>
        </div>
    )
}