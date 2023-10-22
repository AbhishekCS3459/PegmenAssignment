import React from 'react'

interface PropTypes {
    className: string,
    content: string;
    func: (e: React.MouseEvent<HTMLButtonElement>) => void; // Specify the return type
}
export default function Button(props: PropTypes) {
    return (
        <button
            className={props.className}
            style={{
                color: "white",
                padding: "10px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                marginTop: "10px",
                alignSelf: "flex-end",
            }}
            onClick={props.func}
            type="submit"
            disabled
        >
            {props.content}
        </button>
    )
}
