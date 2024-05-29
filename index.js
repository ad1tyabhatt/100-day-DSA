import React from 'react'

<Button title="Left button" url={LeftArrow} onClick={() => {
            console.log("Button clicked");
          }} 
/>

const Button = ({ title, url, onClick }) => {
    return (
        <div>
            <button title={title} onClick={onClick}>
                <img src={url} alt={title} />
            </button>
        </div>
    );
};


export default Button;
