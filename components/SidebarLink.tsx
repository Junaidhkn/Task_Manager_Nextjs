'use client';
import Link from 'next/link';
import { Settings, User, Grid, Calendar } from 'react-feather';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const icons = { Settings, User, Grid, Calendar };

const SidebarLink = ({ link }) => {
	const pathname = usePathname();
	let isActive = false;

	if (pathname === link.link) {
		isActive = true;
	}

	const Icon = icons[link.icon];

	// // Above Code Explaination

	// const icons = {
	// 	Settings: 'settings-icon',
	// 	User: 'user-icon',
	// 	Grid: 'grid-icon',
	// 	Calendar: 'calendar-icon',
	// };
	// const link = { icon: 'User' };

	// const Icon = icons[link.icon];
	// Output: "user-icon"
	// console.log(Icon);

	return (
		<Link
			href={link.link}
			className='w-full flex justify-center items-center'>
			<Icon
				size={40}
				className={clsx(
					'stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out',
					isActive && 'stroke-violet-800',
				)}
			/>
		</Link>
	);
};

export default SidebarLink;
