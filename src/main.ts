import "./style.css";
import { createScene } from "./scene.ts";

window.onload = () => {
  window.scene = createScene();
  window.scene.start();
};
