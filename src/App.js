import React, {useState} from 'react'

import useFetch from './components/useFetch'

function App() {

  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {games, loading, error} = useFetch(params, page)

  console.log(games, loading)

  return (
    <div className="App">
     {loading && <h1>Loading...</h1>}
     {error && <h1>{error.message}</h1>}
    </div>
  );
}

export default App;
