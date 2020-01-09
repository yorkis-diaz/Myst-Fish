function Timer (timer, timerSecs, rod) {
    // timer.innerText = 'Time: '
    // let span = document.createElement('span')
    // span.innerText = '60'
    // timer.appendChild(span)
    const timerCountdown = setInterval(() => {
        rod;
        let countdown = `Time: `
        timer.innerText = countdown
        let span = document.createElement("span");
        span.innerText = `${
            timerSecs < 10 ? `0${timerSecs}` : timerSecs
        }`;
        if (timerSecs < 10) span.style.color = "red"
        timer.appendChild(span);
        if (rod.time > 0) {
            const newTime = timerSecs + rod.time
            span.innerText = `${newTime < 10 ? `0${newTime}` : newTime}`;
            timer.appendChild(span)
            timerSecs = newTime
            rod.time = 0
        }
        timerSecs -= 1
        debugger

        if (span.innerText === "00") {
            debugger
          StopInterval();
        }
    }, 1000);

    function StopInterval () {
        clearInterval(timerCountdown)
    }
}


export default Timer;