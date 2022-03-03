import React, {useReducer} from 'react';

const initialState = {data: [], initialData: []};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'FETCH_DATA':
      return {...state, data: action.payload, initialData: action.payload};
    case 'SET_DATA':
      return {
        ...state,
        data: [...state.data, ...action.payload],
        initialData: [...state.data, ...action.payload],
      };
    case 'FILTER_DATA':
      let filterData: any = state.initialData;
      if (action.payload === '') {
        filterData = state.initialData;
      } else {
        filterData = filterData.filter(
          (item: any) =>
            item.brand.toLowerCase().match(action.payload.toLowerCase()) ||
            item.country.toLowerCase().match(action.payload.toLowerCase()),
        );
      }
      return {...state, data: filterData};
    default:
      return;
  }
}

const Context = React.createContext();

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {state, dispatch};
};

export {Reducer, Context};
