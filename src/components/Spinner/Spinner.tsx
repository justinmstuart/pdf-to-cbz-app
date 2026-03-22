import { FC } from 'react';
import { BounceLoader } from 'react-spinners';

const Spinner: FC = () => {
  return (
    <div role="status" aria-label="Loading">
      <BounceLoader
        color={
          getComputedStyle(document.documentElement)
            .getPropertyValue('--primary-color')
            .trim() || ''
        }
      />
    </div>
  );
};

export default Spinner;
