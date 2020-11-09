import "./App.css";
import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import { useDispatch, useSelector } from "react-redux";
import {
  doOperation,
  saveInput,
  saveOperation,
  clearState,
} from "./actions/calculator.actions";

const App = (props) => {
  const dispatch = useDispatch();
  const calculator = useSelector((state) => state.calculator);
  const [operationPressed, changeOperation] = useState(false);
  const addToInput = (val) => {
    if (operationPressed) {
      dispatch(saveInput(val));
      changeOperation(false);
    } else {
      dispatch(saveInput(calculator.input + val));
    }
  };

  const addDot = (val) => {
    // only add dot if there is no dot
    if (calculator.input.indexOf(".") === -1) {
      dispatch(saveInput(calculator.input + val));
    }
  };

  const clearInput = () => {
    dispatch(clearState());
  };

  const add = () => {
    dispatch(saveOperation("plus"));
    changeOperation(true);
  };

  const subtract = () => {
    dispatch(saveOperation("subtract"));
    changeOperation(true);
  };
  const multiply = () => {
    dispatch(saveOperation("multiply"));
    changeOperation(true);
  };
  const divide = () => {
    dispatch(saveOperation("divide"));
    changeOperation(true);
  };
  const evaluate = () => {
    dispatch(doOperation());
    dispatch(saveOperation(""));
  };

  return (
    <div className='App'>
      <div className='calculator-wrapper'>
        <div className='row'>
          <Input>{calculator.input}</Input>
        </div>
        <div className='row'>
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={divide}>/</Button>
        </div>
        <div className='row'>
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={multiply}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={add}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addDot}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={evaluate}>=</Button>
          <Button handleClick={subtract}>-</Button>
        </div>
        <div className='row'>
          <ClearButton handleClear={clearInput}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
};

export default App;
