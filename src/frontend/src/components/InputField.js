import React from 'react';

const InputField = ({type, value, placeholder, onChange, errorMessage}) => {
    return (
        <>
            <input
                style={{borderColor: 'red'}} //이렇게 하면 InputField 컴포넌트 스타일이 바뀐다.
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}/>
            <br/>
            <div style={{color: 'red'}}>{errorMessage}</div>
        </>
    );
};

export default InputField;