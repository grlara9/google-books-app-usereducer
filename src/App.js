import React, {useState} from 'react'

import useFetch from './components/useFetch'

function App() {

  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {games, loading, error} = useFetch(params, page)

  console.log(games, loading)

  return (
    <div className="App">
     <h1>hola</h1>
    </div>
  );
}

export default App;
