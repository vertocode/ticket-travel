import type { Meta, StoryObj } from '@storybook/react'

import CartMenu from '@/components/CartButton/CartMenu/CartMenu'
import tickets from '@/stories/data/cartItems.json'
import { Provider } from 'react-redux'
import { makeStore } from '@/lib/store'

const store = makeStore()
const cartTickets = tickets.map((ticket) => ({ ...ticket, quantity: 1 }))

const meta = {
	title: 'Cart/CartMenu',
	component: CartMenu,
	decorators: [
		Story => (
			<Provider store={store}>
				<Story />
			</Provider>)
	],
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		tickets: {
			control: {
				type: 'object',
			},
		},
	},
} satisfies Meta<typeof CartMenu>

export default meta
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		tickets: cartTickets.slice(0, 2),
		className: 'storybook-mode'
	}
}