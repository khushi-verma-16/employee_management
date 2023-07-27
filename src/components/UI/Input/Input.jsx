import React from 'react'
import './style.css'

const Input = ({
    label = '',
    placeholder = '',
    type = 'text',
    value,
    onChange = () => { },
    width = '100%',
    name,
    errors,
    required = false
}) => {
    console.log()
    return (
        <div className='text-input-container' style={{ width }}>
            <label className='text-input-label'>
                {label}
                {required && <span className='required'>*</span>}
            </label>
            <input
                className='text-input'
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{
                    borderColor: errors[name] ? '#ce411a' : '#fafafa'
                }}
            />
            <span className='error-msg'>{errors[name] ? errors[name]?.message : ''}</span>
        </div>
    )
}

export default Input