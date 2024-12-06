bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.SmallSquare)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Square)
})
basic.showIcon(IconNames.Square)
bluetooth.startButtonService()
bluetooth.startLEDService()
bluetooth.startAccelerometerService()
bluetooth.startTemperatureService()
