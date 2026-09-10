let PortBlip;
const EventPosition = new mp.Vector3(33.871, -2711.018, 5.38);
let portbattle_exitInterval;
mp.events.add("Client_SetPortBattleBlip", () => {
  PortBlip = mp.blips.new(550, EventPosition, {
    name: language.Порт[curr_lang],
    scale: 1,
    color: 5,
    drawDistance: 25,
    shortRange: true
  });
});
mp.events.add("Client_StartExitFromPortbattle", () => {
  let _0x376675 = 5;
  portbattle_exitInterval = setInterval(() => {
    if (_0x376675 > 0) {
      mp.game.ui.notifications.show(TranslateText("Вы покинете территорию через {0} секунд", _0x376675), false, 0, 6);
      _0x376675--;
    } else if (_0x376675 <= 0) {
      mp.events.callRemote("Server_EndExitFromPortbattle");
      if (portbattle_exitInterval != null) {
        clearInterval(portbattle_exitInterval);
      }
      portbattle_exitInterval = undefined;
    }
  }, 1000);
});
mp.events.add("Client_ClearExitPortbattle", () => {
  if (portbattle_exitInterval != null) {
    clearInterval(portbattle_exitInterval);
  }
  portbattle_exitInterval = undefined;
  if (mp.blips.exists(PortBlip)) {
    PortBlip.destroy();
  }
});