import '../globals.css';

export const metadata = {
	title: 'Frontend developer',
	description:
		'A passionate Front-endD eveloper based in Taraz, Kazakhstan',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={'min-h-screen antialiased grainy font-sans'}>
				{children}
			</body>
		</html>
	);
}
