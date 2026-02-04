function DateTime(){

    const options_date={
        timeZone:'Asia/Kolkata',
        year:'numeric',
        month:'2-digit',
        day:'2-digit',
    }
    const options_time={
        timeZone:'Asia/Kolkata',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit'
    }
    const indiaDate= new Intl.DateTimeFormat('en-In',options_date).format(new Date());
    const indiaTime= new Intl.DateTimeFormat('en-In',options_time).format(new Date());
    return <p>This is the curret time: {indiaDate} - {indiaTime}</p>
}

export default DateTime;