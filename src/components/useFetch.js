import React, {useReducer, useEffect} from 'react'
import axios from 'axios'


const BASE_URL = "https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=5";

const initialState = {
    loading:true,
    games: []
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
            return {loading: true, games:[]}
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, games: action.payload.games };
        case ACTIONS.ERROR:
            return {...state, loading:false, game:[], error:action.payload.error}
        case ACTIONS.NEXT_PAGE:
            return{...state, hasNextPage: action.payload.hasNextPage};
        default :
            return state
    }
}

 const useFetch = (params, page) => {
  const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        dispatch({type: ACTIONS.MAKE_REQUEST});
        axios.get(BASE_URL, {
            params: {...params},
        })
        .then((res) => {
            dispatch({type: ACTIONS.GET_DATA, payload: {games: res.data}})
        })
        .catch((e)=>{
            dispatch({type: ACTIONS.ERROR, payload: {error:e}})
        })
    }, [params, page]);

return state
}

export default useFetch