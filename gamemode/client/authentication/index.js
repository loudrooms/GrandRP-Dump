mp.game.invoke("0xD8295AF639FD9CB8", mp.players.local.handle);
let cutscene = {
  start: false,
  vehicles: [],
  peds: [],
  objects: [],
  browser: null,
  browser_rules: null
};
let user = {
  login: "",
  autologin: false,
  last_type: ""
};
let character = {
  cameras: {},
  peds: [],
  activeCameraName: "common"
};
let spawn = {
  firstCamera: null,
  secondCamera: null,
  data: [],
  activeCameraName: ""
};
global.in_quene = false;
global.onOpenedNewAuth = false;
const camsData = require("./data/cams.js");
const vehiclesData = require("./data/vehicles.js");
const objectsData = require("./data/objects.js");
const pedsData = require("./data/peds.js");
const characterPeds = require("./data/character_peds.js");
function createVehicles() {
  vehiclesData.forEach(({
    model: e,
    position: a,
    rotation: t,
    colors: r,
    openHood: s,
    tuning: n
  }) => {
    const o = mp.vehicles.new(mp.game.joaat(e), new mp.Vector3(a.x, a.y, a.z), {
      numberPlate: "GRAND",
      color: [r.primary, r.secondary],
      heading: t,
      dimension: localplayer.remoteId + 1
    });
    if (s) {
      setTimeout(() => {
        o.setDoorOpen(4, true, true);
      }, 3000);
    }
    if (n) {
      setTimeout(() => {
        Object.entries(n).forEach(([e, a]) => {
          o.setMod(parseInt(e), parseInt(a));
        });
      }, 1000);
    }
    cutscene.vehicles.push(o);
  });
}
function createObjects() {
  objectsData.forEach(({
    model: e,
    position: a,
    rotation: t
  }) => {
    const r = mp.objects.new(mp.game.joaat(e), new mp.Vector3(a.x, a.y, a.z), {
      rotation: new mp.Vector3(t.x, t.y, t.z),
      alpha: 255,
      dimension: localplayer.remoteId + 1
    });
    cutscene.objects.push(r);
  });
}
async function createPeds() {
  pedsData.forEach(async ({
    modelHash: e,
    position: a,
    heading: t,
    attachment: r,
    animation: s,
    scenario: n,
    currentWeapon: o,
    rotation: c,
    components: i,
    customTask: l,
    hair: m,
    facialFeatures: d,
    headOverlays: p,
    shapeAndSkinTone: h,
    props: u
  }, C) => {
    const w = mp.peds.new(e, new mp.Vector3(a.x, a.y, a.z), t, localplayer.remoteId + 1);
    cutscene.peds.push(w);
    setTimeout(() => {
      mp.game.invoke("0xBF0FD6E56C964FCB", w.handle, o | 0, 1, true, true);
    }, 3000);
    if (r) {
      const e = mp.objects.new(mp.game.joaat(r.model), new mp.Vector3(a.x, a.y, a.z), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: localplayer.remoteId + 1
      });
      cutscene.objects.push(e);
      setTimeout(() => {
        if (mp.objects.exists(e) && mp.peds.exists(w)) {
          e.attachTo(w.handle, r.boneIndex, r.x, r.y, r.z, r.rx, r.ry, r.rz, true, true, false, false, 0, true);
        }
      }, 1000);
    }
    await new Promise(e => setTimeout(e, 8000));
    if (h) {
      h[9] = Boolean(h[9]);
      w.setHeadBlendData(...h);
    }
    if (d) {
      for (let e = 0; e < 20; e++) {
        if (d[e] != null) {
          w.setFaceFeature(e, d[e]);
        }
      }
    }
    if (m) {
      w.setHairColor(m.color, m.streaks);
    }
    if (p) {
      p.forEach((e, a) => {
        w.setHeadOverlay(a, ...e);
        if (a === 1) {
          w.setHeadOverlayColor(1, 1, e[2], 1);
        }
        if (a === 2) {
          w.setHeadOverlayColor(2, 1, 1, 1);
        }
        if (a === 5 || a === 8) {
          w.setHeadOverlayColor(a, 2, e[2], 1);
        }
        if (a == 5) {
          mp.console.logInfo(`${C}: ${JSON.stringify(e)}, ${w.handle}`, true, true);
        }
      });
    }
    if (s) {
      for (mp.game.streaming.requestAnimDict(s.dict); !mp.game.streaming.hasAnimDictLoaded(s.dict);) {
        await mp.game.waitAsync(0);
      }
      w.taskPlayAnim(s.dict, s.name, 8, 0, -1, 1, 0, false, false, false);
    }
    if (n) {
      w.taskStartScenarioInPlace(n, -1, false);
    }
    setTimeout(() => {
      if (c) {
        w.setRotation(c.x, c.y, c.z, 1, true);
      }
      i.forEach(([e, a], t) => {
        w.setComponentVariation(t, e, a, 0);
      });
      if (u) {
        u.forEach((e, a) => {
          w.setPropIndex(a, ...e, true);
        });
      }
    }, 500);
    if (l === 1) {
      await new Promise(e => setTimeout(e, 52000));
      w.freezePosition(false);
      w.taskGoToCoordAnyMeans(-1727.622, 191.703, 64.372, 1.8, 0, false, 786603, 3212836864);
    }
    if (l === 0) {
      await new Promise(e => setTimeout(e, 18000));
      const e = mp.vehicles.new("seashark", new mp.Vector3(-1612.27075, -1203.90015, 0.676552534), {
        numberPlate: "GRAND",
        color: [111, 0],
        heading: 164.784317,
        dimension: localplayer.remoteId + 1
      });
      cutscene.vehicles.push(e);
      await new Promise(e => setTimeout(e, 1000));
      w.taskWarpIntoVehicle(e.handle, -1);
      await new Promise(e => setTimeout(e, 1000));
      w.taskVehicleDriveToCoordLongrange(e.handle, -1619.54492, -1216.12244, -3.83322239, 15, 786603, 10);
    }
  });
}
async function createCharacterPeds() {
  characterPeds.forEach(async ({
    modelHash: e,
    position: a,
    heading: t,
    animation: r,
    currentWeapon: s,
    scenario: n,
    rotation: o
  }) => {
    const c = mp.peds.new(e, new mp.Vector3(a.x, a.y, a.z), t, localplayer.remoteId + 1);
    character.peds.push(c);
    if (o) {
      setTimeout(() => {
        c.setRotation(o.x, o.y, o.z, 1, true);
      }, 500);
    }
    if (r) {
      for (mp.game.streaming.requestAnimDict(r.dict); !mp.game.streaming.hasAnimDictLoaded(r.dict);) {
        await mp.game.waitAsync(0);
      }
      c.taskPlayAnim(r.dict, r.name, 8, 0, -1, 1, 0, false, false, false);
    }
    if (n) {
      c.taskStartScenarioInPlace(n, -1, false);
    }
    c.setComponentVariation(8, 15, 0, 0);
    c.setComponentVariation(3, 0, 0, 0);
    c.setComponentVariation(11, 9, 0, 0);
    c.setComponentVariation(4, 5, 0, 0);
    c.setComponentVariation(6, 1, 0, 0);
    c.setComponentVariation(2, 52, 0, 0);
    c.setHeadOverlay(2, 0, 1, 1, 1);
    c.setEyeColor(0);
    c.setHairColor(0, 0);
    c.setHeadOverlay(1, 255, 1, 1, 1);
    c.setHeadBlendData(21, 0, 0, 21, 0, 0, 0.5, 0.5, 0, false);
  });
}
function CreateCutScene() {
  createVehicles();
  createObjects();
  createPeds();
}
function createCharacterCameras() {
  character.cameras = {
    common: mp.cameras.new("character_common", new mp.Vector3(-578.5520629882812, 2986.2666015625, 24.871793746948242), new mp.Vector3(-4.3996381759643555, 0, 147.83547973632812), 35),
    first: mp.cameras.new("character_first", new mp.Vector3(-578.5520629882812, 2986.2666015625, 24.871793746948242), new mp.Vector3(-4.3996381759643555, 0, 147.83547973632812), 35),
    second: mp.cameras.new("character_second", new mp.Vector3(-578.5520629882812, 2986.2666015625, 24.871793746948242), new mp.Vector3(-4.3996381759643555, 0, 147.83547973632812), 35)
  };
}
function onDressPeds(e) {
  for (let a = 0; a < 2; a++) {
    if (e && e[a]) {
      const t = mp.game.joaat(e && e[a] && e[a].gender ? "mp_f_freemode_01" : "mp_m_freemode_01");
      character.peds[a].model = t;
      if (e[a].gender) {
        const e = [{
          dict: "amb@prop_human_seat_chair@male@generic@base",
          name: "base"
        }, {
          dict: "amb@world_human_seat_steps@male@elbows_on_knees@base",
          name: "base"
        }];
        character.peds[a].taskPlayAnim(e[a].dict, e[a].name, 8, 0, -1, 1, 0, false, false, false);
      }
      let r = e[a].parents;
      let s = e[a].facedata;
      let n = e[a].otherfacedata;
      if (e[a].gender) {
        character.peds[a].setComponentVariation(8, 10, 0, 0);
      } else {
        character.peds[a].setComponentVariation(8, 15, 0, 0);
      }
      character.peds[a].setComponentVariation(3, 0, 0, 0);
      n.localhaircolor2 ||= 0;
      character.peds[a].setHeadBlendData(r.mother, r.father, 0, r.mother, r.father, 0, r.similiarity * 0.01, r.similiarity * 0.01, 0, false);
      character.peds[a].setEyeColor(n.localeyecolor);
      character.peds[a].setHairColor(n.localhaircolor, n.localhaircolor2);
      for (let e = 0; e < 20; e++) {
        if (s[e] != null) {
          character.peds[a].setFaceFeature(e, s[e]);
        }
      }
      character.peds[a].setHeadOverlay(2, n.localeyebrows, 1, 1, 1);
      character.peds[a].setHeadOverlayColor(2, 1, 1, 1);
      character.peds[a].setComponentVariation(2, n.localhairstyle, 0, 0);
      n.localbeardcolor ||= 0;
      character.peds[a].setHeadOverlay(1, n.localbeard, 1, n.localbeardcolor, 1);
      character.peds[a].setHeadOverlayColor(1, 1, n.localbeardcolor, 1);
      if (n.localmakeup != null) {
        character.peds[a].setHeadOverlay(4, n.localmakeup, 1, 1, 1);
      }
      if (n.localblush != null && n.localblushcolor != null) {
        character.peds[a].setHeadOverlay(5, n.localblush, 1, n.localblushcolor, 1);
        character.peds[a].setHeadOverlayColor(5, 2, n.localblushcolor, 1);
      }
      if (n.locallipstick != null && n.locallipstickcolor != null) {
        character.peds[a].setHeadOverlay(8, n.locallipstick, 1, n.locallipstickcolor, 1);
        character.peds[a].setHeadOverlayColor(8, 2, n.locallipstickcolor, 1);
      }
      if (n.localmoles != null) {
        character.peds[a].setHeadOverlay(9, n.localmoles, 1, 1, 1);
      }
      if (n.localchesthair != null) {
        character.peds[a].setHeadOverlay(10, n.localchesthair, 1, 1, 1);
      }
      for (let t = 0; t < e[a].clothes.length; t++) {
        const r = e[a].clothes[t];
        if (r && r.drawable != null && r.componentNumber != null) {
          if (r.is_prop == 1) {
            character.peds[a].setPropIndex(r.componentNumber, r.drawable, r.texture, true);
          } else {
            character.peds[a].setComponentVariation(r.componentNumber, r.drawable, r.texture, r.palette);
          }
        }
      }
    } else if (character.peds[a] && mp.peds.exists(character.peds[a])) {
      character.peds[a].destroy();
    }
  }
}
function InteractWithCef(e) {
  switch (e) {
    case "auth.show":
      main_browser.execute("APPS.state.auth.show = true");
      break;
    case "auth.cutscene.start":
      main_browser.execute("APPS.state.auth.page = 0");
      break;
    case "auth.cutscene.stop":
      main_browser.execute("APPS.state.auth.page = 1");
      break;
    case "authenticator.show":
      main_browser.execute("APPS.state.auth.page = 4");
      break;
    case "character.show":
      main_browser.execute("APPS.state.auth.page = 5");
      break;
    case "spawn.show":
      main_browser.execute("APPS.state.auth.page = 8");
      break;
    case "spawn.hide":
      main_browser.execute("APPS.state.auth.show = false");
  }
}
const startCamera = mp.cameras.new("default", new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), 50);
const endCamera = mp.cameras.new("default", new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), 50);
const OnLoadPlayerInformation = () => {
  const e = new Date();
  let a = e.getUTCHours() + 3;
  const t = e.getUTCMinutes();
  if (a == 24) {
    a = 0;
  } else if (a == 25) {
    a = 1;
  } else if (a == 26) {
    a = 2;
  } else if (a == 27) {
    a = 3;
  } else if (a == 28) {
    a = 4;
  }
  mp.game.time.setClockTime(a, t, 0);
  mp.discord.update("Playing Grand Role Play", "grand-rp.su");
  mp.game.ui.displayRadar(false);
  mp.game.gameplay.disableAutomaticRespawn(true);
  mp.game.gameplay.ignoreNextRestart(true);
  mp.game.gameplay.setFadeInAfterDeathArrest(false);
  mp.game.gameplay.setFadeOutAfterDeath(false);
  mp.game.gameplay.setFadeInAfterLoad(false);
  localplayer.freezePosition(true);
  localplayer.setAlpha(0);
  CreateCutScene();
  InteractWithCef("auth.show");
  mp.game.audio.startAudioScene("DLC_MPHEIST_TRANSITION_TO_APT_FADE_IN_RADIO_SCENE");
  onOpenedNewAuth = true;
  onStartCutScene();
};
async function onStartCutScene() {
  InteractWithCef("auth.cutscene.start");
  mp.game.audio.stopAudioScene("DLC_MPHEIST_TRANSITION_TO_APT_FADE_IN_RADIO_SCENE");
  cutscene.start = true;
  for (const e of camsData) {
    if (!cutscene.start) {
      return;
    }
    startCamera.setCoord(e.start.position.x, e.start.position.y, e.start.position.z);
    startCamera.setRot(e.start.rotation.x, e.start.rotation.y, e.start.rotation.z, 2);
    startCamera.setFov(e.start.fov);
    startCamera.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
    endCamera.setCoord(e.end.position.x, e.end.position.y, e.end.position.z);
    endCamera.setRot(e.end.rotation.x, e.end.rotation.y, e.end.rotation.z, 2);
    endCamera.setFov(e.end.fov);
    endCamera.setActiveWithInterp(startCamera.handle, e.speed, 0, 0);
    await new Promise(a => setTimeout(a, e.speed));
  }
  onStopCutScene();
}
function onStopCutScene() {
  if (mp.browsers.exists(cutscene.browser)) {
    cutscene.browser.destroy();
  }
  cutscene.start = false;
  if (user && user.login && user.login.length > 0 && user.autologin != null && user.autologin && user.autologin.length > 0) {
    mp.events.callRemote("server.auth.auth.send", JSON.stringify({
      login: user.login,
      password: "",
      confirm: 666666
    }));
  } else {
    showLoginAfterCutscene();
  }
}
function checkKeyPressingRules() {
  closeRulesOfServer();
}
function closeRulesOfServer() {
  if (mp.browsers.exists(cutscene.browser_rules) && cutscene.browser_rules != null) {
    cutscene.browser_rules.destroy();
    cutscene.browser_rules = null;
  }
  mp.keys.unbind(27, false, checkKeyPressingRules);
}
function showLoginAfterCutscene() {
  mp.gui.cursor.show(true, true);
  InteractWithCef("auth.cutscene.stop");
  user.last_type = "auth";
  showCameraAfterCutscene();
}
function showCameraAfterCutscene() {
  startCamera.setCoord(-578.5520629882812, 2986.2666015625, 24.871793746948242);
  startCamera.setRot(-4.3996381759643555, 0, 147.83547973632812, 2);
  startCamera.setFov(30);
  startCamera.setActiveWithInterp(endCamera.handle, 1000, 0, 0);
}
mp.events.add("OnJoinPlayerClient", OnLoadPlayerInformation);
mp.events.add("client.auth.cutscene.show", () => {
  onStartCutScene();
});
mp.events.add("client.auth.cutscene.hide", () => {
  onStopCutScene();
});
mp.events.add("client.auth.autologin.destroy", () => {
  showLoginAfterCutscene();
});
mp.events.add("client.auth.rules.show", () => {
  if (cutscene.browser_rules == null) {
    cutscene.browser_rules = mp.browsers.new("https://forum.grand-rp.su/threads/387672/");
    if (mp.browsers.exists(cutscene.browser_rules)) {
      cutscene.browser_rules.execute("\n        document.addEventListener(\"DOMContentLoaded\", () => {\n            const styles = document.createElement(\"style\");\n            styles.innerText = `@import url('https://fonts.cdnfonts.com/css/akrobat');.global-b-close{ position: absolute; right: 20px; top: 20px; display: flex; align-items: center; font-family: Akrobat; font-weight: 700; font-size: 18px; text-align: center; text-transform: uppercase; color: #fff; opacity: 0.4; transition: all 0.23232323s easy-in-out; -webkit-transition: all 0.23232323s ease-in-out; -moz-transition: all 0.23232323s ease-in-out; z-index: 22; } .global-b-close:after{ content: \"\"; background-image: url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M28.3333 0H3.66667C1.644 0 0 1.644 0 3.66667V28.3333C0 30.356 1.644 32 3.66667 32H28.3333C30.356 32 32 30.356 32 28.3333V3.66667C32 1.644 30.356 0 28.3333 0ZM11 15C11.552 15 12 15.448 12 16C12 16.552 11.552 17 11 17H7.33333V17.6667C7.33333 18.5853 8.08133 19.3333 9 19.3333H11C11.552 19.3333 12 19.7813 12 20.3333C12 20.8853 11.552 21.3333 11 21.3333H9C6.97733 21.3333 5.33333 19.6893 5.33333 17.6667V14.3333C5.33333 12.3107 6.97733 10.6667 9 10.6667H11C11.552 10.6667 12 11.1147 12 11.6667C12 12.2187 11.552 12.6667 11 12.6667H9C8.08133 12.6667 7.33333 13.4147 7.33333 14.3333V15H11ZM16.4933 15H16.84C18.5827 15 20 16.4173 20 18.16C20 19.9147 18.5827 21.3333 16.84 21.3333H14.3333C13.7813 21.3333 13.3333 20.8853 13.3333 20.3333C13.3333 19.7813 13.7813 19.3333 14.3333 19.3333H16.84C17.4787 19.3333 18 18.812 18 18.1733C18 17.5213 17.4787 17 16.84 17H16.4933C14.7507 17 13.3333 15.5827 13.3333 13.84C13.3333 12.084 14.7507 10.6667 16.4933 10.6667H19C19.552 10.6667 20 11.1147 20 11.6667C20 12.2187 19.552 12.6667 19 12.6667H16.4933C15.8547 12.6667 15.3333 13.188 15.3333 13.8267C15.3333 14.4787 15.8547 15 16.4933 15ZM25 19.3333H27C27.552 19.3333 28 19.7813 28 20.3333C28 20.8853 27.552 21.3333 27 21.3333H25C22.9773 21.3333 21.3333 19.6893 21.3333 17.6667V14.3333C21.3333 12.3107 22.9773 10.6667 25 10.6667H27C27.552 10.6667 28 11.1147 28 11.6667C28 12.2187 27.552 12.6667 27 12.6667H25C24.0813 12.6667 23.3333 13.4147 23.3333 14.3333V17.6667C23.3333 18.5853 24.0813 19.3333 25 19.3333Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A\"); background-size: 100% 100%; width: 32px; height: 32px; margin-left: 12px; } .global-b-close:hover{ opacity: 1; }`;\n            document.body.appendChild(styles);\n            const btn = document.createElement('span');\n            btn.classList.add(\"global-b-close\");\n            btn.innerHTML = 'Закрыть';\n            btn.onclick = function() {\n                mp.trigger('client.auth.rules.hide')\n            }\n            document.body.appendChild(btn);\n        });\n    ");
      mp.keys.bind(27, false, checkKeyPressingRules);
    }
  }
});
mp.events.add("client.auth.rules.hide", () => {
  closeRulesOfServer();
});
mp.events.add("client.auth.auth.login", (e, a) => {
  user.login = e;
  user.autologin = a;
  main_browser.execute(`APPS.state.auth.login = '${e}'`);
});
mp.events.add("client.auth.register.send", e => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("server.auth.register.send", e);
  }
});
mp.events.add("client.auth.auth.send", e => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("server.auth.auth.send", e);
  }
});
mp.events.add("client.auth.forgot.send", e => {
  if (!(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("server.auth.forgot.send", e);
  }
});
mp.events.add("client.auth.forgot_id.send", e => {
  if (!(new Date().getTime() - lastCheck < 1000)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("server.auth.forgot_id.send", e);
  }
});
mp.events.add("client.auth.forgot.need_code", e => {
  main_browser.execute(`APPS.state.auth.need_show_email_code = ${e}`);
});
mp.events.add("client.auth.forgot.to_auth", () => {
  main_browser.execute("APPS.state.auth.page = 1");
});
mp.events.add("client.auth.authenticator.send", e => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("server.auth.authenticator.send", e);
  }
});
mp.events.add("client.auth.authenticator.show", (e, a) => {
  if (user.last_type != "auth") {
    showCameraAfterCutscene();
  }
  mp.gui.cursor.show(true, true);
  user.last_type = "authenticator";
  main_browser.execute("APPS.state.auth.google_link = '" + e + "';");
  main_browser.execute(`APPS.state.auth.is_first_google = ${a};`);
  InteractWithCef("authenticator.show");
});
mp.events.add("client.auth.auth.need_auth", () => {
  main_browser.execute("APPS.state.auth.need_show_authenticator = true");
});
mp.events.add("client.character.create.send", e => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("server.character.create.send", e);
  }
});
mp.events.add("client.character.bind.send", e => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("server.character.bind.send", e);
  }
});
mp.events.add("client.character.load.send", e => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    mp.events.callRemote("server.character.load.send", e);
  }
});
mp.events.add("client.auth.peds.show", (e, a) => {
  mp.gui.cursor.show(true, true);
  createCharacterCameras();
  createCharacterPeds();
  if (user.last_type === "") {
    character.cameras.common.setActiveWithInterp(endCamera.handle, 1000, 0, 0);
  } else {
    character.cameras.common.setActiveWithInterp(startCamera.handle, 1000, 0, 0);
  }
  if (e != null) {
    onDressPeds(e);
    main_browser.execute(`APPS.state.auth.character = ${JSON.stringify(a)}`);
  }
  InteractWithCef("character.show");
});
mp.events.add("client.auth.peds.camera", e => {
  if (character.activeCameraName === e) {
    return;
  }
  const a = character.cameras[character.activeCameraName];
  const t = character.cameras[e];
  character.activeCameraName = e;
  t.setActiveWithInterp(a.handle, 500, 0, 0);
});
mp.events.add("client.spawn.camera.load", e => {
  spawn.data = e;
  spawn.firstCamera = mp.cameras.new("spawn_first", new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), 50);
  spawn.secondCamera = mp.cameras.new("spawn_second", new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), 50);
  const {
    position: a
  } = mp.players.local;
  spawn.firstCamera.setCoord(a.x, a.y, a.z + 480);
  spawn.firstCamera.pointAtCoord(a.x, a.y, a.z);
  spawn.firstCamera.setActiveWithInterp(character.cameras[character.activeCameraName].handle, 1000, 0, 3);
  InteractWithCef("spawn.show");
});
mp.events.add("client.spawn.camera.hover", e => {
  const a = spawn.data.findIndex(a => a.name == e);
  if (a == -1) {
    return;
  }
  if (spawn.activeCameraName == e) {
    return;
  }
  spawn.activeCameraName = e;
  let t = spawn.data[a];
  localplayer.position = new mp.Vector3(t.x, t.y, t.z + 20);
  const r = spawn.firstCamera.getCoord();
  spawn.secondCamera.setCoord(r.x, r.y, r.z);
  spawn.secondCamera.pointAtCoord(r.x, r.y, r.z - 480);
  spawn.firstCamera.setCoord(t.x, t.y, t.z + 480);
  spawn.firstCamera.pointAtCoord(t.x, t.y, t.z);
  spawn.firstCamera.setActiveWithInterp(spawn.secondCamera.handle, 1000, 0, 0);
});
global.FinishSpawnMenu = function (e) {
  cutscene.vehicles.forEach(e => mp.vehicles.exists(e) && e.destroy());
  cutscene.objects.forEach(e => mp.objects.exists(e) && e.destroy());
  cutscene.peds.forEach(e => mp.peds.exists(e) && e.destroy());
  character.peds.forEach(e => mp.peds.exists(e) && e.destroy());
  onOpenedNewAuth = false;
  InteractWithCef("spawn.hide");
  localplayer.setAlpha(255);
  if (character.cameras.common) {
    character.cameras.common.destroy();
  }
  if (character.cameras.first) {
    character.cameras.first.destroy();
  }
  if (character.cameras.second) {
    character.cameras.second.destroy();
  }
  if (spawn.secondCamera) {
    spawn.secondCamera.destroy();
  }
  if (spawn.firstCamera) {
    spawn.firstCamera.destroy();
  }
  if (endCamera) {
    endCamera.destroy();
  }
  if (startCamera) {
    startCamera.destroy();
  }
};