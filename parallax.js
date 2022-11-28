let transform = document.getElementById("transform-enabled")
let angleslider = document.getElementById("angleslider")
let xslider = document.getElementById("xslider")
let yslider = document.getElementById("yslider")

let r = document.querySelector(":root");

function setTransform(speed, rot, x, y) {
    r.style.setProperty("--transition-speed", speed)
    r.style.setProperty("--rotation", rot)
    r.style.setProperty("--x", x)
    r.style.setProperty("--y", y)
}

transform.addEventListener("input", () => {
    if (transform.checked === true) {
        setTransform("0.3s", "0.05deg", "-5px", "-10px");
    } else {
        setTransform("0.3s", "0deg", "0px", "0px");
    }

    setTimeout(function(){
        r.style.setProperty("--transition-speed", "0s");
    }, 300);
})

angleslider.addEventListener("input", () => {
    r.style.setProperty("--rotation", angleslider.value / 100 + "deg")
})

xslider.addEventListener("input", () => {
    r.style.setProperty("--x", xslider.value + "px")
})

yslider.addEventListener("input", () => {
    r.style.setProperty("--y", yslider.value / 100 + "px")
})