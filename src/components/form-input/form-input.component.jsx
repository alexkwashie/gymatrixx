import React from 'react'
import './form-input.style.scss'

const FormInput =({handleChange, label, ...otherProps})=>(
    <div className='group'>
        <input className = 'form-input' onChange={handleChange} {...otherProps}/>

        {/*code below: if there is a label, apply class shrink when the user clicks into input field*/}
        {/*apply passed in label to the label class*/}

        {
            label ?
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>

            )
            : null
        }
    </div>

)


export default FormInput;

