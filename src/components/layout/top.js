import React from 'react';
export default function Top(props) {
    
    return (        
        <header className='bg-black p-3 pl-[250px] text-white'>
            <div className='text-center font-bold'>{props.pageTitle}</div>
        </header>
    )

}