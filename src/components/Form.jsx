import React, { useReducer } from "react";
import "./styles.css";

const initialState = {
    firstName: {
        value: "",
        error: null,
    },
    lastName: {
        value: "",
        error: null,
    },
    email: {
        value: "",
        error: null,
    },
};

const reducer = (state, action) => {
    switch (action.type) {
        case "firstName":
            return {
                ...state,
                firstName: {
                    value: action.payload,
                    error:
                        action.payload.length < 3
                            ? "First name must be at least 3 characters"
                            : null,
                },
            };
        case "lastName":
            return {
                ...state,
                lastName: {
                    value: action.payload,
                    error:
                        action.payload.length < 3
                            ? "Last name must be at least 3 characters"
                            : null,
                },
            };
        case "email":
            return {
                ...state,
                email: {
                    value: action.payload,
                    error:
                        action.payload.length < 3
                            ? "Email must be at least 3 characters"
                            : null,
                },
            };
        default:
            return state;
    }
};

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        dispatch({
            type: e.target.id,
            payload: e.target.value,
        });
    };

    const showFirstNameErrors = () => {
        if (state.firstName.error) {
            return <p className="error">{state.firstName.error}</p>;
        }
    };

    const showLastNameErrors = () => {
        if (state.lastName.error) {
            return <p className="error">{state.lastName.error}</p>;
        }
    };

    const showEmailErrors = () => {
        if (state.email.error) {
            return <p className="error">{state.email.error}</p>;
        }
    };

    return (
        <div className="container">
            <h1>Formulario</h1>
            <form className="form">
                <fieldset className="fieldset">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={handleChange} />
                </fieldset>
                {showFirstNameErrors()}
                <fieldset className="fieldset">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={handleChange} />
                </fieldset>
                {showLastNameErrors()}
                <fieldset className="fieldset">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange} />
                </fieldset>
                {showEmailErrors()}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
