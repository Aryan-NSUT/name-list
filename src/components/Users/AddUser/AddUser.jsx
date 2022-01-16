import React, { useState,Fragment } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
const AddUser = (props) => {
  const [enterUsername, setenterUsername] = useState("");
  const [enterAge, setenterAge] = useState("");
  const [error, seterror] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enterAge.trim().length === 0 || enterUsername.trim().length === 0) {
      seterror({
        title: "Invalid Input",
        message: "Please enter a valid input (Username or Age missing)",
      });
      return;
    }

    if (+enterAge < 0) {
      seterror({
        title: "Invalid Age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    // console.log(enterUsername, enterAge);
    props.onAddUser(enterUsername, enterAge);
    setenterUsername("");
    setenterAge("");
  };

  const addNameHandler = (events) => {
    setenterUsername(events.target.value);
  };

  const addAgeHandler = (events) => {
    setenterAge(events.target.value);
    // console.log(events.target.value);
  };

  const setErrorHandler = () => {
    seterror(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClickClose={setErrorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enterUsername}
            onChange={addNameHandler}
          />
          <label htmlFor="Age">Age (in years)</label>
          <input
            type="number"
            id="Age"
            value={enterAge}
            onChange={addAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
