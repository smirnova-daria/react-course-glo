export const totalPriceItems = (order) => {
    const countToppings =
        order.toppings && order.toppings.filter((item) => item.checked).length
    const priceToppings = order.price * 0.1 * countToppings
    return (order.price + priceToppings) * order.count
}

export const formatCurrency = (value) =>
    value.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB',
    })
