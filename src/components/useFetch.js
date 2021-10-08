import React from 'react'
import axios from 'axios'


const BASE_URL = "https://cors-anywhere.herokuapp.com/https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=5";

const ACTIONS = {
    MAKE_REQUEST: "make-request",
    GET_DATA: "get-data",
    ERROR: "error",
    NEXT_PAGE: "next-page",
  };

function reducer(state, action){
    switch(action.type){
        case ACTIONS.MAKE.REQUEST:
            return{loading: true, games:[]}
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
  const [state, dispatch] = useReducer(reducer, {loading: true, games:[]})
return state
}
