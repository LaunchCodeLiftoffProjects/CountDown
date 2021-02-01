// CODE FOR CLOCK

    let count = new Date("Nov 21, 2021 00:00:00").getTime();
    let anothercount = new Date("June 5, 2021 00:00:00").getTime();
    let x = setInterval(function(){
        let now = new Date().getTime();
        let d = count - now;
       
        let day = Math.floor(d/(1000 * 60 * 60 * 24));
        let hour = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minute = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
        let second = Math.floor((d % (1000 * 60)) / 1000);
    
        document.getElementById('day').innerHTML = day;
        document.getElementById('hour').innerHTML = hour;
        document.getElementById('minute').innerHTML = minute;
        document.getElementById('second').innerHTML = second;
    
        if(d <= 0){
            clearInterval(x);
        }
    }, 1000)
