import React from "react"

const Greeter = (props: {person: string}): JSX.Element => {
    return <h1>Can I have the attention of the {props.person}</h1>
}

export default Greeter