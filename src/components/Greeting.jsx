import { useState } from 'react';
import '../styles/Greeting.css';

export default function Greeting({ messages }) {
	const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];

	const [count, setCount] = useState(0);
	const [greeting, setGreeting] = useState(messages[0]);

	return (
		<div>
			<p className="greeting">{greeting}! Thank you for visiting!</p>
			<button
				className="newgreet"
				onClick={() => {
					setGreeting(randomMessage());
					setCount((cnt) => cnt + 1);
				}}
			>
				New Greeting
			</button>
			<p>Count is {count}</p>
		</div>
	);
}
