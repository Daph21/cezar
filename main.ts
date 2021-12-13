let strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB)
let SoundLevel = 37
strip.setBrightness(10)
strip.show()
basic.forever(function () {
    if (input.soundLevel() > 1 && input.soundLevel() < SoundLevel) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Black))
    }
    if (input.soundLevel() > SoundLevel + 1 && input.soundLevel() < SoundLevel * 2) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Black))
    }
    if (input.soundLevel() > SoundLevel * 2 + 1 && input.soundLevel() < SoundLevel * 3) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Black))
    }
    if (input.soundLevel() > SoundLevel * 3 + 1 && input.soundLevel() < SoundLevel * 4) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Black))
    }
    if (input.soundLevel() > SoundLevel * 4 + 1 && input.soundLevel() < SoundLevel * 5) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Black))
    }
    if (input.soundLevel() > SoundLevel * 5 + 1 && input.soundLevel() < SoundLevel * 6) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
    }
    strip.show()
})
