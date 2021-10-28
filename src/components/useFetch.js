import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading:true,
    books: []
}

const ACTIONS = {
    MAKE_REQUEST: "make-request",
    GET_DATA: "get-data",
    ERROR: "error",
    NEXT_PAGE: "next-page",
  };

  
  function reducer(state, action){
      switch(action.type){
          case ACTIONS.MAKE_REQUEST:
              return {loading: true, books:[]}
              case ACTIONS.GET_DATA:
                  return { ...state, loading: false, books: action.payload.books };
                  case ACTIONS.ERROR:
                      return {...state, loading:false, books:[], error:action.payload.error}
                      case ACTIONS.NEXT_PAGE:
                          return{...state, hasNextPage: action.payload.hasNextPage};
                          default :
                          return state
                        }
                    }
                    const BASE_URL="https://www.googleapis.com/books/v1/volumes?";

 const useFetch = (params, page) => {
  const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        const cancelToken1 = axios.CancelToken.source();
        dispatch({type: ACTIONS.MAKE_REQUEST});
        axios.get(BASE_URL, {
            cancelToken: cancelToken1.token,
            params: {
                
                intitle: 'titanic',
                startIndex: 0,
                maxResults: 40,
                 }
        })
        .then((res) => {
            dispatch({type: ACTIONS.GET_DATA, payload: {books: res.data}})
        })
        .catch((e)=>{
            if (axios.isCancel(e)) return;
            dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
        })

        const cancelToken2 = axios.CancelToken.source();
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken2.token,
        params: {
           
            page: page + 1
        }
      })
      .then((res) => {
        dispatch({
          type: ACTIONS.NEXT_PAGE,
          payload: {hasNextPage: res.data.length !== 0 },
        });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });
        return()=>{
            cancelToken1.cancel();
            cancelToken2.cancel();
        }
    }, [params, page]);

return state
}

export default useFetch