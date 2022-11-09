import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import css from '../Button/Button.module.css';

export default function ButtonLoad({ onNextFetch }) {
  return (
    <div className={css.buttonLoadMore}>
      <Button
        type="button"
        onClick={onNextFetch}
        variant="outlined"
        startIcon={<AutoAwesomeIcon />}
      >
        Load more
      </Button>
    </div>
  );
}

ButtonLoad.prototype = {
  onNextFetch: PropTypes.func.isRequired,
};
