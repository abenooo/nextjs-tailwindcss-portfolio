import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

function AboutCounter() {
	useCountUp({ ref: 'experienceCounter', end: 3, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: 20, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 92, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 12, duration: 2 });

	return (
		<div className="mt-10 shadow-sm sm:mt-20 bg-primary-light dark:bg-ternary-dark">
			<div className="container items-center block py-20 mx-auto font-general-medium sm:flex sm:justify-between">
				<CounterItem
					title="Years of experience"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Stars on GitHub"
					counter={<span id="githubStarsCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Positive feedback"
					counter={<span id="feedbackCounter" />}
					measurement="%"
				/>

				<CounterItem
					title="Projects completed"
					counter={<span id="projectsCounter" />}
					measurement="%"
				/>
			</div>
		</div>
	);
}

export default AboutCounter;
