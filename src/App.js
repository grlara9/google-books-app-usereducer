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

const indexOfLastPost = page * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const book = books.slice(indexOfFirstPost, indexOfLastPost);

console.log("this", book)
  return (
    <div className="App">
      <Form params={params} onParamChange={handleParamsChange} />
     
     {loading && <h1>Loading...</h1>}
     {error && <h1>{error.message}</h1>}
     {books.map((book)=>{
       return <Game key={book.id} book={book}/>
     })}
    
    </div>
  );
}

export default App;
