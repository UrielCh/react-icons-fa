import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FontAwesome icon from Font Awesome
 * @module
 */
export function FaFontAwesome(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48A48 48 0 0 0 0 80V432a48 48 0 0 0 48 48H400a48 48 0 0 0 48-48V80A48 48 0 0 0 400 32ZM336 312c-31.6 11.2-41.2 16-59.8 16-31.4 0-43.2-16-74.6-16a80 80 0 0 0-25.6 4V284a85.9 85.9 0 0 1 25.6-4c31.2 0 43.2 16 74.6 16 10.2 0 17.8-1.4 27.8-4.6v-96c-10 3.2-17.6 4.6-27.8 4.6-31.4 0-43.2-16-74.6-16-25.4 0-37.4 10.4-57.6 14.4V352a16 16 0 0 1-32 0V160a16 16 0 0 1 32 0v6.4c20.2-4 32.2-14.4 57.6-14.4 31.2 0 43.2 16 74.6 16 18.6 0 28.2-4.8 59.8-16Z"}}]})(props);
}
export default FaFontAwesome;
