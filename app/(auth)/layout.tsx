import '@/styles/global.css';
import { Inter } from 'next/font/google';
import GlassPane from '@/components/GlassPane';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

export default function AuthRootLayout({ children }) {
	return (
		<html
			lang='en'
			className={inter.variable}>
			<head />
			<body className='h-screen w-screen rainbow-mesh p-6'>
				<GlassPane className='w-full h-full flex items-center justify-center'>
					{children}
				</GlassPane>
			</body>
		</html>
	);
}
