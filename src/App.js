import React, {useState} from 'react'

import useFetch from './components/useFetch'
import Pagination from './components/Pagination'
import Form from './components/Form'
import Game from './components/Game'
function App() {

  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)
  const {books, loading, error, hasNextPage} = useFetch(params, page)

  console.log(books, loading, params)


  const handleParamsChange = (e)=>{
    const param = e.target.name
    const value= e.target.value
    setPage(0);
    setParams((prevParams) =>{
      return { ...prevParams, [param]: value}
    })
  }

  return (
    <div className="App">
      <Form params={params} onParamChange={handleParamsChange} />
     
     {loading && <h1>Loading...</h1>}
     {error && <h1>{error.message}</h1>}
     
    
    </div>
  );
}

export default App;
