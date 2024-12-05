def on_bluetooth_connected():
    basic.show_icon(IconNames.SMALL_SQUARE)
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    basic.show_icon(IconNames.SQUARE)
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

bluetooth.start_button_service()

