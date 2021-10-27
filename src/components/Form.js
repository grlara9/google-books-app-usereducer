import React from 'react'
import './Form.css'
const Form =({params, onParamChange})=>{
   return(
       <form>
           <input type="text" onChange={onParamChange} value={params.s} name='s' placeholder="Title"/>
          

           

       </form>
   )
}

export default Form