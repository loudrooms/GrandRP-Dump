mp.events.add("Client_FamilyContracts_RequestLoadContracts", () => {
  if (FamilyOpened) {
    mp.events.callRemote("Server_FamilyContracts_RequestLoadContracts");
  }
});
mp.events.add("Client_FamilyContracts_LoadAvailableContracts", _0x4ae86e => {
  if (FamilyOpened) {
    main_browser.execute("\n        APPS.state.family.availableContracts = " + JSON.stringify(_0x4ae86e) + ";\n        this.AppComponents.family.page_number = 11;\n    ");
  }
});
mp.events.add("Client_FamilyContracts_LoadActiveContract", _0x43d6d6 => {
  if (FamilyOpened) {
    main_browser.execute("\n        APPS.state.family.activeContract = " + JSON.stringify(_0x43d6d6) + ";\n        APPS.state.family.availableContracts = [];\n        this.AppComponents.family.page_number = 11;\n    ");
  }
});
mp.events.add("Client_FamilyContracts_TakeContract", (_0x27dcfd, _0x2f1e9b, _0x462be1) => {
  mp.events.callRemote("Server_FamilyContracts_TakeContract", _0x27dcfd, _0x2f1e9b, _0x462be1);
});
mp.events.add("Client_FamilyContracts_AddResourceToContract", (_0x52322c, _0x4d5619) => {
  mp.events.callRemote("Server_FamilyContracts_AddResourceToContract", _0x52322c, _0x4d5619);
});
mp.events.add("Client_FamilyContracts_ClaimReward", () => {
  mp.events.callRemote("Server_FamilyContracts_ClaimReward");
});