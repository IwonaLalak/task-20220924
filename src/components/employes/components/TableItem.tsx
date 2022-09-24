/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

interface TableItemProps {
  item: Employee;
  onClickDelete: () => void;
}

const TableItem = ({ item, onClickDelete }: TableItemProps) => {
  const rowRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (rowRef.current) {
      rowRef.current.addEventListener('mouseover', ({ currentTarget }) => {
        if (currentTarget) currentTarget.style.background = 'red';
      });
      rowRef.current.addEventListener('mouseout', ({ currentTarget }) => {
        if (currentTarget) currentTarget.style.background = 'transparent';
      });
    }

    return () => {
      if (rowRef.current) {
        rowRef.current.removeEventListener('mouseover');
        rowRef.current.removeEventListener('mouseout');
      }
    };
  }, [rowRef]);

  const { id, firstname, surname } = item;
  return (
    <tr key={id} ref={rowRef}>
      <td>{firstname}</td>
      <td>{surname}</td>
      <td>
        <button css={styles.btnDelete} title="Delete item" onClick={() => onClickDelete()}>
          delete
        </button>
      </td>
    </tr>
  );
};

const styles = {
  btnDelete: {
    cursor: 'pointer',
    border: '1px solid red',
    background: 'transparent',

    '&:hover': {
      background: 'red',
    },
  },
};

export default TableItem;
