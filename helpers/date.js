const dateInPast = (stringDate) => {
    return Number(new Date(`${stringDate} 00:00:00`)) < Number(new Date())
}

const formatDate = (stringDate) => {
    const locale = navigator.language
    const options ={
        weekday: "short",
        month: "long",
        day: "numeric",
        minute: "numeric",
        hour: "numeric"
    }
    return new Intl.DateTimeFormat(locale, options).format(new Date(stringDate))
}

const daysLeft = (date1, date2) => {
    return Math.floor((Number(new Date(date1)) - Number(new Date(date2))) / 1000 / 60 / 60 / 24);
}