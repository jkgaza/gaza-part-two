var result = ""
var eventType = prompt("What type of event is this?")


switch (eventType) {
    case "casual":
        result = "something comfy"
        break
    case "semi-formal":
        result = "a polo"
        break
    case "formal":
        result = "a suit"
    default:
        console.log("You need to choose something to wear.")
}

if (eventType === "casual" || eventType === "semi-formal" || eventType === "formal") {

    var tempFarh = prompt("What is the temperature?")

    if (tempFarh < 54) {
        result = result + " a coat"
        console.log(result)
    } else if (tempFarh >= 54 && tempFarh <= 70) {
        result = result + " a jacket"
        console.log(result)
    } else if (tempFarh > 70) {
        result = result + " no jacket"
        console.log(result)
    } else {
        console.log("This needs to be a number.")
    }
}

console.log(result.concat("Since it is" + tempFarh + " and you are going to " + eventType + " you should wear" + result))


