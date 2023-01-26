import { Section } from 'components/Section/Section';
import css from '../FeedbackOptions/FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title={'Leave your feedback :)'}>
      <div className={css.buttonsWrapper}>
        {options.map(option => (
          <button
            className={css.btn}
            key={option}
            name={option}
            onClick={onLeaveFeedback}
            type="button"
          >
            {option.toLowerCase()}
          </button>
        ))}
      </div>
    </Section>
  );
};
