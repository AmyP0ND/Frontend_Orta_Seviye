import React,{useState} from 'react'
import reactDom from 'react-dom'


function DataList(props) {
  return (
    <div>
        <ul>
            {props.data.map((item,index)=>{
                return <li key={index}>{item.name}</li>
            })}
        </ul>
        
    </div>
  )
}

const data=[
    {name:'Daniel',age:25},
    {name:'John',age:24},
    {name:'Jen',age:31},
]

export default coderbyte