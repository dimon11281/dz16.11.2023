function readCookie() {
    if (document.cookie.length == 0){
        return
    }    
    let myCookie = document.cookie;
    myCookie = myCookie.split("; ");
    myCookie.forEach(element => {
        let temp = element.split("=");
        console.log(temp);

        addDiv(JSON.parse(temp[1]))
    });
}
rgb_type = /^\\((25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9]), ?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9]), ?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9])\\)$/


readCookie()
function writeCookie(obg) {
    document.cookie = `${obg.name}=`+JSON.stringify(obg);
}

function readInputs() {
    let inputs = document.querySelectorAll("input");
    let newObg = {
        name: inputs[0].value,
        color: inputs[1].value,
        type: document.querySelector("#type").value
    }
    writeCookie(newObg)
    addDiv(newObg);
}

function addDiv(obg) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.innerText = obg.name + "\n" + obg.type + "\n" + obg.color;
    if (obg.type == "HEX") {
        newDiv.style.backgroundColor = obg.type 
    } else {
        newDiv.style.backgroundColor = obg.type + "(" + obg.color + ")"
    }
    
    document.querySelector(".gallery").appendChild(newDiv)
}

document.querySelector("button").addEventListener("click", readInputs);