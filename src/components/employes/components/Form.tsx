/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';

interface FormProps {
  disableAddBtn: boolean;
  onAddEmployee: (employee: Employee) => void;
}

const initialEmployeeModel: Employee = { id: '', firstname: '', surname: '' };

const Form = ({ disableAddBtn = false, onAddEmployee }: FormProps) => {
  const [newEmployee, setNewEmployee] = useState<Employee>(initialEmployeeModel);
  const [error, setError] = useState<boolean>(false);

  const handleUpdateValue = (newValue: Partial<Employee>) => {
    setNewEmployee({ ...newEmployee, ...newValue });
  };

  const handleClickAdd = () => {
    if (!verify()) {
      setError(true);
    } else {
      onAddEmployee({ ...newEmployee, id: generateId() });
      setError(false);
      setNewEmployee(initialEmployeeModel);
    }
  };

  const verify = (): boolean => {
    // returns true if both filled
    return newEmployee.firstname?.length && newEmployee.surname?.length;
  };

  const generateId = (): string => {
    return new Date().toJSON();
  };

  return (
    <div css={styles.form}>
      <div>
        <label htmlFor="firstname_field">Enter firstname</label>
        <input
          id="firstname_field"
          onChange={({ target }) => {
            handleUpdateValue({ firstname: target.value });
          }}
          onFocus={() => setError(false)}
          value={newEmployee.firstname}
        />
      </div>
      <div>
        <label htmlFor="surname_field">Enter surname</label>
        <input
          id="surname_field"
          onChange={({ target }) => {
            handleUpdateValue({ surname: target.value });
          }}
          onFocus={() => setError(false)}
          value={newEmployee.surname}
        />
      </div>
      <div>
        <button css={styles.btnAdd} onClick={handleClickAdd} disabled={disableAddBtn}>
          Add new employee
        </button>
      </div>
      <div>{error && <p css={styles.errorMsg}>Please enter proper data</p>}</div>
    </div>
  );
};

const styles = {
  form: { marginTop: '25px' },
  btnAdd: {
    marginTop: '25px',
    cursor: 'pointer',
    border: '1px solid green',
    background: 'transparent',

    '&:hover': {
      background: 'green',
    },
  },
  errorMsg: { color: 'red' },
};

export default Form;
