export const currencyFormat = (value) => `$${value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`

export const calculateDiscount = (original, final) => {
    const e = original - final
    return `${((e*100)/original).toFixed(2)*1}%`
}