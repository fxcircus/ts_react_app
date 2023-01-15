import React from "react"
import Item from "../models/Item"

interface ShoppingListProps {
    items: Item[]
}

export default function ShoppingList({ items }: ShoppingListProps): JSX.Element {
    // "Hard coded" data:
    // const items = [
    //   {id: 1, product: "Lemon", quantity: 3},
    //   {id: 2, product: "Chicken Breast", quantity: 1}
    // ]
    return (
        <div>
            <h2>Shopping List</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.product} - {item.quantity}</li>
                ))}
            </ul>
        </div>
    )
}
