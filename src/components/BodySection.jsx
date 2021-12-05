import React from 'react';

function BodySection(props){
    return (
        <>
            <header className="entry-header"><h1 className="entry-title">{props.header}</h1></header>
            <div className="entry-content">
                <div className="entry-message"><h1>{props.message}</h1></div>
                <div className="page-long-des">
                    <div className="page-long-des-inner">
                        <p>{props.para}</p>
                        <p>{props.para1}</p>
                        <p>{props.para2}</p>

                        
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default BodySection;