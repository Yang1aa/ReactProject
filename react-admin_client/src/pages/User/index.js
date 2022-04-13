import { useState } from "react";

const User = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(2)
    }
    return (
        <div>
            <span>{count}</span>
            <br></br>
            <button onClick={handleClick}>点击1</button>
            <button onClick={() => {
                setCount(count + 1)
            }}>点击2</button>
        </div>
    )
}
export default User;