/// <reference types="vite/client" />

import { IEscene } from "./types/scene";

declare global {
  interface Window {
    scene: IEscene;
  }
}
