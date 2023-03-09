function getAdvice() {
    let request = new XMLHttpRequest()
    let url = "https://api.adviceslip.com/advice";
    request.open("GET", url)
    request.responseType = "json"
    request.send()
    request.onload = function () {
        let Advice = request.response
        document.getElementById("id").innerHTML = Advice.slip.id
        document.getElementById("qut").innerHTML = Advice.slip.advice
    }
}
