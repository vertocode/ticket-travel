import type { Meta, StoryObj } from '@storybook/react'

import TicketCard from '@/components/TicketList/TicketCard/TicketCard'
import tickets from '@/stories/data/cartItems.json'

const meta = {
	title: 'Ticket/TicketCard',
	component: TicketCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		ticket: {
			control: {
				type: 'object',
			},
		},
	},
} satisfies Meta<typeof TicketCard>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		ticket: tickets[6]
	}
}