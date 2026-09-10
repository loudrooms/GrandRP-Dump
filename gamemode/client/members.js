function resolveOrgLeaderLogAdditionalField(_0x4a3405, _0x3004dd) {
  if (_0x4a3405 == null || _0x4a3405 === "") {
    return _0x4a3405;
  }
  let _0x42fe19 = String(_0x4a3405).replace(/\s+undefined$/i, "").trim();
  if (!_0x42fe19) {
    return "";
  }
  let _0x34387f = _0x3004dd(_0x42fe19);
  if (_0x34387f !== _0x42fe19) {
    return _0x34387f;
  }
  const _0x517791 = /^(\d+)(\s+[\s\S]+)$/.exec(_0x42fe19);
  if (_0x517791) {
    const _0x3db6cd = _0x3004dd(_0x517791[1]);
    if (_0x3db6cd !== _0x517791[1]) {
      return _0x3db6cd + _0x517791[2];
    }
  }
  return _0x34387f;
}
function mapOrgLeaderLogsResolveClient(_0x25a529) {
  if (!Array.isArray(_0x25a529)) {
    return [];
  }
  const _0x5187a5 = typeof resolveTranslationValue == "function" ? resolveTranslationValue : _0x4e1827 => _0x4e1827;
  return _0x25a529.map(_0x364866 => {
    if (!_0x364866 || typeof _0x364866 != "object") {
      return _0x364866;
    }
    const _0x3ec391 = parseInt(_0x364866.action, 10);
    if (_0x3ec391 !== 5 && _0x3ec391 !== 6 && _0x3ec391 !== 12) {
      return _0x364866;
    }
    const _0x23738b = Object.assign({}, _0x364866);
    if (_0x23738b.Additional != null && _0x23738b.Additional !== "") {
      _0x23738b.Additional = resolveOrgLeaderLogAdditionalField(_0x23738b.Additional, _0x5187a5);
    }
    return _0x23738b;
  });
}
global.LeaderMenuOpened = false;
mp.events.add("ClientOpenLeaderMenu", (_0x41322e, _0x9e2cd2, _0x4ff59d, _0x83e1b3, _0xcb2b1, _0x5c514c, _0x1f0bb4, _0x548c0e, _0x553ec3, _0x3f2df6, _0x1887da, _0x3c4569, _0xac6b2f = "{}", _0x2f35b1, _0x3ad2a8) => {
  LeaderMenuOpened = true;
  const _0x1f3c1d = JSON.parse(_0xac6b2f);
  const _0x2149eb = JSON.stringify({
    active_tab: 1,
    member: _0x41322e,
    my_rank: parseInt(_0x2f35b1, 10) || 0,
    my_pid: parseInt(_0x3ad2a8, 10) || 0,
    members: [],
    members_online: _0x3f2df6,
    members_offline: [],
    vehicles: [],
    logs: [],
    ranks: [],
    log_page: 0,
    can_load_more_online: _0x1887da,
    can_load_more_offline: false,
    can_load_more_blacklist: false,
    afk_players: _0x3c4569,
    log_action_choose: 0,
    org_name: _0x9e2cd2,
    balance: _0x4ff59d,
    warehouse_open: _0x83e1b3,
    show_members_map: mp.storage.data.organization_on_map == 1,
    announce: _0xcb2b1,
    blacklist: [],
    recruit_active: _0x5c514c,
    recruit_joined: _0x1f0bb4,
    recruit_time: _0x548c0e,
    recruit_description: _0x553ec3,
    can_warehouse: !!_0x1f3c1d.warehouse,
    can_announce: !!_0x1f3c1d.announce,
    can_givepremia: !!_0x1f3c1d.givepremia,
    can_meetplace: !!_0x1f3c1d.meetplace,
    can_recruit: !!_0x1f3c1d.recruit,
    can_edit_ranks: !!_0x1f3c1d.edit_ranks,
    can_blacklist: !!_0x1f3c1d.blacklist,
    can_disband: !!_0x1f3c1d.disband,
    can_changerank: !!_0x1f3c1d.changerank,
    can_uninvite: !!_0x1f3c1d.uninvite,
    can_capture: !!_0x1f3c1d.capture,
    is_leader: !!_0x1f3c1d.leader,
    show: true
  });
  main_browser.execute("APPS.state.leader_menu = " + _0x2149eb);
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseLeaderMenu = function () {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.leader_menu.show = false;");
    LeaderMenuOpened = false;
    mp.events.callRemote("Server_CloseLeaderMenu");
  }
};
mp.events.add("Client_CloseLeaderMenu", () => {
  CloseLeaderMenu();
});
mp.events.add("Client_Uninvite", _0x39bb65 => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_UninvitePlayer", _0x39bb65);
    }
  }
});
mp.events.add("Client_GivePremia", _0x4e6d48 => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GivePremia", _0x4e6d48);
    }
  }
});
mp.events.add("Client_ChangeRank", (_0x2b2929, _0x2508c9) => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      if (_0x2508c9) {
        mp.events.callRemote("Server_ChangeRank", _0x2b2929, _0x2508c9);
      } else {
        mp.events.callRemote("Server_ChangeRank", _0x2b2929);
      }
    }
  }
});
mp.events.add("Client_UpdatePlayerRank", (_0x48b765, _0x385227) => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    main_browser.execute("this.AppComponents.leader_menu.updatePlayerRank(" + _0x48b765 + ", " + _0x385227 + ");");
  }
});
mp.events.add("Client_RemoveOrgMember", _0x133e56 => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    main_browser.execute("this.AppComponents.leader_menu.removeOrgMember(" + _0x133e56 + ");");
  }
});
mp.events.add("Client_UpdateCaptureMember", (_0x20dd21, _0x5d155b) => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (_0x5d155b) {
      main_browser.execute("this.AppComponents.leader_menu.updateCaptureMember(" + parseInt(_0x20dd21) + ", true);");
    } else {
      main_browser.execute("this.AppComponents.leader_menu.updateCaptureMember(" + JSON.stringify(_0x20dd21) + ", false);");
    }
  }
});
mp.events.add("Client_DisbandOrg", () => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_DisbandOrg");
    }
  }
});
mp.events.add("Client_MemberInteract", _0xacef59 => {
  if ((LeaderMenuOpened || kpkOpen || _0xacef59 == "addblacklist") && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_MemberInteract", _0xacef59);
    }
  }
});
mp.events.add("Client_ParkVehicle", _0x4bcf03 => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ParkVehicle", _0x4bcf03);
    }
  }
});
mp.events.add("Client_SpawnVehicle", _0x4cc1dc => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SpawnVehicle", _0x4cc1dc);
    }
  }
});
mp.events.add("Client_ChangeVehicleRank", (_0xea6842, _0xb2d598) => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      if (_0xb2d598 != null && _0xb2d598 !== undefined && _0xb2d598 !== "") {
        mp.events.callRemote("Server_ChangeVehicleRank", _0xea6842, parseInt(_0xb2d598, 10));
      } else {
        mp.events.callRemote("Server_ChangeVehicleRank", _0xea6842);
      }
    }
  }
});
mp.events.add("Client_SetOrgAnnounce", _0x15b775 => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SetOrgAnnounce", String(_0x15b775 || ""));
    }
  }
});
mp.events.add("Client_ToggleOrgMembersMap", _0xf0598 => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.call("ShowOrgMembers_OnMap", !!_0xf0598);
    }
  }
});
mp.events.add("Client_LoadCaptureMembers", () => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_LoadCaptureMembers");
    }
  }
});
mp.events.add("Client_EditRankName", (_0x1f6aaf, _0x2a4839) => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_EditRankName", _0x1f6aaf, _0x2a4839);
    }
  }
});
mp.events.add("Client_AddOption", _0x18d629 => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_AddOption", _0x18d629);
    }
  }
});
mp.events.add("Client_DeleteOption", (_0x49d685, _0x411726) => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_DeleteOption", _0x49d685, _0x411726);
    }
  }
});
mp.events.add("Client_ListMemberLogs", _0x14f9d6 => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ListMemberLogs", _0x14f9d6);
    }
  }
});
mp.events.add("Client_ChooseLeaderMenuLogNumber", _0x5ea9e4 => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_ChooseLeaderMenuLogNumber", _0x5ea9e4);
    }
  }
});
mp.events.add("Client_LoadMoreLeaderMenu", () => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_LoadMoreLeaderMenu");
    }
  }
});
mp.events.add("Client_SearchLeaderLogsByName", _0x22e0ba => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_SearchLeaderLogsByName", _0x22e0ba);
    }
  }
});
mp.events.add("Client_GetOrgMembers", (_0x4d76c6, _0x125a74 = false) => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetOrgMembers", _0x4d76c6, _0x125a74);
    }
  }
});
mp.events.add("Client_AddRank", () => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_AddRank");
    }
  }
});
mp.events.add("Client_DeleteRank", _0x3867f1 => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_DeleteRank", _0x3867f1);
    }
  }
});
mp.events.add("LeaderMenu_Error", _0x4d3308 => {
  if (loggedin && !chatActive) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0x4d3308 + "');");
  }
});
mp.events.add("Client_LoadMemberLogs", _0x40443f => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_LoadMemberLogs", _0x40443f);
  }
});
mp.events.add("Client_UpdateMemberLogs", (_0x1d0ec6, _0x45528d, _0x55d0c1, _0x215391) => {
  if (!LeaderMenuOpened) {
    return;
  }
  if (_0x55d0c1) {
    main_browser.execute("APPS.state.leader_menu.logs = [];");
  }
  const _0x42ecfd = JSON.stringify(mapOrgLeaderLogsResolveClient(Array.isArray(_0x1d0ec6) ? _0x1d0ec6 : []));
  main_browser.execute("APPS.state.leader_menu.logs = APPS.state.leader_menu.logs.concat(" + _0x42ecfd + ");");
  main_browser.execute("APPS.state.leader_menu.log_page = " + _0x45528d + ";");
  main_browser.execute("APPS.state.leader_menu.log_action_choose = " + _0x215391 + ";");
  main_browser.execute("APPS.state.leader_menu.active_tab = 2;");
});
mp.events.add("Client_LoadAFKPlayersMembers", _0x3f1f32 => {
  if (LeaderMenuOpened) {
    main_browser.execute("APPS.state.leader_menu.afk_players = " + JSON.stringify(_0x3f1f32) + ";");
  }
});
mp.events.add("Client_LoadedMoreOrgMembers", (_0x5601b5, _0x241aae, _0x1e040c) => {
  if (!LeaderMenuOpened) {
    return;
  }
  const _0x6c6a13 = JSON.stringify(Array.isArray(_0x5601b5) ? _0x5601b5 : []);
  if (_0x1e040c === "online") {
    main_browser.execute("APPS.state.leader_menu.members_online = APPS.state.leader_menu.members_online.concat(" + _0x6c6a13 + ");");
    main_browser.execute("APPS.state.leader_menu.can_load_more_online = " + _0x241aae + ";");
  } else if (_0x1e040c === "offline") {
    main_browser.execute("APPS.state.leader_menu.members_offline = APPS.state.leader_menu.members_offline.concat(" + _0x6c6a13 + ");");
    main_browser.execute("APPS.state.leader_menu.can_load_more_offline = " + _0x241aae + ";");
  }
  main_browser.execute("APPS.state.leader_menu.active_tab = 1;");
});
mp.events.add("Client_UpdateOrgMenuMembers", (_0x3531db, _0xa696d8, _0x56e6a2) => {
  if (!LeaderMenuOpened) {
    return;
  }
  const _0x29c8b4 = JSON.stringify(Array.isArray(_0x3531db) ? _0x3531db : []);
  if (_0x56e6a2 === "online") {
    main_browser.execute("APPS.state.leader_menu.members_online = " + _0x29c8b4 + ";");
    main_browser.execute("APPS.state.leader_menu.can_load_more_online = " + _0xa696d8 + ";");
  } else if (_0x56e6a2 === "offline") {
    main_browser.execute("APPS.state.leader_menu.members_offline = " + _0x29c8b4 + ";");
    main_browser.execute("APPS.state.leader_menu.can_load_more_offline = " + _0xa696d8 + ";");
  }
  main_browser.execute("APPS.state.leader_menu.active_tab = 1;");
});
mp.events.add("Client_LoadMemberVehicles", () => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_LoadMemberVehicles");
  }
});
mp.events.add("Client_UpdateMemberVehicles", _0xad90d2 => {
  if (LeaderMenuOpened) {
    main_browser.execute("APPS.state.leader_menu.vehicles = " + JSON.stringify(_0xad90d2) + ";");
  }
});
mp.events.add("Client_LoadMemberRanks", () => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_LoadMemberRanks");
  }
});
mp.events.add("Client_LoadMemberBlacklist", (_0x27bc0b = false) => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    mp.events.callRemote("Server_LoadMemberBlacklist", _0x27bc0b);
  }
});
mp.events.add("Client_UpdateMemberBlacklist", (_0x325ddc, _0x387880 = false, _0x34cfd6 = false) => {
  if (!LeaderMenuOpened) {
    return;
  }
  const _0x85a0e6 = JSON.stringify(Array.isArray(_0x325ddc) ? _0x325ddc : []);
  if (_0x34cfd6) {
    main_browser.execute("APPS.state.leader_menu.blacklist = APPS.state.leader_menu.blacklist.concat(" + _0x85a0e6 + ");");
  } else {
    main_browser.execute("APPS.state.leader_menu.blacklist = " + _0x85a0e6 + ";");
  }
  main_browser.execute("APPS.state.leader_menu.can_load_more_blacklist = " + !!_0x387880 + ";");
});
mp.events.add("Client_UpdateMemberRecruit", (_0x1b8aa1, _0x18e27a, _0x464a41) => {
  if (LeaderMenuOpened) {
    main_browser.execute("APPS.state.leader_menu.recruit_active = " + _0x1b8aa1 + ";");
    main_browser.execute("APPS.state.leader_menu.recruit_time = " + _0x18e27a + ";");
    main_browser.execute("APPS.state.leader_menu.recruit_description = " + JSON.stringify(_0x464a41) + ";");
  }
});
mp.events.add("Client_CreateOrgRecruitment", (_0x3485c4, _0x5acd0d, _0x4862ca) => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_CreateOrgRecruitment", _0x3485c4, _0x5acd0d, _0x4862ca);
    }
  }
});
mp.events.add("Client_DeleteOrgRecruitment", () => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_DeleteOrgRecruitment");
    }
  }
});
mp.events.add("Client_UpdateOrgBalance", _0x3a27ad => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.leader_menu.balance = " + _0x3a27ad + ";");
  }
});
mp.events.add("Client_ReloadRanksLeader", _0x4dee2d => {
  if (LeaderMenuOpened) {
    main_browser.execute("APPS.state.leader_menu.ranks = [" + _0x4dee2d + "]");
  }
});
mp.events.add("Client_ReloadVehiclesLeader", _0x1b3f78 => {
  if (LeaderMenuOpened) {
    main_browser.execute("APPS.state.leader_menu.vehicles = " + JSON.stringify(_0x1b3f78) + ";");
  }
});
mp.events.add("Client_UpdateVehicleRankLeader", (_0x1978a9, _0x1f13b7) => {
  if (LeaderMenuOpened) {
    main_browser.execute("\n\t\t(APPS.state.leader_menu.vehicles.find(v => v.model === '" + _0x1978a9 + "') || {}).rank_name = '" + _0x1f13b7 + "';\n\t");
  }
});
mp.events.add("ClientReloadLeaderMenuMembers", _0x396640 => {
  if (!LeaderMenuOpened) {
    return;
  }
  const _0x18e270 = Array.isArray(_0x396640) ? _0x396640 : _0x396640 && typeof _0x396640 == "object" ? Object.values(_0x396640) : [];
  const _0x3618f4 = JSON.stringify(_0x18e270);
  main_browser.execute("APPS.state.leader_menu.members = " + _0x3618f4);
});
global.CertificateOpened = false;
mp.events.add("ShowMemberCertificate", (_0x511858, _0x547ff4, _0xe95069) => {
  if (GlobalCheck() == 1 && !localplayer.cuffed) {
    return;
  }
  let _0x40e1ee = "";
  if (_0x547ff4 == 1) {
    _0x40e1ee = "med";
  } else if (_0x547ff4 == 2) {
    _0x40e1ee = "army";
  } else if (_0x547ff4 == 3 || _0x547ff4 == 4) {
    _0x40e1ee = "officer";
  } else if (_0x547ff4 == 12) {
    _0x40e1ee = "fbi";
  } else if (_0x547ff4 == 13) {
    _0x40e1ee = "smi";
  } else if (_0x547ff4 == 14) {
    _0x40e1ee = "government";
  }
  const _0x19eb03 = "{\"acc_info\":" + _0x511858 + ",\"class_name\":'" + _0x40e1ee + "',\"has_headshot_photo\":" + _0xe95069 + ",\"show\":true}";
  main_browser.execute("APPS.state.sertificate = " + _0x19eb03);
  CertificateOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseCertificate = function () {
  if (CertificateOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.sertificate.show = false;");
    CertificateOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
global.PassportOpened = false;
mp.events.add("ShowPlayerPassport", (_0x319d41, _0x37967c, _0x445e62, _0x319145, _0x50b330, _0x58d0d0) => {
  if (GlobalCheck() == 1 && !localplayer.cuffed) {
    return;
  }
  const _0x1ce41b = "{\"name\":'" + _0x319d41 + "',\"level\":" + _0x37967c + ",\"pid\":" + _0x445e62 + ",\"gender\":" + _0x319145 + ",\"spouse\":'" + _0x50b330 + "',\"has_headshot_photo\":" + _0x58d0d0 + ",\"show\":true}";
  main_browser.execute("APPS.state.passport = " + _0x1ce41b);
  PassportOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.ClosePassport = function () {
  if (PassportOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.passport.show = false;");
    PassportOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
global.MemberInfoOpened = false;
mp.events.add("ShowMemberInfo", (_0x535d3d, _0x1623c8, _0x3f998e, _0x443bc2, _0x1b6e7f, _0x3d71a5, _0x350a65 = 0, _0x412f19 = [], _0xe2d2aa = 0, _0x14c5a5 = 0, _0x454645 = 0) => {
  CloseMenu();
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x23f699 = {
    org_name: _0x535d3d,
    orgExp: _0x350a65,
    questsCommonExp: _0xe2d2aa,
    maxQuestsCommonExp: _0x14c5a5,
    questsFactionReward: _0x454645,
    member: _0x1623c8,
    leader_name: _0x3f998e,
    rank_name: _0x443bc2,
    enter_org: _0x1b6e7f,
    orgQuests: Array.isArray(_0x412f19) ? _0x412f19 : [],
    leader_msg: _0x3d71a5,
    show: true
  };
  main_browser.execute("APPS.state.organization = " + JSON.stringify(_0x23f699));
  MemberInfoOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseMemberInfo = function () {
  if (MemberInfoOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.organization.show = false;");
    MemberInfoOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
mp.events.add("MembrInfo_Error", _0xdbd83d => {
  if (MemberInfoOpened && loggedin && !chatActive) {
    PlayAudioSound("DELETE", "HUD_DEATHMATCH_SOUNDSET");
    main_browser.execute("APP.sendErrorMessage('" + _0xdbd83d + "');");
  }
});
mp.events.add("Client_GetOrgQuest", _0x18bc52 => {
  if (MemberInfoOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_GetOrgQuest", _0x18bc52);
    }
  }
});
mp.events.add("Client_CloseMemberInfo", () => {
  if (MemberInfoOpened && loggedin && !chatActive) {
    CloseMemberInfo();
  }
});
const Member_Quests = [[{
  Title_name: language.Доктор[curr_lang],
  Title_Discription: language["Вылечить 30 человек"][curr_lang]
}, {
  Title_name: language.Зараза[curr_lang],
  Title_Discription: language["Вылечить 1 человека от болезней"][curr_lang]
}, {
  Title_name: language.Медикаменты[curr_lang],
  Title_Discription: language["Продать 5 медицинских наборов"][curr_lang]
}, {
  Title_name: language.Поставки[curr_lang],
  Title_Discription: language["Выполнить поставку медикаментов"][curr_lang]
}], [{
  Title_name: language["Отважный товарищ"][curr_lang],
  Title_Discription: language["Вылечить 3 военных"][curr_lang]
}, {
  Title_name: language.Защитник[curr_lang],
  Title_Discription: language["Участвовать в защите военной базы"][curr_lang]
}, {
  Title_name: language.Сила[curr_lang],
  Title_Discription: language["Выполнить 20 подтягиваний"][curr_lang]
}, {
  Title_name: language.Поставки[curr_lang],
  Title_Discription: language["Выполнить поставку амуниции"][curr_lang]
}], [{
  Title_name: language["На страже порядка"][curr_lang],
  Title_Discription: language["Посадить в тюрьму 1 нарушителя"][curr_lang]
}, {
  Title_name: language["Трезвый штат"][curr_lang],
  Title_Discription: language["Уничтожить 1 куст конопли"][curr_lang]
}, {
  Title_name: language.Автоугон[curr_lang],
  Title_Discription: language["Остановить угон транспорта"][curr_lang]
}, {
  Title_name: language.Розыск[curr_lang],
  Title_Discription: language["Выдать розыск 3 людям"][curr_lang]
}, {
  Title_name: language.Штрафы[curr_lang],
  Title_Discription: language["Выписать штраф 1 человеку"][curr_lang]
}], [{
  Title_name: language["На страже порядка"][curr_lang],
  Title_Discription: language["Посадить в тюрьму 1 нарушителя"][curr_lang]
}, {
  Title_name: language["Трезвый штат"][curr_lang],
  Title_Discription: language["Уничтожить 1 куст конопли"][curr_lang]
}, {
  Title_name: language.Автоугон[curr_lang],
  Title_Discription: language["Остановить угон транспорта"][curr_lang]
}, {
  Title_name: language.Розыск[curr_lang],
  Title_Discription: language["Выдать розыск 3 людям"][curr_lang]
}, {
  Title_name: language.Штрафы[curr_lang],
  Title_Discription: language["Выписать штраф 1 человеку"][curr_lang]
}], [{
  Title_name: language["Гроза района"][curr_lang],
  Title_Discription: language["Убить человека во время захвата территорий"][curr_lang]
}, {
  Title_name: language.Перевозчик[curr_lang],
  Title_Discription: language["Арендовать транспорт и перевезти груз в указанную точку"][curr_lang]
}, {
  Title_name: language.Эскобар[curr_lang],
  Title_Discription: language["Посадить 1 куст конопли"][curr_lang]
}, {
  Title_name: language.Стрелок[curr_lang],
  Title_Discription: language["Выиграть захват территории"][curr_lang]
}, {
  Title_name: language.Грабитель[curr_lang],
  Title_Discription: language["Ограбить 1 человека"][curr_lang]
}, {
  Title_name: language.Автоугонщик[curr_lang],
  Title_Discription: language["Угнать 1 машину"][curr_lang]
}], [{
  Title_name: language["На страже порядка"][curr_lang],
  Title_Discription: language["Посадить в тюрьму 1 нарушителя"][curr_lang]
}, {
  Title_name: language["Трезвый штат"][curr_lang],
  Title_Discription: language["Уничтожить 1 куст конопли"][curr_lang]
}, {
  Title_name: language.Автоугон[curr_lang],
  Title_Discription: language["Остановить угон транспорта"][curr_lang]
}, {
  Title_name: language.Розыск[curr_lang],
  Title_Discription: language["Выдать розыск 3 людям"][curr_lang]
}, {
  Title_name: language.Штрафы[curr_lang],
  Title_Discription: language["Выписать штраф 1 человеку"][curr_lang]
}], [{
  Title_name: language["Информация повсюду"][curr_lang],
  Title_Discription: language["Проверить 40 объявлений"][curr_lang]
}, {
  Title_name: language.Мероприятия[curr_lang],
  Title_Discription: language["Одобрить 1 мероприятие"][curr_lang]
}, {
  Title_name: language["Прямой эфир"][curr_lang],
  Title_Discription: language["Написать 5 сообщений в эфир"][curr_lang]
}], [{
  Title_name: language.Самооборона[curr_lang],
  Title_Discription: language["Продать лицензию на оружие"][curr_lang]
}, {
  Title_name: language.Инкассация[curr_lang],
  Title_Discription: language["Положить мешок с деньгами в транспорт инкассации"][curr_lang]
}, {
  Title_name: language["Семейные дела"][curr_lang],
  Title_Discription: language["Продать разрешение на создание семьи"][curr_lang]
}], [{
  Title_name: language["Гроза района"][curr_lang],
  Title_Discription: "Убить человека во время захвата бизнеса"
}, {
  Title_name: language.Перевозчик[curr_lang],
  Title_Discription: language["Арендовать транспорт и перевезти груз в указанную точку"][curr_lang]
}, {
  Title_name: language.Эскобар[curr_lang],
  Title_Discription: language["Посадить 1 куст конопли"][curr_lang]
}, {
  Title_name: language.Стрелок[curr_lang],
  Title_Discription: "Выиграть захват бизнеса"
}, {
  Title_name: language.Грабитель[curr_lang],
  Title_Discription: language["Ограбить 1 человека"][curr_lang]
}]];
let org_interval;
mp.events.add("Client_LanguageChanged", (_0x4801b0, _0x4a5d88, _0x3a1e0e) => {
  if (!_0x3a1e0e || !_0x4801b0 || !_0x4a5d88) {
    return;
  }
  const _0x4674b9 = global.buildLanguageReverseMap(_0x3a1e0e, _0x4801b0);
  for (let _0x2abb91 = 0; _0x2abb91 < Member_Quests.length; _0x2abb91++) {
    const _0x16fa58 = Member_Quests[_0x2abb91];
    if (Array.isArray(_0x16fa58)) {
      for (let _0x50b24f = 0; _0x50b24f < _0x16fa58.length; _0x50b24f++) {
        const _0x22e517 = _0x16fa58[_0x50b24f];
        if (_0x22e517 && typeof _0x22e517 == "object") {
          if (typeof _0x22e517.Title_name == "string") {
            _0x22e517.Title_name = global.retranslateTextByMap(_0x22e517.Title_name, _0x4674b9, _0x4a5d88);
          }
          if (typeof _0x22e517.Title_Discription == "string") {
            _0x22e517.Title_Discription = global.retranslateTextByMap(_0x22e517.Title_Discription, _0x4674b9, _0x4a5d88);
          }
        }
      }
    }
  }
});
mp.events.add("Start_New_OrgQuest", (_0x5a3eee, _0x55aa08) => {
  if (!_0x55aa08) {
    return;
  }
  let _0x44b24d = 0;
  if (_0x5a3eee == 1) {
    _0x44b24d = 0;
  } else if (_0x5a3eee == 2) {
    _0x44b24d = 1;
  } else if (_0x5a3eee == 3) {
    _0x44b24d = 2;
  } else if (_0x5a3eee == 4) {
    _0x44b24d = 3;
  } else if (_0x5a3eee >= 7 && _0x5a3eee <= 11) {
    _0x44b24d = 4;
  } else if (_0x5a3eee == 12) {
    _0x44b24d = 5;
  } else if (_0x5a3eee == 13) {
    _0x44b24d = 6;
  } else if (_0x5a3eee == 14) {
    _0x44b24d = 7;
  } else {
    if (!(_0x5a3eee >= 15) || !(_0x5a3eee <= 18)) {
      return;
    }
    _0x44b24d = 8;
  }
  if (!(_0x55aa08 > Member_Quests[_0x44b24d].length)) {
    QuestShow(Member_Quests[_0x44b24d][_0x55aa08 - 1].Title_name, Member_Quests[_0x44b24d][_0x55aa08 - 1].Title_Discription);
  }
});
mp.events.add("Client_ShowMemberQuestMoreInfo", (_0x19e0a7, _0x45c531) => {
  if (GlobalCheck() == 1) {
    return;
  }
  if (_0x45c531 == 0 || _0x45c531 > 6) {
    return;
  }
  let _0x3bd134 = 0;
  if (_0x19e0a7 == 1) {
    _0x3bd134 = 0;
  } else if (_0x19e0a7 == 2) {
    _0x3bd134 = 1;
  } else if (_0x19e0a7 == 3) {
    _0x3bd134 = 2;
  } else if (_0x19e0a7 == 4) {
    _0x3bd134 = 3;
  } else if (_0x19e0a7 >= 7 && _0x19e0a7 <= 11) {
    _0x3bd134 = 4;
  } else if (_0x19e0a7 == 12) {
    _0x3bd134 = 5;
  } else if (_0x19e0a7 == 13) {
    _0x3bd134 = 6;
  } else if (_0x19e0a7 == 14) {
    _0x3bd134 = 7;
  } else {
    if (!(_0x19e0a7 >= 15) || !(_0x19e0a7 <= 18)) {
      return;
    }
    _0x3bd134 = 8;
  }
  mp.events.call("OnPlayerDialogShow", 200, Member_Quests[_0x3bd134][_0x45c531 - 1].Title_name, TranslateText("Описание задания: {0}<br>Вы действительно хотите отказаться от задания?", Member_Quests[_0x3bd134][_0x45c531 - 1].Title_Discription), language.Отказаться[curr_lang], language.Отмена[curr_lang]);
});
mp.events.add("Client_LeaderMenu", () => {
  if (MemberInfoOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_LeaderMenu");
    }
  }
});
mp.events.add("Client_LeaveOrganization", () => {
  if (MemberInfoOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_LeaveOrganization");
    }
  }
});
mp.events.add("Client_MemberEventsMenu", () => {
  if (MemberInfoOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_MemberEventsMenu");
    }
  }
});
global.MemberEventsOpened = false;
mp.events.add("Client_OpenMemberEventsInfo", (_0xcfbc69, _0x104dd3) => {
  CloseMemberInfo();
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x545737 = "{\"member\":'" + _0xcfbc69 + "',\"current_day\":" + _0x104dd3 + ",\"show\":true}";
  main_browser.execute("APPS.state.members_event = " + _0x545737);
  MemberEventsOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseMemberEvents = function () {
  if (MemberEventsOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.members_event.show = false;");
    MemberEventsOpened = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
let org_meeting_blips;
let org_meeting_shape;
let org_blips = [];
function CloseOrganizationMembersInterval() {
  if (org_interval != null) {
    clearInterval(org_interval);
    org_interval = undefined;
  }
  mp.players.forEachInStreamRange(_0x17d9d7 => {
    if (_0x17d9d7 != localplayer && _0x17d9d7.blip !== 0) {
      _0x17d9d7.destroyBlip();
    }
  });
}
mp.events.add("ShowOrgMembers_OnMap", _0x3e6836 => {
  if (loggedin) {
    if (_0x3e6836 == 1) {
      if (!local_member) {
        return;
      }
      if (mp.storage.data.organization_on_map == null) {
        mp.storage.data.organization_on_map = true;
        mp.storage.flush();
      }
      ShowOrgMembersOnMap();
    } else if (_0x3e6836 == 0) {
      if (mp.storage.data.organization_on_map == 1) {
        mp.storage.data.organization_on_map = undefined;
        mp.storage.flush();
      }
      CloseOrganizationMembersInterval();
    }
  }
});
mp.events.add("InitilizeOrgMembersOnMap", () => {
  if (mp.storage.data.organization_on_map == 1) {
    ShowOrgMembersOnMap();
  }
});
global.ShowOrgMembersOnMap = function () {
  if (local_member) {
    org_interval ||= setInterval(function () {
      if (local_member) {
        if (org_blips) {
          for (let _0x2fdeeb = 0; _0x2fdeeb < org_blips.length; _0x2fdeeb++) {
            org_blips[_0x2fdeeb].destroy();
          }
          org_blips = [];
        }
        mp.players.forEachInStreamRange(_0x18587e => {
          if (_0x18587e != localplayer && local_member == _0x18587e.member && local_member > 0 && _0x18587e.dimension == localplayer.dimension && (_0x18587e.dimension == 0 || _0x18587e.dimension == 400) && _0x18587e.getAlpha() != 0) {
            if (_0x18587e.blip === 0) {
              _0x18587e.createBlip(1);
              _0x18587e.setBlipColor(83);
              if (_0x18587e.blip && mp.blips.exists(_0x18587e.blip)) {
                _0x18587e.blip.setCategory(7);
                _0x18587e.blip.setShowHeadingIndicator(true);
                _0x18587e.blip.name = language["Член организации"][curr_lang];
              }
            }
          } else if (_0x18587e != localplayer && _0x18587e.blip !== 0 && _0x18587e.getAlpha() == 0) {
            _0x18587e.destroyBlip();
          }
        });
      } else {
        CloseOrganizationMembersInterval();
      }
    }, 1000);
  }
};
global.MemberNewbiePreview = false;
mp.events.add("Client_OpenMemberNewbiePreview", _0x1b0875 => {
  if (GlobalCheck() == 1) {
    return;
  }
  if (_0x1b0875 == 1) {
    _0x1b0875 = 2;
  } else if (_0x1b0875 == 2) {
    _0x1b0875 = 3;
  } else if (_0x1b0875 == 3) {
    _0x1b0875 = 4;
  } else if (_0x1b0875 == 4) {
    _0x1b0875 = 5;
  } else if (_0x1b0875 >= 7 && _0x1b0875 <= 11) {
    _0x1b0875 = 6;
  } else if (_0x1b0875 == 12) {
    _0x1b0875 = 7;
  } else if (_0x1b0875 == 13) {
    _0x1b0875 = 8;
  } else if (_0x1b0875 == 14) {
    _0x1b0875 = 9;
  } else if (_0x1b0875 >= 15 && _0x1b0875 <= 18) {
    _0x1b0875 = 10;
  } else if (_0x1b0875 == 35) {
    _0x1b0875 = 1;
  }
  const _0x2e7e7d = "{\"member\":" + _0x1b0875 + ",\"show\":true}";
  main_browser.execute("APPS.state.family_idk = " + _0x2e7e7d);
  MemberNewbiePreview = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
});
global.CloseMemberPreview = function () {
  if (MemberNewbiePreview && loggedin && !chatActive) {
    main_browser.execute("APPS.state.family_idk.show = false;");
    MemberNewbiePreview = false;
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
  }
};
global.local_leader = 0;
mp.events.add("Client_ChangeLeaderState", _0x47234f => {
  local_leader = _0x47234f;
});
global.local_member = 0;
mp.events.add("Client_ChangeMemberState", _0x1fe163 => {
  local_member = _0x1fe163;
});
let fam_meeting_blips;
let fam_meeting_shape;
let org_meeting_timeout = null;
let fam_meeting_timeout = null;
mp.events.add("Client_MettingPoint", (_0x4d244d, _0x520046) => {
  if (_0x520046 == 1) {
    if (org_meeting_shape) {
      org_meeting_shape.destroy();
      org_meeting_shape = null;
    }
    if (org_meeting_blips) {
      org_meeting_blips.destroy();
      org_meeting_blips = null;
    }
    if (org_meeting_timeout != null) {
      clearTimeout(org_meeting_timeout);
      org_meeting_timeout = null;
    }
    org_meeting_shape = mp.colshapes.newCircle(_0x4d244d.x, _0x4d244d.y, 20);
    org_meeting_shape.is_org_gps_shape = true;
    org_meeting_blips = mp.blips.new(441, _0x4d244d, {
      name: language["Тoчкa нaзнaчeния"][curr_lang],
      color: 46,
      dimension: 0
    });
    org_meeting_blips.setRoute(true);
    org_meeting_timeout = setTimeout(() => {
      if (org_meeting_shape) {
        org_meeting_shape.destroy();
        org_meeting_shape = null;
      }
      if (org_meeting_blips) {
        org_meeting_blips.destroy();
        org_meeting_blips = null;
      }
      if (org_meeting_timeout != null) {
        clearTimeout(org_meeting_timeout);
        org_meeting_timeout = null;
      }
    }, 120000);
  } else if (_0x520046 == 2) {
    if (fam_meeting_blips) {
      fam_meeting_blips.destroy();
      fam_meeting_blips = null;
    }
    if (fam_meeting_shape) {
      fam_meeting_shape.destroy();
      fam_meeting_shape = null;
    }
    if (fam_meeting_timeout != null) {
      clearTimeout(fam_meeting_timeout);
      fam_meeting_timeout = null;
    }
    fam_meeting_shape = mp.colshapes.newCircle(_0x4d244d.x, _0x4d244d.y, 20);
    fam_meeting_shape.is_fam_gps_shape = true;
    fam_meeting_blips = mp.blips.new(441, _0x4d244d, {
      name: language["Тoчкa нaзнaчeния"][curr_lang],
      color: 46,
      dimension: 0
    });
    fam_meeting_blips.setRoute(true);
    fam_meeting_timeout = setTimeout(() => {
      if (fam_meeting_blips) {
        fam_meeting_blips.destroy();
        fam_meeting_blips = null;
      }
      if (fam_meeting_shape) {
        fam_meeting_shape.destroy();
        fam_meeting_shape = null;
      }
      if (fam_meeting_timeout != null) {
        clearTimeout(fam_meeting_timeout);
        fam_meeting_timeout = null;
      }
    }, 120000);
  }
  PlayAudioSound("Zone_Team_Capture", "DLC_Apartments_Drop_Zone_Sounds");
});
mp.events.add("playerEnterColshape", _0x466d91 => _0x466d91.is_org_gps_shape == 1 ? (org_meeting_shape && (org_meeting_shape.destroy(), org_meeting_shape = null), org_meeting_blips && (org_meeting_blips.destroy(), org_meeting_blips = null), org_meeting_timeout != null && (clearTimeout(org_meeting_timeout), org_meeting_timeout = null), void PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET")) : _0x466d91.is_fam_gps_shape == 1 ? (fam_meeting_blips && (fam_meeting_blips.destroy(), fam_meeting_blips = null), fam_meeting_shape && (fam_meeting_shape.destroy(), fam_meeting_shape = null), fam_meeting_timeout != null && (clearTimeout(fam_meeting_timeout), fam_meeting_timeout = null), void PlayAudioSound("3_2_1", "HUD_MINI_GAME_SOUNDSET")) : undefined);
mp.events.add("Client_UninviteTeamCapt", _0x11ca70 => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_UninvitePlayerTeamCapt", _0x11ca70);
    }
  }
});
mp.events.add("Client_AddMemberToCaptTeam", _0x5a5d07 => {
  if (LeaderMenuOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_AddMemberToCaptTeam", _0x5a5d07);
    }
  }
});
mp.events.add("Client_GetDailyOrgCase", () => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_GetDailyOrgCase");
  }
});
mp.events.add("Client_TakeOrgQuest", _0x3bbe52 => {
  if (!(new Date().getTime() - lastCheck < 500)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("Server_TakeOrgQuest", _0x3bbe52);
  }
});