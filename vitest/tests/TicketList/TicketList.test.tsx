import { expect, test, vi, beforeAll, describe } from 'vitest'
import { renderWithProviders } from '@/vitest/utils/testUtils'
import TicketList from '@/components/TicketList/TicketList'

const { container, getByTestId } =  renderWithProviders(<TicketList />)

describe.concurrent('TicketList', () => {
	beforeAll(() => {
		vi.mock('next/navigation', () => {
			const actual = vi.importActual('next/navigation')
			return {
				...actual,
				useRouter: vi.fn(() => ({
					push: vi.fn(),
				})),
				useSearchParams: vi.fn(() => ({
					get: vi.fn(),
				})),
				usePathname: vi.fn(),
			}
		})
	})

	test('should match snapshot when there are tickets', () => {
		expect(container).toMatchSnapshot()
	})

	test('should show the pagination when there are more than 6 tickets', async () => {
		// wait the loading finishes
		await new Promise(resolve => setTimeout(resolve, 2000))
		expect(await getByTestId('pagination')).toBeDefined()
	})
})
