import nextId from "react-id-generator";
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<>
			{options.map((option) => (
        <button
          key={nextId()}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
          className={s.button}
        >
          {option}
        </button>
			))}
		</>
	);
};
FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;