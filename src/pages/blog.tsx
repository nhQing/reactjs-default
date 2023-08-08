
import { useSelector } from "react-redux"
import TEST_FUNCS from "src/redux/funcs/test-funcs";

export default function Blog() {
    const newTEST_FUNCS = new TEST_FUNCS()
    const newState = useSelector(newTEST_FUNCS.getState)
    console.log("newState", newState);



    return <h1>333333333333333333</h1>
}