import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function FaStamp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 512h448v-64H32v64zm384-256h-66.56c-16.26 0-29.44-13.18-29.44-29.44v-9.46c0-27.37 8.88-53.41 21.46-77.72 9.11-17.61 12.9-38.39 9.05-60.42-6.77-38.78-38.47-70.7-77.26-77.45C212.62-9.04 160 37.33 160 96c0 14.16 3.12 27.54 8.69 39.58C182.02 164.43 192 194.7 192 226.49v.07c0 16.26-13.18 29.44-29.44 29.44H96c-53.02 0-96 42.98-96 96v32c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-32c0-53.02-42.98-96-96-96z"}}]})(props);
}
export default FaStamp;
