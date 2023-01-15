import React from "react"

interface TheProps  {
    what: string
    who: string
}

const ComponentWithInterfaceExample = ({what, who}: TheProps): JSX.Element => {
    return (
        <div>
            <h3>Hi! my name is {what}</h3>
            <h4>my name is {who}</h4>
            <h5>My name is Chika-chika Slim Shady</h5>
        </div>
    )
    
}

export default ComponentWithInterfaceExample