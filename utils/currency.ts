export const formatCurrency = (currency: number, options?: { withCurrency?: boolean }): string => {
	const { withCurrency = true } = options || {}

	const valueWithCurrency = currency.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

	if (withCurrency) return valueWithCurrency

	return valueWithCurrency.replace('R$', '').trim()
}