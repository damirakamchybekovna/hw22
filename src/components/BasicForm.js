// import React, { useRef, useState } from "react";

// const BasicForm = () => {
//   const firstNameRef = useRef("");
//   const [enteredNameTouched, setEnteredNameTouched] = useState(false);
//   const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

//   const LastNameRef = useRef("");
//   const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);
//   const [enteredLastNameIsValid, setEnteredLastNameIsValid] = useState(false);

//   const emailNameRef = useRef("");
//   const [enteredEmailNameTouched, setEnteredEmailNameTouched] = useState(false);
//   const [enteredEmailNameIsValid, setEnteredEmailNameIsValid] = useState(false);

//   const formSubmissionHandler = (event) => {
//     event.preventDefault();
//     setEnteredNameTouched(true);
//     setEnteredLastNameTouched(true);
//     setEnteredEmailNameTouched(true);

//     if (firstNameRef.current.value === "") {
//       setEnteredNameIsValid(false);
//       return;
//     }

//     setEnteredNameIsValid(true);
//     setEnteredNameTouched(false);

//     if (LastNameRef.current.value === "") {
//       setEnteredLastNameIsValid(false);
//       return;
//     }

//     setEnteredLastNameIsValid(true);
//     setEnteredLastNameTouched(false);

//     if (emailNameRef.current.value === "") {
//       setEnteredEmailNameIsValid(false);
//       return;
//     }
//     setEnteredEmailNameIsValid(true);

//     setEnteredEmailNameIsValid(false);
//     setEnteredEmailNameTouched(false);
//   };

//   const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
//   const nameInputClasses = nameInputIsInvalid
//     ? "form-control invalid"
//     : "form-control";

//   const LastnameInputIsInvalid =
//     !enteredLastNameIsValid && enteredLastNameTouched;
//   const LastnameInputClasses = LastnameInputIsInvalid
//     ? "form-control invalid"
//     : "form-control";

//   const emailInputIsInvalid =
//     !enteredEmailNameIsValid && enteredEmailNameTouched;
//   const emailInputClasses = emailInputIsInvalid
//     ? "form-control invalid"
//     : "form-control";

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">First Name</label>
//         <input ref={firstNameRef} type="text" id="name" />
//       </div>
//       <div className={LastnameInputClasses}>
//         <label htmlFor="name">Last Name</label>
//         <input ref={LastNameRef} type="text" id="name" />
//       </div>
//       <div className={emailInputClasses}>
//         <label htmlFor="name">E-Mail Address</label>
//         <input ref={emailNameRef} type="text" id="name" />
//       </div>
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };



// export default BasicForm;
