import React, { useState } from 'react'


export const AddCategoria = ({setCAtegorias}) => {

    const [inputvaliu, setInputvaliu] = useState('')

    const handleInput = (e) =>{
        setInputvaliu(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputvaliu.trim().length > 2) {
            setCAtegorias( cats => [ inputvaliu ,...cats])
            setInputvaliu('')
        }
        
    }

    return (
        <div>
            {/* <h1>{inputvaliu}</h1> */}
            <form 
            onSubmit={handleSubmit}
            >
                <input 
                    type="text"
                    value = {inputvaliu}
                    onChange = {handleInput}
                    className="form-control"
                    placeholder="Ej. Dragon Ball Z"
                />
            </form>
        </div>
    )

}


// eslint-disable-next-line react/no-typos
// AddCategoria.PropTypes = {
//     setCAtegorias: PropTypes.func.isRequired
// }