input.onButtonPressed(Button.A, function () {
    beaverCount += 1
    basic.showNumber(beaverCount)
    radio.sendValue(String.fromCharCode(deviceID), beaverCount)
})
input.onButtonPressed(Button.AB, function () {
    beaverCount = 0
    basic.showNumber(beaverCount)
    radio.sendValue(String.fromCharCode(deviceID), beaverCount)
})
input.onButtonPressed(Button.B, function () {
    deviceID += 1
    if (deviceID > 69) {
        deviceID = 65
    }
    basic.showString(String.fromCharCode(deviceID))
    basic.pause(1000)
    basic.showNumber(beaverCount)
})
let beaverCount = 0
let deviceID = 0
radio.setGroup(42)
deviceID = 65
beaverCount = 0
basic.showString(String.fromCharCode(deviceID))
basic.pause(1000)
basic.showNumber(beaverCount)
