const sound_volume = 0.2;
let second_cam;
const fly_cam_poses = [[18.663, -1166.938, 217.727, -190.016, -596.911, 89.198], [-421.892, -464.565, 433.908, -206.736, -723.854, 184.873], [-1303.782, -919.252, 54.546, -1389.734, -970.273, 12.857], [-1363.409, -960.531, 23.639, -1384.603, -974.486, 12.012], [-1144.52, 157.787, 225.555, -816.239, 466.835, 97.077], [-299.237, 239.954, 212.824, -523.085, 476.108, 108.166], [-95.321, -1088.156, 47.623, -61.873, -1096.397, 30.944], [-45.018, -1144.463, 45.271, -41.449, -1107.48, 27.805], [1123.657, 42.072, 89.006, 1114.54, 68.816, 79.89], [1148.062, 71.96, 89.006, 1123.509, 72.672, 82.403], [1301.124, -2577.603, 58.361, 1272.735, -2559.761, 42.016], [1284.22, -2526.461, 57.036, 1274.859, -2553.721, 45.516], [-838.094, -968.895, 43.773, -1013.762, -1053.419, -1.187], [-1179.432, -1153.547, 31.628, -1245.075, -1187.129, 15.849], [-767.872, -958.854, 37.937, -742.096, -945.266, 26.097], [-691.997, -959.602, 36.315, -709.216, -921.381, 18.014], [-697.205, -991.116, 47.977, -659.888, -950.061, 20.547], [-635.382, -954.684, 29.338, -655.367, -942.296, 21.212], [622.615, 73.922, 121.836, 687.011, 120.043, 79.755], [779.693, 145.859, 118.864, 688.335, 143.211, 79.943], [1833.052, 3339.809, 70.11, 1878.05, 3407.01, 40.391], [2157.421, 3583.257, 143.593, 1965.339, 3523.688, 38.559], [1410.697, -2363.382, 99.273, 1428.87, -2232.198, 59.844], [1638.969, -1842.42, 136.705, 1353.978, -1695.28, 60.073], [333.163, -866.087, 133.529, 434.19, -982.051, 33.239], [389.131, -994.398, 43.273, 424.853, -992.089, 32.95], [9.319, -1857.585, 75.248, 95.657, -1940.245, 19.766], [75.675, -1948.502, 33.179, 110.307, -1939.856, 19.804], [-529.591, -1361.984, 320.996, -559.114, -462.541, 32.85], [-566.769, -120.27, 178.036, -565.946, 201.247, 85.248], [-239.888, -858.567, 107.369, -211.711, -1024.807, 29.141], [-218.222, -994.065, 40.791, -205.931, -1018.364, 29.138]];
function InterPolateCamera(_0x58a02, _0x5576a8) {
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  if (second_cam != null) {
    second_cam.destroy();
    second_cam = null;
  }
  second_cam = mp.cameras.new("default", new mp.Vector3(fly_cam_poses[_0x58a02 - 1][0], fly_cam_poses[_0x58a02 - 1][1], fly_cam_poses[_0x58a02 - 1][2]), new mp.Vector3(0, 0, 0), 40);
  second_cam.pointAtCoord(fly_cam_poses[_0x58a02 - 1][3], fly_cam_poses[_0x58a02 - 1][4], fly_cam_poses[_0x58a02 - 1][5]);
  localcamera = mp.cameras.new("default", new mp.Vector3(fly_cam_poses[_0x5576a8 - 1][0], fly_cam_poses[_0x5576a8 - 1][1], fly_cam_poses[_0x5576a8 - 1][2]), new mp.Vector3(0, 0, 0), 40);
  localcamera.pointAtCoord(fly_cam_poses[_0x5576a8 - 1][3], fly_cam_poses[_0x5576a8 - 1][4], fly_cam_poses[_0x5576a8 - 1][5]);
  localcamera.setActive(true);
  let _0x48589a = 0;
  if (_0x58a02 == 1) {
    _0x48589a = 29000;
  } else if (_0x58a02 == 3) {
    _0x48589a = 9000;
  } else if (_0x58a02 == 5) {
    _0x48589a = 10000;
  } else if (_0x58a02 == 7 || _0x58a02 == 9) {
    _0x48589a = 6000;
  } else if (_0x58a02 == 11) {
    _0x48589a = 8500;
  } else if (_0x58a02 == 13) {
    _0x48589a = 6000;
  } else if (_0x58a02 == 15) {
    _0x48589a = 10000;
  } else if (_0x58a02 == 17) {
    _0x48589a = 14000;
  } else if (_0x58a02 == 19 || _0x58a02 == 21) {
    _0x48589a = 7000;
  } else if (_0x58a02 == 23) {
    _0x48589a = 12000;
  } else if (_0x58a02 == 25) {
    _0x48589a = 11000;
  } else if (_0x58a02 == 27) {
    _0x48589a = 12000;
  } else if (_0x58a02 == 29) {
    _0x48589a = 26500;
  } else if (_0x58a02 == 31) {
    _0x48589a = 33000;
  }
  localcamera.setActiveWithInterp(second_cam.handle, _0x48589a, 0, 0);
  mp.game.cam.renderScriptCams(true, false, 0, false, false);
}
function EndNewbieIntroduction() {
  main_browser.execute("APPS.state.fly_cam.show = false;");
  if (localcamera != null) {
    localcamera.destroy();
    localcamera = null;
  }
  if (second_cam != null) {
    second_cam.destroy();
    second_cam = null;
  }
  mp.game.invoke(getNative("_START_SCREEN_EFFECT"), "MP_SmugglerCheckpoint", 2000, true);
  mp.game.cam.renderScriptCams(false, true, 0, true, false);
  localplayer.setAlpha(255);
  at_newbie_intoduction = false;
  if (hudswitch == 0) {
    ChangeHudState(true);
    mp.game.ui.displayRadar(true);
  }
  mp.gui.cursor.show(false, false);
  mp.events.call("Enablechat");
  mp.events.call("Enablechat");
  mp.events.callRemote("Server_EndNewbieIntroduction");
}
global.at_newbie_intoduction = false;
mp.events.add("Client_Show_Newbie_Guide", (_0x5954e8, _0x245c14) => {
  mp.keys.bind(32, false, () => {
    if (loggedin && !chatActive && at_newbie_intoduction == 1) {
      EndNewbieIntroduction();
      StopCustomSound("newbie_sound");
    }
  });
  if (_0x5954e8 == "ru" && _0x245c14 == 4) {
    StartCustomSound("newbie_sound", "sounds/newbie_4/part_v1.ogg", 0.2);
  } else {
    StartCustomSound("newbie_sound", "sounds/newbie_guide/part_1.ogg", 0.2);
  }
  at_newbie_intoduction = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(false, false);
  localplayer.setAlpha(0);
  mp.game.cam.doScreenFadeOut(0);
  setTimeout(() => {
    if (at_newbie_intoduction != 0) {
      ChangeHudState(false);
      mp.events.call("Disablechat");
      mp.events.call("Disablechat");
    }
  }, 250);
  setTimeout(() => {
    if (at_newbie_intoduction != 0) {
      mp.game.cam.doScreenFadeIn(2000);
    }
  }, 2000);
  InterPolateCamera(1, 2);
  localplayer.position = new mp.Vector3(-92.687, -833.903, 219.312);
  let _0xb40116 = 208;
  let _0x5b8956 = Math.floor(_0xb40116 / 60);
  if (_0x5b8956 < 10) {
    _0x5b8956 = "0" + _0x5b8956;
  }
  let _0x507b6d = _0xb40116 - _0x5b8956 * 60;
  if (_0x507b6d < 10) {
    _0x507b6d = "0" + _0x507b6d;
  }
  const _0x14cc05 = "{\"time_left\":'" + (_0x5b8956 + ":" + _0x507b6d) + "',\"title\":'" + language.Введение[curr_lang] + "',\"text\":'" + language["Привет! Я постараюсь объяснить тебе вкратце, как всё устроено. Grand это сервер с RolePlay режимом игры. Это значит, что здесь всё как в реальной жизни. Вы начинаете игру простым приезжим без денег в кармане. И именно Вам решать, кем стать. Полицейским, врачом, бандитом. Или просто очень богатым человеком, который получает удовольствие от жизни."][curr_lang] + "',\"show\":true}";
  main_browser.execute("APPS.state.fly_cam = " + _0x14cc05);
  let _0x1686f7 = setInterval(() => {
    if (at_newbie_intoduction == 0) {
      if (_0x1686f7 != null) {
        clearInterval(_0x1686f7);
      }
      _0x1686f7 = undefined;
      return;
    }
    _0xb40116--;
    let _0x41b78f = Math.floor(_0xb40116 / 60);
    if (_0x41b78f < 10) {
      _0x41b78f = "0" + _0x41b78f;
    }
    let _0x366f04 = _0xb40116 - _0x41b78f * 60;
    if (_0x366f04 < 10) {
      _0x366f04 = "0" + _0x366f04;
    }
    let _0x10ab8d = _0x41b78f + ":" + _0x366f04;
    main_browser.execute("APPS.state.fly_cam.time_left = '" + _0x10ab8d + "'");
  }, 1000);
  setTimeout(() => {
    if (at_newbie_intoduction != 0) {
      mp.game.cam.doScreenFadeOut(2000);
    }
  }, 28000);
  setTimeout(() => {
    if (at_newbie_intoduction != 0) {
      setTimeout(() => {
        if (at_newbie_intoduction != 0) {
          mp.game.cam.doScreenFadeIn(2000);
        }
      }, 2000);
      localplayer.position = new mp.Vector3(-1363.35, -959.594, 9.705);
      main_browser.execute("APPS.state.fly_cam.show = false;");
      main_browser.execute("APPS.state.fly_cam.title = '" + language.Дома[curr_lang] + "';");
      main_browser.execute("APPS.state.fly_cam.text = '" + language["Чтобы не жить на улице тебе будет нужен дом, сделать это можно в риэлторском агенстве, либо купить у других игроков. Дома есть на любой кошелёк, от полуразрушенного дома в опасном районе, до элитного жилья на горе VineWood. Конечно, бегать по всему городу или ездить на автобусе не очень удобно, поэтому лучше купить личную машину в одном из автосалонов. Автосалоны как и дома, для каждого свои. Если у тебя много денег, перед тобой открыты двери автосалона премиум класса, если денег нет... Увы, придётся довольствоваться транспортом бюджетного сегмента."][curr_lang] + "';");
      main_browser.execute("APPS.state.fly_cam.show = true;");
      StopCustomSound("newbie_sound");
      if (_0x5954e8 == "ru" && _0x245c14 == 4) {
        StartCustomSound("newbie_sound", "sounds/newbie_4/part_v2.ogg", 0.2);
      } else {
        StartCustomSound("newbie_sound", "sounds/newbie_guide/part_2.ogg", 0.2);
      }
      InterPolateCamera(3, 4);
      setTimeout(() => {
        if (at_newbie_intoduction != 0) {
          mp.game.cam.doScreenFadeOut(2000);
        }
      }, 7000);
      setTimeout(() => {
        if (at_newbie_intoduction != 0) {
          setTimeout(() => {
            if (at_newbie_intoduction != 0) {
              mp.game.cam.doScreenFadeIn(2000);
            }
          }, 2000);
          localplayer.position = new mp.Vector3(-535.966, 276.108, 83.021);
          InterPolateCamera(5, 6);
          setTimeout(() => {
            if (at_newbie_intoduction != 0) {
              mp.game.cam.doScreenFadeOut(2000);
            }
          }, 8000);
          setTimeout(() => {
            if (at_newbie_intoduction != 0) {
              setTimeout(() => {
                if (at_newbie_intoduction != 0) {
                  mp.game.cam.doScreenFadeIn(2000);
                }
              }, 2000);
              InterPolateCamera(13, 14);
              localplayer.position = new mp.Vector3(-1053.424, -1100.723, 2.15);
              setTimeout(() => {
                if (at_newbie_intoduction != 0) {
                  mp.game.cam.doScreenFadeOut(2000);
                }
              }, 4000);
              setTimeout(() => {
                if (at_newbie_intoduction != 0) {
                  setTimeout(() => {
                    if (at_newbie_intoduction != 0) {
                      mp.game.cam.doScreenFadeIn(2000);
                    }
                  }, 2000);
                  InterPolateCamera(7, 8);
                  localplayer.position = new mp.Vector3(-46.278, -1102.687, 26.422);
                  setTimeout(() => {
                    if (at_newbie_intoduction != 0) {
                      mp.game.cam.doScreenFadeOut(2000);
                    }
                  }, 4000);
                  setTimeout(() => {
                    if (at_newbie_intoduction != 0) {
                      setTimeout(() => {
                        if (at_newbie_intoduction != 0) {
                          mp.game.cam.doScreenFadeIn(2000);
                        }
                      }, 2000);
                      InterPolateCamera(9, 10);
                      localplayer.position = new mp.Vector3(1132.732, 64.775, 80.755);
                      setTimeout(() => {
                        if (at_newbie_intoduction != 0) {
                          mp.game.cam.doScreenFadeOut(2000);
                        }
                      }, 4000);
                      setTimeout(() => {
                        if (at_newbie_intoduction != 0) {
                          setTimeout(() => {
                            if (at_newbie_intoduction != 0) {
                              mp.game.cam.doScreenFadeIn(2000);
                            }
                          }, 2000);
                          InterPolateCamera(11, 12);
                          localplayer.position = new mp.Vector3(1286.535, -2559.688, 44.129);
                          setTimeout(() => {
                            if (at_newbie_intoduction != 0) {
                              mp.game.cam.doScreenFadeOut(2000);
                            }
                          }, 6500);
                          setTimeout(() => {
                            if (at_newbie_intoduction != 0) {
                              setTimeout(() => {
                                if (at_newbie_intoduction != 0) {
                                  mp.game.cam.doScreenFadeIn(2000);
                                }
                              }, 2000);
                              main_browser.execute("APPS.state.fly_cam.show = false;");
                              main_browser.execute("APPS.state.fly_cam.title = '" + language.Бизнес[curr_lang] + "';");
                              main_browser.execute("APPS.state.fly_cam.text = '" + language["Хочешь стать успешным человеком? Тогда тебе понадобиться свой бизнес, можешь купить свой магазинчик на АЗС, либо стать владельцем целого магазина оружия. Бизнесы есть разные, но всех их объединяет то, что за ними нужно следить, чтобы они приносили прибыль, а не становились обузой."][curr_lang] + "';");
                              main_browser.execute("APPS.state.fly_cam.show = true;");
                              StopCustomSound("newbie_sound");
                              if (_0x5954e8 == "ru" && _0x245c14 == 4) {
                                StartCustomSound("newbie_sound", "sounds/newbie_4/part_v3.ogg", 0.2);
                              } else {
                                StartCustomSound("newbie_sound", "sounds/newbie_guide/part_3.ogg", 0.2);
                              }
                              InterPolateCamera(15, 16);
                              localplayer.position = new mp.Vector3(-719.144, -937.426, 19.016);
                              setTimeout(() => {
                                if (at_newbie_intoduction != 0) {
                                  mp.game.cam.doScreenFadeOut(2000);
                                }
                              }, 8000);
                              setTimeout(() => {
                                if (at_newbie_intoduction != 0) {
                                  setTimeout(() => {
                                    if (at_newbie_intoduction != 0) {
                                      mp.game.cam.doScreenFadeIn(2000);
                                    }
                                  }, 2000);
                                  InterPolateCamera(17, 18);
                                  localplayer.position = new mp.Vector3(-651.546, -947.374, 21.648);
                                  setTimeout(() => {
                                    if (at_newbie_intoduction != 0) {
                                      mp.game.cam.doScreenFadeOut(2000);
                                    }
                                  }, 12000);
                                  setTimeout(() => {
                                    if (at_newbie_intoduction != 0) {
                                      setTimeout(() => {
                                        if (at_newbie_intoduction != 0) {
                                          mp.game.cam.doScreenFadeIn(2000);
                                        }
                                      }, 2000);
                                      main_browser.execute("APPS.state.fly_cam.show = false;");
                                      main_browser.execute("APPS.state.fly_cam.title = '" + language.Работы[curr_lang] + "';");
                                      main_browser.execute("APPS.state.fly_cam.text = '" + language["Думаю ты уже понял, что на дом, машину или бизнес тебе нужны деньги. Зарплаты на работах разные, с самого начала тебе доступны не особо прибыльные, но по мере игры ты будешь получать доступ к более престижным и оплачиваемым работам. Со списком работ можно ознакомиться открыв меню на клавишу М и выбрав пункт Моя работа."][curr_lang] + "';");
                                      main_browser.execute("APPS.state.fly_cam.show = true;");
                                      StopCustomSound("newbie_sound");
                                      if (_0x5954e8 == "ru" && _0x245c14 == 4) {
                                        StartCustomSound("newbie_sound", "sounds/newbie_4/part_v4.ogg", 0.2);
                                      } else {
                                        StartCustomSound("newbie_sound", "sounds/newbie_guide/part_4.ogg", 0.2);
                                      }
                                      InterPolateCamera(19, 20);
                                      localplayer.position = new mp.Vector3(725.65, 121.832, 80.754);
                                      setTimeout(() => {
                                        if (at_newbie_intoduction != 0) {
                                          mp.game.cam.doScreenFadeOut(2000);
                                        }
                                      }, 5000);
                                      setTimeout(() => {
                                        if (at_newbie_intoduction != 0) {
                                          setTimeout(() => {
                                            if (at_newbie_intoduction != 0) {
                                              mp.game.cam.doScreenFadeIn(2000);
                                            }
                                          }, 2000);
                                          InterPolateCamera(21, 22);
                                          localplayer.position = new mp.Vector3(2016.621, 3525.389, 41.493);
                                          setTimeout(() => {
                                            if (at_newbie_intoduction != 0) {
                                              mp.game.cam.doScreenFadeOut(2000);
                                            }
                                          }, 5000);
                                          setTimeout(() => {
                                            if (at_newbie_intoduction != 0) {
                                              setTimeout(() => {
                                                if (at_newbie_intoduction != 0) {
                                                  mp.game.cam.doScreenFadeIn(2000);
                                                }
                                              }, 2000);
                                              InterPolateCamera(23, 24);
                                              localplayer.position = new mp.Vector3(1567.836, -1965.826, 92.397);
                                              setTimeout(() => {
                                                if (at_newbie_intoduction != 0) {
                                                  mp.game.cam.doScreenFadeOut(2000);
                                                }
                                              }, 10000);
                                              setTimeout(() => {
                                                if (at_newbie_intoduction != 0) {
                                                  setTimeout(() => {
                                                    if (at_newbie_intoduction != 0) {
                                                      mp.game.cam.doScreenFadeIn(2000);
                                                    }
                                                  }, 2000);
                                                  main_browser.execute("APPS.state.fly_cam.show = false;");
                                                  main_browser.execute("APPS.state.fly_cam.title = '" + language.Фракции[curr_lang] + "';");
                                                  main_browser.execute("APPS.state.fly_cam.text = '" + language["Ну а если амбиции не дают покоя и хочется развиваться в большом и дружном коллективе, тебе подойдёт одна из организаций. Ты можешь стать полицейским, следящим за порядком и заниматься поиском преступников. Или стать бандитом, принимая участие в захватах территории, угоне машин."][curr_lang] + "';");
                                                  main_browser.execute("APPS.state.fly_cam.show = true;");
                                                  StopCustomSound("newbie_sound");
                                                  if (_0x5954e8 == "ru" && _0x245c14 == 4) {
                                                    StartCustomSound("newbie_sound", "sounds/newbie_4/part_v5.ogg", 0.2);
                                                  } else {
                                                    StartCustomSound("newbie_sound", "sounds/newbie_guide/part_5.ogg", 0.2);
                                                  }
                                                  InterPolateCamera(25, 26);
                                                  localplayer.position = new mp.Vector3(382.821, -965.521, 29.434);
                                                  setTimeout(() => {
                                                    if (at_newbie_intoduction != 0) {
                                                      mp.game.cam.doScreenFadeOut(2000);
                                                    }
                                                  }, 9000);
                                                  setTimeout(() => {
                                                    if (at_newbie_intoduction != 0) {
                                                      setTimeout(() => {
                                                        if (at_newbie_intoduction != 0) {
                                                          mp.game.cam.doScreenFadeIn(2000);
                                                        }
                                                      }, 2000);
                                                      InterPolateCamera(27, 28);
                                                      localplayer.position = new mp.Vector3(79.084, -1954.939, 20.785);
                                                      setTimeout(() => {
                                                        if (at_newbie_intoduction != 0) {
                                                          mp.game.cam.doScreenFadeOut(2000);
                                                        }
                                                      }, 10000);
                                                      setTimeout(() => {
                                                        if (at_newbie_intoduction != 0) {
                                                          setTimeout(() => {
                                                            if (at_newbie_intoduction != 0) {
                                                              mp.game.cam.doScreenFadeIn(2000);
                                                            }
                                                          }, 2000);
                                                          main_browser.execute("APPS.state.fly_cam.show = false;");
                                                          main_browser.execute("APPS.state.fly_cam.title = '" + language.Семьи[curr_lang] + "';");
                                                          main_browser.execute("APPS.state.fly_cam.text = '" + language["Ещё у нас есть семьи. Создать свою семью или присоединиться уже к существующей - решать тебе. Семьи играют важную роль в жизни сервера, семьям доступны уникальные бизнесы, такие как плантации, коровники или нефтевышки. Также семьи могут принимать участие в различных мероприятиях, том числе и в ограблении банка."][curr_lang] + "';");
                                                          main_browser.execute("APPS.state.fly_cam.show = true;");
                                                          StopCustomSound("newbie_sound");
                                                          if (_0x5954e8 == "ru" && _0x245c14 == 4) {
                                                            StartCustomSound("newbie_sound", "sounds/newbie_4/part_v6.ogg", 0.2);
                                                          } else {
                                                            StartCustomSound("newbie_sound", "sounds/newbie_guide/part_6.ogg", 0.2);
                                                          }
                                                          InterPolateCamera(29, 30);
                                                          localplayer.position = new mp.Vector3(-569.412, -428.727, 78.322);
                                                          setTimeout(() => {
                                                            if (at_newbie_intoduction != 0) {
                                                              mp.game.cam.doScreenFadeOut(2000);
                                                            }
                                                          }, 24500);
                                                          setTimeout(() => {
                                                            if (at_newbie_intoduction != 0) {
                                                              setTimeout(() => {
                                                                if (at_newbie_intoduction != 0) {
                                                                  mp.game.cam.doScreenFadeIn(2000);
                                                                }
                                                              }, 2000);
                                                              main_browser.execute("APPS.state.fly_cam.show = false;");
                                                              main_browser.execute("APPS.state.fly_cam.title = '" + language.Итог[curr_lang] + "';");
                                                              main_browser.execute("APPS.state.fly_cam.text = '" + language["Обращай внимание на задания, которые ты сейчас видишь. В процессе выполнения квеста для новичков, тебе может попасться крутой приз! Чтобы тебе было проще, мы сделали раздел помощи в мобильном телефоне, там ты сможешь ознакомиться с ответами на вопросы от новичков. А чтобы было совсем просто, в том же разделе в телефоне есть функция звонка помощникам, которые ответят на все вопросы. Добро пожаловать."][curr_lang] + "';");
                                                              main_browser.execute("APPS.state.fly_cam.show = true;");
                                                              StopCustomSound("newbie_sound");
                                                              if (_0x5954e8 == "ru" && _0x245c14 == 4) {
                                                                StartCustomSound("newbie_sound", "sounds/newbie_4/part_v7.ogg", 0.2);
                                                              } else {
                                                                StartCustomSound("newbie_sound", "sounds/newbie_guide/part_7.ogg", 0.2);
                                                              }
                                                              InterPolateCamera(31, 32);
                                                              localplayer.position = new mp.Vector3(-257.775, -938.638, 31.22);
                                                              setTimeout(() => {
                                                                if (at_newbie_intoduction != 0) {
                                                                  mp.game.cam.doScreenFadeOut(2000);
                                                                }
                                                              }, 31000);
                                                              setTimeout(() => {
                                                                if (at_newbie_intoduction != 0) {
                                                                  setTimeout(() => {
                                                                    if (at_newbie_intoduction != 0) {
                                                                      mp.game.cam.doScreenFadeIn(2000);
                                                                    }
                                                                  }, 2000);
                                                                  if (_0x1686f7 != null) {
                                                                    clearInterval(_0x1686f7);
                                                                  }
                                                                  _0x1686f7 = undefined;
                                                                  StopCustomSound("newbie_sound");
                                                                  EndNewbieIntroduction();
                                                                }
                                                              }, 33000);
                                                            }
                                                          }, 26500);
                                                        }
                                                      }, 12000);
                                                    }
                                                  }, 11000);
                                                }
                                              }, 12000);
                                            }
                                          }, 7000);
                                        }
                                      }, 7000);
                                    }
                                  }, 14000);
                                }
                              }, 10000);
                            }
                          }, 8500);
                        }
                      }, 6000);
                    }
                  }, 6000);
                }
              }, 6000);
            }
          }, 10000);
        }
      }, 9000);
    }
  }, 30000);
});
global.NewbieMapOpened = false;
mp.events.add("Client_OpenNewbieMap", (_0x54c04c, _0x4885ac) => {
  if (GlobalCheck() == 1) {
    return;
  }
  const _0x27d6f2 = "{\"story_quest_progress\":" + _0x54c04c + ",\"is_in_call\":" + (_0x4885ac = _0x4885ac == 1 ? 1 : 0) + ",\"show\":true}";
  main_browser.execute("APPS.state.quest_map = " + _0x27d6f2);
  if (curr_lang == "ru") {
    StartCustomSound("newbie_map", "sounds/newbie_conv/grand_2.ogg", 0.2);
  }
  NewbieMapOpened = true;
  ChangeHudState(false);
  mp.events.call("Disablechat");
  mp.game.ui.displayRadar(false);
  mp.gui.cursor.show(true, true);
  setTimeout(() => {
    mp.gui.cursor.show(true, true);
  }, 200);
});
global.CloseNewbieMap = function () {
  if (NewbieMapOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.quest_map.show = false;");
    NewbieMapOpened = false;
    StopCustomSound("newbie_map");
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    mp.events.callRemote("Server_CloseNewbieMap");
  }
};
mp.events.add("Client_StartNewbieParkingVoice", () => {
  if (curr_lang == "ru") {
    StartCustomSound("newbie_finish", "sounds/newbie_conv/grand_3.ogg", 0.2);
  }
});
mp.events.add("Client_NewbieCall", () => {
  if (NewbieMapOpened && loggedin && !chatActive) {
    if (!(new Date().getTime() - lastCheck < 500)) {
      lastCheck = new Date().getTime();
      mp.events.callRemote("Server_CallVoiceHelper");
    }
  }
});
mp.events.add("Client_UpdateNewbieCallInMap", _0x52e4e5 => {
  if (NewbieMapOpened && loggedin && !chatActive) {
    main_browser.execute("APPS.state.quest_map.is_in_call = " + _0x52e4e5 + ";");
  }
});
mp.events.add("Client_ShowNewbieStoryLine", _0x52b12f => {
  if (_0x52b12f == 1) {
    if (curr_lang == "ru") {
      StartCustomSound("story_line", "sounds/newbie_conv/ru/start_story.ogg", 0.2);
    } else if (curr_lang == "en") {
      StartCustomSound("story_line", "sounds/newbie_conv/en/start_story.ogg", 0.2);
    }
    second_cam = mp.cameras.new("default", new mp.Vector3(-839.34, -896.632, -51.294), new mp.Vector3(0, 0, 0), 40);
    second_cam.pointAtCoord(-834.213, -882.006, -55.348);
    localcamera = mp.cameras.new("default", new mp.Vector3(-835.866, -887.417, -53.192), new mp.Vector3(0, 0, 0), 40);
    localcamera.pointAtCoord(-835.985, -877.412, -54.349);
    localcamera.setActive(true);
    localcamera.setActiveWithInterp(second_cam.handle, 4000, 0, 0);
    mp.game.cam.renderScriptCams(true, false, 0, false, false);
    setTimeout(() => {
      mp.game.cam.renderScriptCams(false, true, 0, true, false);
      if (localcamera != null) {
        localcamera.destroy();
        localcamera = null;
      }
      if (second_cam != null) {
        second_cam.destroy();
        second_cam = null;
      }
    }, 4000);
  }
});