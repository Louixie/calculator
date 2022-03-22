input.onButtonPressed(Button.A, function () {
    let Switch = 0
    if (Switch == 0) {
        Number_1 += 1
        basic.showNumber(Number_1)
    }
    if (Switch == 1) {
        Number_2 += 1
        basic.showNumber(Number_2)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
let Number_2 = 0
let Number_1 = 0
basic.showIcon(IconNames.Heart)
