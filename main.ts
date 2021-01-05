input.onButtonPressed(Button.AB, function () {
    for (let value of vahsi) {
        basic.showString("" + (value))
    }
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    for (let value of evcil) {
        basic.showString("" + (value))
    }
    basic.clearScreen()
})
let vahsi: string[] = []
let evcil: string[] = []
let hayvanlar = ["Aslan", "kedi", "kopek", "Ayi", "Maymun"]
while (hayvanlar.length > 0) {
    basic.showString("" + (hayvanlar[hayvanlar.length - 1]))
    if (input.buttonIsPressed(Button.A)) {
        evcil.push(hayvanlar.pop())
    } else if (input.buttonIsPressed(Button.B)) {
        vahsi.push(hayvanlar.pop())
    }
    basic.pause(500)
    basic.clearScreen()
}
