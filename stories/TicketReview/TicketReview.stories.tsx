import type { Meta, StoryObj } from '@storybook/react'

import TicketReview from '@/components/TicketReview/TicketReview'
import tickets from '@/stories/data/cartItems.json'

const meta = {
	title: 'Ticket/TicketReview',
	component: TicketReview,
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
} satisfies Meta<typeof TicketReview>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		ticket: tickets[4]
	}
}