let placingGraffiti = false;
let graffiti_font = 0;
const camera = mp.cameras.new("gameplay");
mp.events.add("playerCommand", t => {
  const i = t.split(/[ ]+/);
  const e = i[0];
  i.shift();
  switch (e) {
    case "test_graffiti":
      i[0] = parseInt(i[0]);
      if (i[0] == 1) {
        placingGraffiti = true;
        mp.gui.chat.push("enabled graffiti");
      } else {
        placingGraffiti = false;
        mp.gui.chat.push("disabled graffiti");
      }
      break;
    case "graffiti_font":
      graffiti_font = parseInt(i[0]);
      mp.gui.chat.push(`font: ${graffiti_font}`);
  }
});
mp.events.add("render", () => {
  if (placingGraffiti) {
    mp.game.controls.disableControlAction(0, 24, true);
    let t = camera.getCoord();
    let i = camera.getDirection();
    let e = new mp.Vector3(i.x * 10 + t.x, i.y * 10 + t.y, i.z * 10 + t.z);
    let a = mp.raycasting.testPointToPoint(t, e, localplayer, [1]);
    if (a) {
      mp.game.graphics.drawText("Test", [a.position.x, a.position.y, a.position.z], {
        font: graffiti_font,
        color: [255, 0, 0, 185],
        scale: [0.5, 0.5],
        outline: true,
        centre: true
      });
    }
    if (a && typeof a.entity == "number" && a.entity !== 0 && mp.game.entity.doesExist(a.entity)) {
      mp.game.shapetest.releaseScriptGuidFromEntity(a.entity);
    }
  }
});