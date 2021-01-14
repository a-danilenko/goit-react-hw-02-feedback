import React, { Component } from 'react';
import Statistic from './components/Statistic/Statistic';
import FeetbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';

export default class App extends Component {
  state = {
		good: 0,
		neutral: 0,
		bad: 0
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;

    return (result)
   };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
		const { good } = this.state;
		const percentage = (good * 100) / result;
		return Math.round(percentage);
  };
  
  onLeaveFeedback = (e) => {
		const name = e.target.name;
		this.setState((prevState) => ({
			[name]: prevState[name] + 1
		}));
	};
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    const key = Object.keys(this.state);


    return (
      <>
        <Section title="Please leave feedback">
          <FeetbackOptions options={key} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        {total === 0 ? (
					<Notification message="No feedback given" />
				) : (
					<Section title="Statistics">
						<Statistic
							good={good}
							neutral={neutral}
							bad={bad}
							total={total}
							percentage={percentage}
						/>
					</Section>
				)}
      </>
    )
  }
}
