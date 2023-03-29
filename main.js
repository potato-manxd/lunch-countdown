setInterval(() => {
    document.querySelectorAll("p")[3].textContent -= 1
}, 1000)

setInterval(() => {
    if (document.querySelectorAll("p")[3].textContent <= 0) {
        document.querySelectorAll("p")[2].textContent -= 1
        document.querySelectorAll("p")[3].textContent = 60
    }
    if (document.querySelectorAll("p")[2].textContent <= 0) {
        document.querySelectorAll("p")[1].textContent -= 1
        document.querySelectorAll("p")[2].textContent = 60
    }
    if (document.querySelectorAll("p")[1].textContent <= 0) {
        document.querySelectorAll("p")[0].textContent -= 1
        document.querySelectorAll("p")[1].textContent = 60
    }

}, 10)