import React, { useEffect, useRef } from "react";

interface ShoppingListProps {
    onAddItem:(item: string, quantity:number) => void
}

const ShoppingListForm = ({onAddItem}: ShoppingListProps): JSX.Element => {
    const productInputRef = useRef<HTMLInputElement>(null)
    const quantityInputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const quantity = parseInt(quantityInputRef.current!.value)
        console.log("Form submitted")
        const newProduct = productInputRef.current!.value
        onAddItem(newProduct, quantity)
        productInputRef.current!.value = ''
        quantityInputRef.current!.value = "1"
    }

    useEffect(() => {
        quantityInputRef.current!.value = "1"
    })

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name" ref={productInputRef}/>
            <input type="number" min={0} ref={quantityInputRef} />
            <button>Add Item</button>
        
        </form>
    )
}

export default ShoppingListForm