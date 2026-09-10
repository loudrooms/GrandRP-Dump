let CapturePrinterBlip = null;
global.player_can_get_flag = false;
global.have_money_machine = false;
mp.events.add("Client_PlayerHaveMoneyMachine", _0x17e97a => {
  have_money_machine = _0x17e97a;
});
mp.events.add("Client_MoneyMachineBlipDestroy", () => {
  if (CapturePrinterBlip != null) {
    CapturePrinterBlip.destroy();
    CapturePrinterBlip = null;
  }
});
mp.events.add("Client_CreateMoneyMachineBlip", () => {
  if (loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_RouteToMoneyMachine");
    }
  }
});