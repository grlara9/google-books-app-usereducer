import React from 'react'

const Form =({params, onParamChange})=>{
   return(
       <form>
           <input type="text" onChange={onParamChange} value={params.title} name='title'/>
           <input type="text" onChange={onParamChange} value={params.upperPrice} name='upperPrice'/>
           <input type="text" onChange={onParamChange} value={params.lowerPrice} name='lowerPrice'/>

       </form>
   )
}

export default Form