function formatDate(date) {
    date = new Date(date)

    return date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
}

export {formatDate}