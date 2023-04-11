import './App.css';
import { TwitterFollowCard } from './components/TwitterFollowCard';

export function App() {
	return (
		<div className='cardsContainer'>
			<TwitterFollowCard isFollowing name='César Almeida Reyes' userName='cesarforall' />
			<TwitterFollowCard isFollowing={false} name='Miguel Ángel Durán' userName='midudev' />
		</div>
	);
}
