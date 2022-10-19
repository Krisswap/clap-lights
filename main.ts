let 灯的开关 = 0
input.onSound(DetectedSound.Loud, function () {
    灯的开关 = 0
    if (input.soundLevel() >= 50) {
        basic.showString("A1")
    } else {
        basic.clearScreen()
    }
})
