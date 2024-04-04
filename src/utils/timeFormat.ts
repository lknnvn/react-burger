const timeFormat = (timestamp: string) => {
    const dateInput = new Date(timestamp);

    const currentDate = new Date();

    const time = `${dateInput.getHours()}:${dateInput.getMinutes().toString().padStart(2, '0')}`;

    const diffTime = Math.abs(currentDate.getTime() - dateInput.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (dateInput.toDateString() === currentDate.toDateString()) {
        return `Cегодня, ${time}`;
    } else if (dateInput.toDateString() === new Date(currentDate.setDate(currentDate.getDate() - 1)).toDateString()) {
        return `Вчера, ${time}`;
    } else {
        return `${diffDays} дня назад, ${time}`;
    }
};

export default timeFormat;