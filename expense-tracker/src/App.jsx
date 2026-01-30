

import { useState } from 'react';
import './App.css'
import Card from './components/card'

function Createid(){
    if(typeof crypto !=="udefiened" && crypto.randomUUID){
      console.log(crypto.randomUUID())
      return crypto.randomUUID(

      );
    }

    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}





function App() {

  const [expenses, setExpenses] = useState([
    {id:Createid(), title:"Jacket", amount: 150, catagory :"Shooping"},
    {id:Createid(),title:"Internet Bandel", amount: 100, catagory :"Bills"},
    {id:Createid(),title:"Pizza", amount: 200, catagory :"Food"}
  ])
 return(
  <div  className="page">
    <header className='header'>
  <div>
      <h1 className='header'>Expense Tracker Application</h1>
      <p className='subtitle'> Week 1 + week 2 Mini Project</p>
  </div>
    
    </header>
  <Card title={"Add Expences"}>
    <p>Form will be here</p>
  </Card>      

  <Card title={"Expenses"}>
    <p> Listes will be here</p>
  </Card>
  
  </div>
 )

}
    

export default App
