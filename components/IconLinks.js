import React from "react";

function IconLinks(props) {
    return(
        <>
        <a href={ props.url }
            className="flex-center">
            <span className={ props.iconName }>
            </span>
        </a>
        <style jsx>{`
            a {
                width: 50px;
                height: 50px;
                font-size: 3.5rem;
                border-radius: 10px;
                background-color: var(--white);
                color: var(--black);
            }
            `}
            </style>
        </>
    );
}

export { IconLinks };