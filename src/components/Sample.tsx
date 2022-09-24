/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

interface Props {
  sampleValue: string;
  custom: CustomType;
}

const Sample = ({ sampleValue }: Props) => {
  const styles = {
    box: {
      margin: '25px',
      padding: '25px',
      border: '1px solid dodgerblue',
    },
  };

  return (
    <div css={styles.box} onClick={() => console.log(styles)}>
      test box {sampleValue}
    </div>
  );
};

export default Sample;
