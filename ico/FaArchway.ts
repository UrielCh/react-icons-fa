import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Archway icon from Font Awesome
 * @module
 */
export function FaArchway(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M560 448h-16V96H32v352H16.02c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16H176c8.84 0 16-7.16 16-16V320c0-53.02 42.98-96 96-96s96 42.98 96 96l.02 160v16c0 8.84 7.16 16 16 16H560c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm0-448H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h544c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16z"}}]})(props);
}
export default FaArchway;
