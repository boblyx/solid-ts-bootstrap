/**
 * utils/general.ts
 */

export function isMobile(){
    const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return mobile;
}
