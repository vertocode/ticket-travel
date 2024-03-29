import type { Metadata } from 'next'

// components
import Header from '@/components/Header/Header'
import StoreProvider from '@/components/StoreProvider'

// styles
import '@/styles/globals.scss'

export const metadata: Metadata = {
	title: 'Ticket Travel',
	applicationName: 'ticket-travel',
	description: 'Buy you tickets now!',
	creator: 'vertocode',
	icons: [{ url: '/logo.png' }],
	generator: 'Next.js'
}

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<StoreProvider>
					<Header />
					{children}
				</StoreProvider>
			</body>
		</html>
	)
}
