import { useState, useEffect } from "react"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';



function MemoForm() {
    const [comment, setComment] = useState("")


    function handleSubmit(e) {
        e.preventDefault();
        axios.post(`/notes`, {
            memo: comment
        })

    }

    function handleOnChange(e) {

        setComment(e.target.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" value={comment} onChange={handleOnChange}></input>
                </label>
                <button type="submit">Post</button>


            </form>
        </div>

    )
}

export default MemoForm