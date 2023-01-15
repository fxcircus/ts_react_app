import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeter from './components/Greeter';
import ComponentWithInterfaceExample from './components/ComponentWithInterfaceExample';
import ShoppingList from './components/ShoppingList';
import Item from './models/Item';
import ShoppingListForm from './components/ShoppingListForm';

function App() {
  const [ items, setItems ] = useState<Item[]>([])
  const [ count, setCount ] = useState<number>(1)

  const addItem =(product: string, quantity:number) => {
    console.log(`Adding ${product}`)
    setItems([...items, {id:count, product, quantity:quantity}])
    console.log(items)
    setCount(count + 1)

  }

  return (
    <div className="App">
      <Greeter person="class, please?!"/>
      <ComponentWithInterfaceExample
        what="what"
        who="who"
      />
      <ShoppingList items={items}/>
      <ShoppingListForm onAddItem={addItem}/>
    </div>
  );
}

export default App;
