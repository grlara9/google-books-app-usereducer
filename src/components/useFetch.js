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
    }
}

const useFetch = (params, page) => {
return <div></div>
}
