import React from 'react'
import './Form.css'
const Form =({params, onParamChange})=>{
   return(
       <form>
           <input type="text" onChange={onParamChange} value={params.intitle} name='intitle' placeholder="Title"/>
           <input type="text" onChange={onParamChange} value={params.inauthor} name='inauthor' placeholder="Author name"/>

           

       </form>
   )
}

export default Form