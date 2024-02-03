import type { Meta, StoryObj } from '@storybook/react'

import Filters from '@/components/Filters/Filters'

const meta = {
	title: 'Filter/Filters',
	component: Filters,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Filters>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
}