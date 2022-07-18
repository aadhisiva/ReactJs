import { useEffect, useState,useRef } from "react";

function FunctionalCompoennt() {
    const [state, setState] = useState({
        name: 0,
        color: ""
    });
    const count = useRef("");

    useEffect(()=>{
        setState((prev)=>({
            ...prev,
            name: 5
        }))
    }, [])

    const handleIncrement = () => {
        setState((prev) => ({ ...prev, name: state.name + 1 }));
    }
    const handleDecrement = () => {
        setState((prev) => ({ ...prev, name: state.name - 1 }))
    }
    const handleClick = (e) =>{
        e.preventDefault();
        count.current.focus();
        alert(count.current.value);
    }
    return (
        <div>
            <input type={"text"} ref={count} />
            <input type={"button"} value={"count"} onClick={handleClick} />
            <h1>hooks</h1>
            <h5>{state.name <= 0 ? 0 : state.name}</h5>
            <input type={"button"} value="Increment" onClick={handleIncrement} />{" "}
            <input type={"button"} value="Decrement" onClick={handleDecrement} />
            {/* <h1>Render Count: {count.current}</h1> */}
        </div>
    )
}

export default FunctionalCompoennt;

