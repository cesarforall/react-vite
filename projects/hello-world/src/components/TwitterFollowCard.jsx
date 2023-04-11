import { useState } from 'react';

export function TwitterFollowCard({ name, userName }) {
	const [isFollowing, setIsFollowing] = useState(false);

	console.log(`${name} is following: ${isFollowing}`);
	const imgSrc = `https://unavatar.io/${userName}`;

	const text = isFollowing ? 'Siguiendo' : 'Seguir';
	const buttonClassName = isFollowing ? 'tw-followCard__button--isFollowing' : 'tw-followCard__button';

	function handleClick() {
		setIsFollowing(!isFollowing);
	}

	return (
		<article className='tw-followCard'>
			<header className='tw-followCard__header'>
				<img className='tw-followCard__avatar' src={imgSrc} alt={`El avatar de ${userName}`} />
				<div className='tw-followCard-info'>
					<strong>{name}</strong>
					<span>@{userName}</span>
				</div>
			</header>
			<aside>
				<button className={buttonClassName} onClick={handleClick}>
					{text}
				</button>
			</aside>
		</article>
	);
}
