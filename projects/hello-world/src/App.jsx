import './App.css';
import { TwitterFollowCard } from './components/TwitterFollowCard';

export function App() {
	return (
		<div style={{ width: '320px' }}>
			<TwitterFollowCard isFollowing name='César Almeida Reyes' userName='cesarforall' />
			<TwitterFollowCard isFollowing={false} name='Miguel Ángel Durán' userName='midudev' />
		</div>
	);
}
