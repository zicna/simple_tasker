const dateInPast = (stringDate) => {
    return Number(new Date(`${stringDate} 00:00:00`)) < Number(new Date())
}