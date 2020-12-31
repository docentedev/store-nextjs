export const currencyFormat = (value) => `$${new Intl.NumberFormat("es-CL").format(parseFloat(value))}`

export const calculateDiscount = (original, final) => {
    const e = original - final
    return `${((e*100)/original).toFixed(2)*1}%`
}