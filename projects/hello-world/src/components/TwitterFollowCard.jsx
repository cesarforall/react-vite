export function TwitterFollowCard({ name, userName, isFollowing }) {
	console.log(`${name} is following: ${isFollowing}`);
	const imgSrc = `https://unavatar.io/${userName}`;
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
				<button>Seguir</button>
			</aside>
		</article>
	);
}
