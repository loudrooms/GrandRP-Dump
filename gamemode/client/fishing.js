const fishing_poses = [[-191.953, 790.357, 198.107, 15], [1100.834, -547.899, 56.962, 15], [-2627.999, 2545.483, 1.068, 15], [713.591, 4092.594, 34.728, 15], [-1612.614, 5262.241, 3.974, 15], [-1846.429, -1253.755, 8.616, 15]];
for (let s = 0; s < fishing_poses.length; s++) {
  let e = mp.colshapes.newSphere(fishing_poses[s][0], fishing_poses[s][1], fishing_poses[s][2], fishing_poses[s][3]);
  e.index = s + 1;
  e.fishing_shape = true;
}
global.at_fishing_shape = 0;
mp.events.add("playerEnterColshape", _0x1974b7 => {
  if (mp.colshapes.exists(_0x1974b7) && _0x1974b7.fishing_shape == 1) {
    main_browser.execute("APPS.state.hud.interact = 2;");
    at_fishing_shape = _0x1974b7.index;
    fishing_state = true;
    return;
  }
});
mp.events.add("playerExitColshape", _0x2855d2 => {
  if (mp.colshapes.exists(_0x2855d2) && _0x2855d2.fishing_shape == 1) {
    main_browser.execute("APPS.state.hud.interact = false;");
    at_fishing_shape = 0;
    fishing_state = false;
    return;
  }
});
global.fishing_state = true;
mp.events.add("ChangeFishingState", _0x5c4415 => {
  fishing_state = _0x5c4415 == 1;
});