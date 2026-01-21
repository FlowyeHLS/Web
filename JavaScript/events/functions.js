// JavaScript source code
function setImage()
{
    let filename = document.getElementById("image-file");
    let reader = new FileReader();
    reader.onload = function (e)
    {
        document.getElementById("photo").src = e.target.result;
    }
    reader.readAsDataURL(filename.files[0]);
}
function setBackground() 
{
    let color_tool = document.getElementById(`choose-color`);
    let color = color_tool.value;
    //document.body.style.backgroundImage = "none";
    //document.body.style.backgroundColor = color;
    document.getElementById('color-sample').style.backgroundColor = color;
    document.getElementById('color-sample').style.width = "200px";
    document.getElementById('color-sample').style.height = "200px";
}
function switchBackground()
{
    let target = document.getElementById("switch-background").src;
    let path = target.split('/');
    let file = path[path.length - 1];
    //console.log(file);
    //if (file === "moon.png") document.getElementById("switch-background").src = "img/sun.png";
    //else document.getElementById("switch-background").src = "img/moon.png";

    //document.body.style.backgroundImage = "none";
    document.body.className = file === "moon.png" ? "dark" : "white";

    //document.body.style.backgroundColor = file === "moon.png" ? "black" : "white";
    //document.body.style.color = file === "moon.png" ? "white" : "black";

    document.getElementById("switch-background").src = `img/${file === "moon.png" ? "sun.png" : "moon.png"}`;
    /*document.getElementById("switch-background").src = file === "moon.png" ? "img/sun.png" : "img/moon.png"*/


}
document.getElementById("btn-start").onclick = function startCountdownTimer()
{
    let targetDate = document.getElementById("target-date");
    let targetTime = document.getElementById("target-time");
    let btnStart = document.getElementById("btn-start");
    if (btnStart.value === "Start")
    {
        btnStart.value = "Stop";
        targetDate.disabled = targetTime.disabled = true;
        tickCountdown();
    }
    else
    {
        btnStart.value = "Start";
        targetDate.disabled = targetTime.disabled = false;
    }
    //function tickCountdown()
    //{
    //    let now = new Date();

    //    let targetDateControl = document.getElementById("target-date");
    //    let targetTimeControl = document.getElementById("target-time");

    //    let targetDateValue = targetDateControl.valueAsDate;
    //    let targetTimeValue = targetTimeControl.valueAsDate;

    //    document.getElementById("target-date-value").innerHTML = targetDateValue;
    //    document.getElementById("target-time-value").innerHTML = targetTimeValue;


    //    document.getElementById("duration").innerHTML = typeof (targetTimeValue);
    //    targetTimeValue.setFullYear(targetDateValue.getFullYear());
    //    targetTimeValue.setMonth(targetDateValue.getMonth());
    //    targetTimeValue.setDate(targetDateValue.getDate());

    //    /*  console.log(`${targetDateValue}\t${targetTimeValue}`);*/

    //    let duration = targetTimeValue - now;
    //    document.getElementById("duration").innerHTML = duration;

    //    setTimeout(tickCountdown, 100);
    //}

    function tickCountdown() {
        let now = new Date();
        let targetDateControl = document.getElementById("target-date");
        let targetTimeControl = document.getElementById("target-time");

        let targetDateValue = targetDateControl.valueAsDate;
        let targetTimeValue = targetTimeControl.valueAsDate;

        targetDateValue.setHours(targetDateValue.getHours() + targetDateValue.getTimezoneOffset()/60);
        targetTimeValue.setHours(targetTimeValue.getHours() + targetTimeValue.getTimezoneOffset()/60);


        document.getElementById("duration").innerHTML = typeof (targetTimeValue);
        targetTimeValue.setFullYear(targetDateValue.getFullYear());
        targetTimeValue.setMonth(targetDateValue.getMonth());
        targetTimeValue.setDate(targetDateValue.getDate());

        document.getElementById("target-date-value").innerHTML = targetDateValue;
        document.getElementById("target-time-value").innerHTML = targetTimeValue;
        document.getElementById("current-time-value").innerHTML = now;

        let duration = targetTimeValue - now;
        document.getElementById("duration").innerHTML = duration;

        let timestamp = Math.trunc(duration / 1000);
        document.getElementById("timestamp").innerHTML = timestamp;

        setTimeout(tickCountdown, 100);
    }

}
