import React, { useState } from "react";
import { useInput } from "../components/utils/hooks/useInput";

const SimpleInput = (props) => {
  // alias
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurChangeHandler
  }  = useInput((value) => value.trim() !== '');
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurChangeHandler
}  =  useInput((value) => value.includes('@'))
  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
  };
  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurChangeHandler}
        />
        {nameInputHasError && <p>Name must not be empty</p>}
        </div>
        <div className={emailInputClasses}>
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurChangeHandler}
        />
        {emailInputHasError && <p>Name must not be empty</p>}
        </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;


// 4-й вариант
// import React, { useState } from "react";
// import { useInput } from "../components/utils/hooks/useInput";

// const SimpleInput = (props) => {
//   // alias
//   const { 
//     value: enteredName, 
//     isValid: enteredNameIsValid, 
//     hasError: nameInputHasError, 
//     valueChangeHandler: nameChangeHandler, 
//     inputBlurHandler: nameBlurChangeHandler 
//   }  = useInput((value) => value.trim() !== '');
//   const { 
//     value: enteredEmail, 
//     isValid: enteredEmailIsValid, 
//     hasError: emailInputHasError, 
//     valueChangeHandler: emailChangeHandler, 
//     inputBlurHandler: emailBlurChangeHandler 
//   } = useInput((value) => value.includes('@'))
//   let formIsValid = false;
//   if (enteredNameIsValid) {
//     formIsValid = true;
//   }
//   const formSubmissionHandler = (event) => {
//     event.preventDefault();
//     if (!enteredNameIsValid) {
//       return;
//     }
//   };
//   const nameInputClasses = nameInputHasError
//     ? "form-control invalid"
//     : "form-control";

//     const emailInputClasses = emailInputHasError 
//     ? "form-control invalid"
//     : "form-control";

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           type="text"
//           id="name"
//           value={enteredName}
//           onChange={nameChangeHandler}
//           onBlur={nameBlurChangeHandler}
//         />
//         {nameInputHasError && <p>Name must not be empty</p>}
//         </div>
//         <div className={emailInputClasses}>
//         <label htmlFor="emai">Your email</label>
//         <input
//           type="email"
//           id="email"
//           value={enteredEmail}
//           onChange={emailChangeHandler}
//           onBlur={emailBlurChangeHandler}
//         />
//         {emailInputHasError && <p>Name must not be empty</p>}
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };
// export default SimpleInput;

// 3-й вариант

// import React, { useEffect, useState } from 'react';
// const SimpleInput = (props) => {
//   const [enteredName, setEnteredName] = useState('');
//   const [enteredNameTouched, setEnteredNameTouched] = useState(false)
//   const [formIsValid, setFormIsValid] = useState(false)

//   const enteredNameIsValid = enteredName.trim() !== ''
//   const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

//   useEffect(() => {
//     if(enteredNameIsValid) {
//       setFormIsValid(true)
//     } else {
//       setFormIsValid(false)
//     }
//   }, [enteredNameIsValid])

//   const nameInputChangeHandler = (event) => {
//     setEnteredName(event.target.value);
//   };
//   const nameInputBlurHandler = () => {
//     setEnteredNameTouched(true)
//   }
//   const formSubmissionHandler = (event) => {
//     event.preventDefault();
//     setEnteredNameTouched(true)
//     if(!enteredNameIsValid) {
//       return
//     }
//     setEnteredNameTouched(false)
//   };
//   const nameInputClasses =  nameInputIsInvalid ? 'form-control invalid' : 'form-control'
//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor='name'>Your Name</label>
//         <input
//           type='text'
//           id='name'
//           value={enteredName}
//           onChange={nameInputChangeHandler}
//           onBlur={nameInputBlurHandler}
//         />
//         {nameInputIsInvalid && <p>Name must not be empty</p>}
//       </div>
//       <div className='form-actions'>
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };
// export default SimpleInput;

//2-й вариант

// import React, { useRef, useState } from 'react';
// const SimpleInput = (props) => {
//   const [enteredName, setEnteredName] = useState('');
//   const [enteredNameTouched, setEnteredNameTouched] = useState(false)
//   const enteredNameIsValid = enteredName.trim() !== ''
//   const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
//   const nameInputChangeHandler = (event) => {
//     setEnteredName(event.target.value);
//   };
//   const nameInputBlurHandler = () => {
//     setEnteredNameTouched(true)
//   }
//   const formSubmissionHandler = (event) => {
//     event.preventDefault();
//     setEnteredNameTouched(true)
//     if(nameInputIsInvalid) {
//       return
//     }
//     setEnteredNameTouched(false)
//   };
//   const nameInputClasses =  nameInputIsInvalid ? 'form-control invalid' : 'form-control'
//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor='name'>Your Name</label>
//         <input
//           type='text'
//           id='name'
//           value={enteredName}
//           onChange={nameInputChangeHandler}
//           onBlur={nameInputBlurHandler}
//         />
//         {nameInputIsInvalid && <p>Name must not be empty</p>}
//       </div>
//       <div className='form-actions'>
//         <button disabled={true}>Submit</button>
//       </div>
//     </form>
//   );
// };
// export default SimpleInput;

//1-й вариант

// import React, { useRef, useState } from 'react';
// const SimpleInput = (props) => {
//   const [enteredName, setEnteredName] = useState('');
//   const [isValid, setIsValid] = useState(false);
//   const [enteredNameTouched, setEnteredNameTouched] = useState(false)
//   const inputNameRef = useRef();
//   const nameInputChangeHandler = (event) => {
//     setEnteredName(event.target.value);
//     if(!enteredName.includes('@')) {
//       setIsValid(true)
//       setEnteredNameTouched(true)
//     }
//     console.log(enteredName);
//   };
//   const nameInputBlurHandler = () => {
//     setEnteredNameTouched(true)
//     if (enteredName.trim() === '') {
//       setIsValid(true);
//       return;
//     }
//     if(!enteredName.includes('@')) {
//       setIsValid(true)
//       return
//     }
//     setEnteredNameTouched(false)
//   }
//   const formSubmissionHandler = (event) => {
//     event.preventDefault();
//     setEnteredNameTouched(true)
//     if (enteredName.trim() === '' || !enteredName.includes('@')) {
//       setIsValid(true);
//       return;
//     }
//     setIsValid(false)
//     const enteredRefName = inputNameRef.current.value;
//     // fetch request to server
//     console.log(enteredRefName);
//   };
//   const nameInputIsValid = isValid && enteredNameTouched
//   const nameInputClasses =  nameInputIsValid ? 'form-control invalid' : 'form-control'
//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor='name'>Your Name</label>
//         <input
//           ref={inputNameRef}
//           type='text'
//           id='name'
//           value={enteredName}
//           onChange={nameInputChangeHandler}
//           onBlur={nameInputBlurHandler}
//         />
//         {nameInputIsValid && <p>Name must not be empty</p>}
//       </div>
//       <div className='form-actions'>
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };
// export default SimpleInput;

//1-й так было
// const SimpleInput = (props) => {
//   return (
//     <form>
//       <div className='form-control'>
//         <label htmlFor='name'>Your Name</label>
//         <input type='text' id='name' />
//       </div>
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;
