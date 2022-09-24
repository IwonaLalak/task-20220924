/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';
import TableItem from './TableItem';

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
        {data.map(item => (
          <TableItem item={item} onClickDelete={() => onDeleteEmployee(item.id)} />
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
};

export default Table;
