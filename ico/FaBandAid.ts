import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BandAid icon from Font Awesome
 * @module
 */
export function FaBandAid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M0 160v192c0 35.3 28.7 64 64 64h96V96H64c-35.3 0-64 28.7-64 64zm576-64h-96v320h96c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64zM192 416h256V96H192v320zm176-232c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm0 96c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm-96-96c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm0 96c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24z"}}]})(props);
}
export default FaBandAid;
