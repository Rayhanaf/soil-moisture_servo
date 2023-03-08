let soil = 0
basic.forever(function () {
    soil = Math.idiv(pins.analogReadPin(AnalogPin.P1), 10)
    serial.writeValue("humid", soil)
    if (soil < 98) {
        basic.showIcon(IconNames.Fabulous)
        pins.servoWritePin(AnalogPin.P0, 0)
    } else {
        basic.showIcon(IconNames.Silly)
        pins.servoWritePin(AnalogPin.P0, 90)
    }
})
