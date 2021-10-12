import React from 'react'

const Form =()=>{
   return(
       <form>
           <input type="text" onChange={onParamChange} value={params.title} name='title'/>
           <input type="text" onChange={onParamChange} value={params.upperPrice} name='upperPrice'/>
       </form>
   )
}

export default Form