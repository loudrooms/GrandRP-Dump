mp.events.add("Client_PushRecycleInfo", (_0x5b6bbf = []) => {
  main_browser.execute("APPS.state.creating_objects.items = " + JSON.stringify(_0x5b6bbf));
});
mp.events.add("Client_LoadRecycleDesign", () => {
  mp.events.callRemote("Server_LoadRecycleDesign");
});
mp.events.add("Client_RequestRecycleItems", (_0x2e6d78, _0x2bb7d4) => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RecycleItems", _0x2e6d78, _0x2bb7d4);
  }
});
mp.events.add("Client_UpdateShardsBalance", _0x35d62d => {
  main_browser.execute("APPS.state.donate.shards = " + _0x35d62d);
});
mp.events.add("Client_RequestBuyShards", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_RequestBuyShards");
  }
});