setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    
    let hrotation = 30 * htime + mtime / 2;  
    let mrotation = 6 * mtime;               
    let srotation = 6 * stime;               
    
    document.getElementById('hours').style.transform = `rotate(${hrotation}deg)`;
    document.getElementById('minutes').style.transform = `rotate(${mrotation}deg)`;
    document.getElementById('seconds').style.transform = `rotate(${srotation}deg)`;

    
    const formattedTime = `${htime.toString().padStart(2, '0')}:${mtime.toString().padStart(2, '0')}:${stime.toString().padStart(2, '0')}`;
    document.getElementById('digital-clock').innerText = formattedTime;
}, 1000);
