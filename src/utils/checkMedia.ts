import { DESKTOP_MEDIA, TABLET_MEDIA, MOBILE_MEDIA } from "const";

export function checkMedia(w: number, parameterMedia: string) {
  switch (parameterMedia) {
    case DESKTOP_MEDIA.name:
      return w >= DESKTOP_MEDIA.size;
    case TABLET_MEDIA.name:
      return w >= TABLET_MEDIA.size;
    case MOBILE_MEDIA.name:
      return w >= MOBILE_MEDIA.size;
    default:
      break;
  }
}
