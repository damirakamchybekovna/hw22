import { useState } from "react";
import { useReducer } from "react";


const defaultInput = {
    value: '',
    isTouched: false
}
const inputReducer = (prevState, action) => {
    if (action.type === 'VALUE_CHANGE') {
        return {
            value: action.value,
            isTouched: prevState.isTouched
        }
    }
    if (action.type === 'TOUCHED') {
        return {
            value: prevState.value,
            isTouched: true
        }
    }
    return inputReducer
}
export const useInput = (validateState) => {
    const [inputState, dispatchEmail] = useReducer(inputReducer, defaultInput)
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = validateState(inputState.value) // true || false
  const hasError = !valueIsValid && inputState.isTouched
  const valueChangeHandler = (event) => {
      dispatchEmail({type: 'VALUE_CHANGE', value: event.target.value})
    //   setEnteredValue(event.target.value)
  }
  const inputBlurHandler = (event) => {
      dispatchEmail({type: 'TOUCHED'})
    //   setIsTouched(true)
  }
  return {
      value: inputState.value,
      isValid: valueIsValid,
      hasError,
      valueChangeHandler,
      inputBlurHandler,
  }
}




