/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';

const mockedEmployes: Employee[] = [
  {
    id: new Date().toJSON(),
    firstname: 'Jan',
    surname: 'Kowalski',
  },
];

const Employes = () => {
  const [data, setData] = useState<Employee[]>(mockedEmployes);

  const handleAddEmployee = (newEmployee: Employee) => {
    setData([...data, newEmployee]);
  };

  const handleDeleteEmployee = (id: string) => {
    console.log('deleting ' + id);
    setData([...data.filter((item: Employee) => item.id !== id)]);
  };

  return (
    <>
      <Table data={data} onDeleteEmployee={handleDeleteEmployee} />
      <Form onAddEmployee={handleAddEmployee} disableAddBtn={data.length === 5} />
    </>
  );
};

export default Employes;
