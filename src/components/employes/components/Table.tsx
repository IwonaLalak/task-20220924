/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';

interface TableProps {
  data: Employee[];
  onDeleteEmployee: (id: string) => void;
}

const Table = ({ data, onDeleteEmployee }: TableProps) => {
  if (!data.length) return <p>Please add new employee</p>;
  else
    return (
      <table css={styles.table}>
        <tr>
          <th>Firstname</th>
          <th>Surname</th>
          <th></th>
        </tr>
        {data.map(({ id, firstname, surname }) => (
          <tr key={id}>
            <td>{firstname}</td>
            <td>{surname}</td>
            <td>
              <button css={styles.btnDelete} title="Delete item" onClick={() => onDeleteEmployee(id)}>
                delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
};

const styles = {
  table: {
    marginTop: '25px',
    textAlign: 'center',

    '& th': {
      fontWeight: 600,
      padding: '15px',
    },
    '& td': {
      padding: '15px',
    },
  } as CSSObject,
  btnDelete: {
    cursor: 'pointer',
    border: '1px solid red',
    background: 'transparent',

    '&:hover': {
      background: 'red',
    },
  },
};

export default Table;
