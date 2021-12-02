import  React, { useState , useEffect } from 'react'

export const DateTime = (data) => {
    const birthDay = data.birthday;
    const currentDate = new Date();

    let diffInSeconds = Math.abs(birthDay - currentDate) / 1000;
    let daysInitial = Math.floor(diffInSeconds / 60 / 60 / 24);
    let hoursInitial = Math.floor(diffInSeconds / 60 / 60 % 24);
    let minutesInitial = Math.floor(diffInSeconds / 60 % 60);
    let secondsInitial = Math.floor(diffInSeconds % 60);
    let millisecondsInitial = Math.round((diffInSeconds - Math.floor(diffInSeconds)) * 1000);

    let [days, setDays] = useState(daysInitial);
    let [hours, setHours] = useState(hoursInitial);
    let [minutes, setMinutes] = useState(minutesInitial);
    let [seconds, setSeconds] = useState(secondsInitial);
    let [milliseconds, setMilliseconds] = useState(secondsInitial);

    let nextBirthday = new Date(`${currentDate.getFullYear()}-${birthDay.getMonth() + 1}-${birthDay.getDate()} 00:00:00`);
    if (nextBirthday.getTime() < currentDate.getTime()) {
        nextBirthday = new Date(`${currentDate.getFullYear() + 1}-${birthDay.getMonth() + 1}-${birthDay.getDate()} 00:00:00`);
    }
    let diffInSecondsBirthDay = Math.abs(nextBirthday - currentDate) / 1000;
    let daysInitialBirthDay = Math.floor(diffInSecondsBirthDay / 60 / 60 / 24);
    let hoursInitialBirthDay = Math.floor(diffInSecondsBirthDay / 60 / 60 % 24);

    let [daysBirthDay, setDaysBirthDay] = useState(daysInitialBirthDay);
    let [hoursBirthDay, setHoursBirthDay] = useState(hoursInitialBirthDay);

    useEffect(() => {
        const timer = setInterval(() => {
            daysInitial = Math.floor(diffInSeconds / 60 / 60 / 24);
            hoursInitial = Math.floor(diffInSeconds / 60 / 60 % 24);
            minutesInitial = Math.floor(diffInSeconds / 60 % 60);
            secondsInitial = Math.floor(diffInSeconds % 60);
            millisecondsInitial = Math.round((diffInSeconds - Math.floor(diffInSeconds)) * 1000);

            setDays(daysInitial);
            setHours(hoursInitial);
            setMinutes(minutesInitial);
            setSeconds(secondsInitial);
            setMilliseconds(millisecondsInitial);

            daysInitialBirthDay = Math.floor(diffInSecondsBirthDay / 60 / 60 / 24);
            hoursInitialBirthDay = Math.floor(diffInSecondsBirthDay / 60 / 60 % 24);

            setDaysBirthDay(daysInitialBirthDay);
            setHoursBirthDay(hoursInitialBirthDay);
        }, 1000 );

        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <div>
            <h1>
                El ser humano {data.name} ha vivido un total de: <br/>
                {days} días <br/>
                {hours} horas <br/>
                {minutes} minutos <br/>
                {seconds} segundos <br/>
            </h1>
            <br/>
            <h1>Su hobbie favorito es: {data.hobby}</h1>
            <br/>
            <h1>Faltan {daysBirthDay} días, {hoursBirthDay} horas para su cumpleaños</h1>
        </div>
    )
}

export default DateTime
