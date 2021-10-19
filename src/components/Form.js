import React from 'react'

const Form =({params, onParamChange})=>{
   return(
       <form>
           <input type="text" onChange={onParamChange} value={params.intitle} name='intitle'/>
           <input type="text" onChange={onParamChange} value={params.inauthor} name='inauthor'/>
           

       </form>
   )
}

export default Form