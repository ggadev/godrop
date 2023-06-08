let exchangeRates = {
    USD: 1,
    EUR: 0.93,
    PLN: 4.22
}

function formatPrice(price) {
    const currency = localStorage.getItem('currency') || 'PLN';

    price = (price*exchangeRates[currency]).toFixed(2);
    price = parseFloat(price);

    return "v"+price.toLocaleString('en-US', {
        style: 'currency',
        currency,
        currencyDisplay: 'symbol',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

export { formatPrice };