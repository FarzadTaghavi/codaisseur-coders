## create (developers) page

[] create developer component
[] fetch developers with useEffect & axios
[] store data with useState
[] display developers with .map

---

## Refactor to redux

[] setup inital file structure
[] folder for new slice
[] create reducer.js
[] set initial state correctly
[] create actions.js
[] create selector.js
[] add new slice to your combineReducer

## move fetched data into redux store (action.js)

[] go to actions.js
[] create function action with type and payload
[] create new thunk function (dispatch, getState)
[] import axios and copy axios fetch from component
[] dispatch action and pass in the argument(data)
[] import useDispatch in component
[] add thunk to component in useEffect

## edit reducer to handle new state

[] add new case to reducer
[] check data in redux Devtools

## create selector to get data back to the component (selector.js)

[] go to selectors.js
[] create the selector to get data from store
[] import useSelector
[] import selector in component (console log to check data)
[] replace useState with selector in .map
[] check if data is dsplaying correctly

## cleanup component

[] remove fetch code from useEffect
[] remove axios, useState from imports
