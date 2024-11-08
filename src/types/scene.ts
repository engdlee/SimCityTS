export interface IEscene {
  start: () => void;
  stop: () => void;
  onMouseDown: (event: MouseEvent) => void;
  onMouseUp: (event: MouseEvent) => void;
  onMouseMove: (event: MouseEvent) => void;
}
