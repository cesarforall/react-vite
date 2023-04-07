import './App.css';
import { TwitterFollowCard } from './components/TwitterFollowCard';

export function App() {
	return (
		<div style={{ width: '320px' }}>
			<TwitterFollowCard name='César Almeida Reyes' userName='cesarforall' />
			<TwitterFollowCard name='Miguel Ángel Durán' userName='midudev' />
		</div>
	);
}
