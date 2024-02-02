/**
 * Format date in brazilian format.
 *
 * @param {string} date - Date to be formatted in this format: "2022-08-31T12:32:09.794Z".
 * This is the same that API is returning.
 */
export const formatDate = (date: string) => {
	const data = new Date(date)

	return new Intl.DateTimeFormat('pt-BR', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	}).format(data)
}