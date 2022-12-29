export const addIcon = (focused) => {
  const color = focused ? "#E8E8E8" : "#FF6C00";
  return `<svg viewBox="0 0 25 25" fill="none">
<circle cx="12.5" cy="12.5" r="12" fill="white" stroke="${color}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z" fill="${color}"/>
</svg>
`;
};
export const deleteIcon = (focused) => {
  const color = !focused ? "#E8E8E8" : "#FF6C00";
  return `<svg viewBox="0 0 37 37" fill="none">
<circle cx="18.4999" cy="18.5" r="12" transform="rotate(-45 18.4999 18.5)" fill="white" stroke="${color}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2574 13.5503L13.5503 14.2574L17.7929 18.5L13.5503 22.7426L14.2574 23.4497L18.5 19.2071L22.7426 23.4497L23.4498 22.7426L19.2071 18.5L23.4498 14.2574L22.7426 13.5503L18.5 17.7929L14.2574 13.5503Z" fill="${color}"/>
</svg>
`;
};
export const commentIcon = (focused) => {
  const color = !focused ? "#E8E8E8" : "#FF6C00";
  return `<svg viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.5C2.99656 12.8199 3.30493 14.1219 3.9 15.3C5.33904 18.1793 8.28109 19.9988 11.5 20C12.8199 20.0034 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0034 12.8199 20 11.5C19.9988 8.28109 18.1793 5.33904 15.3 3.9C14.1219 3.30493 12.8199 2.99656 11.5 3H11C6.68419 3.2381 3.2381 6.68419 3 11V11.5V11.5Z" stroke="${color}" fill="${
    focused && color
  }" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
};
export const arrowLeftIcon = (focused) => {
  const color = !focused ? "#212121" : "#FF6C00";
  return `<svg viewBox="0 0 24 24" fill="none">
<path d="M20 12H4" stroke="${color}" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 18L4 12L10 6" stroke="${color}" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
};
export const gridIcon = (focused) => {
  const color = !focused ? "#212121" : "#FF6C00";
  return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" >
<rect transform="translate(8 8)" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 11H18V18H11V11Z" stroke="${color}" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 11H29V18H22V11Z" stroke="${color}" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 22H29V29H22V22Z" stroke="${color}" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 22H18V29H11V22Z" stroke="${color}" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
};
export const likeIcon = (focused) => {
  const color = !focused ? "#212121" : "#FF6C00";
  return `<svg viewBox="0 0 24 24" fill="none" >
<path d="M13.3646 7.59996H12.8646C12.8646 7.87611 13.0884 8.09996 13.3646 8.09996V7.59996ZM13.3646 4.39998H13.8646H13.3646ZM10.7735 2V1.5C10.5811 1.5 10.4059 1.6103 10.3227 1.78369L10.7735 2ZM7.31863 9.19995L6.86785 8.98365C6.83545 9.05115 6.81863 9.12508 6.81863 9.19995H7.31863ZM7.31863 17.9999H6.81863C6.81863 18.276 7.04249 18.4999 7.31863 18.4999V17.9999ZM17.0612 17.9999L17.0665 17.4999H17.0612V17.9999ZM18.7886 16.6399L18.2953 16.5582L18.2952 16.5591L18.7886 16.6399ZM19.9805 9.43995L20.4738 9.52161L20.474 9.52081L19.9805 9.43995ZM18.2531 7.59996V8.09999L18.2584 8.09994L18.2531 7.59996ZM7.31852 17.9999V18.4999C7.59466 18.4999 7.81852 18.276 7.81852 17.9999H7.31852ZM7.31852 9.19995H7.81852C7.81852 8.92381 7.59466 8.69995 7.31852 8.69995V9.19995ZM13.8646 7.59996V4.39998H12.8646V7.59996H13.8646ZM13.8646 4.39998C13.8646 2.76298 12.4439 1.5 10.7735 1.5V2.5C11.9651 2.5 12.8646 3.38604 12.8646 4.39998L13.8646 4.39998ZM10.3227 1.78369L6.86785 8.98365L7.76942 9.41626L11.2242 2.21631L10.3227 1.78369ZM6.81863 9.19995V17.9999H7.81863V9.19995H6.81863ZM7.31863 18.4999H17.0612V17.4999H7.31863V18.4999ZM17.056 18.4999C18.1356 18.5112 19.1085 17.7805 19.2821 16.7207L18.2952 16.5591C18.2104 17.077 17.7096 17.5067 17.0665 17.4999L17.056 18.4999ZM19.2819 16.7216L20.4738 9.52161L19.4873 9.35829L18.2953 16.5582L19.2819 16.7216ZM20.474 9.52081C20.5761 8.89746 20.3756 8.27092 19.9407 7.80775L19.2117 8.4922C19.442 8.73749 19.5371 9.05422 19.4871 9.3591L20.474 9.52081ZM19.9407 7.80775C19.5079 7.34665 18.8878 7.09328 18.2479 7.09999L18.2584 8.09994C18.6321 8.09602 18.9794 8.24483 19.2117 8.4922L19.9407 7.80775ZM18.2531 7.09996H13.3646V8.09996H18.2531V7.09996ZM7.31852 17.4999H4.72741V18.4999H7.31852V17.4999ZM4.72741 17.4999C4.01276 17.4999 3.5 16.972 3.5 16.3999H2.5C2.5 17.5951 3.53401 18.4999 4.72741 18.4999V17.4999ZM3.5 16.3999V10.7999H2.5V16.3999H3.5ZM3.5 10.7999C3.5 10.2278 4.01276 9.69995 4.72741 9.69995V8.69995C3.53401 8.69995 2.5 9.60476 2.5 10.7999H3.5ZM4.72741 9.69995H7.31852V8.69995H4.72741V9.69995ZM6.81852 9.19995V17.9999H7.81852V9.19995H6.81852Z" fill="${color}"/>
</svg>
`;
};
export const locationIcon = (focused) => {
  const color = !focused ? "#BDBDBD" : "#FF6C00";
  return `<svg viewBox="0 0 24 24" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
};
export const logoutIcon = (focused) => {
  const color = !focused ? "#BDBDBD" : "#FF6C00";
  return `<svg viewBox="0 0 24 24" fill="none" >
<path d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 16L21 12L17 8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 12H9" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
};
export const plusIcon = (focused) => {
  const color = !focused ? "#212121" : "#FFF";
  return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 13.5H19.5V19.5H13.5V20.5H19.5V26.5H20.5V20.5H26.5V19.5H20.5V13.5Z" fill="${color}" fill-opacity="0.8"/>
</svg>
`;
};
export const trashIcon = (focused) => {
  const color = !focused ? "#BDBDBD" : "#FFF";
  return `<svg viewBox="0 0 24 24" fill="none" >
<path d="M3 6H5H21" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5 6C19.5 5.72386 19.2761 5.5 19 5.5C18.7239 5.5 18.5 5.72386 18.5 6H19.5ZM5.5 6C5.5 5.72386 5.27614 5.5 5 5.5C4.72386 5.5 4.5 5.72386 4.5 6H5.5ZM7.5 6C7.5 6.27614 7.72386 6.5 8 6.5C8.27614 6.5 8.5 6.27614 8.5 6H7.5ZM15.5 6C15.5 6.27614 15.7239 6.5 16 6.5C16.2761 6.5 16.5 6.27614 16.5 6H15.5ZM18.5 6V20H19.5V6H18.5ZM18.5 20C18.5 20.8284 17.8284 21.5 17 21.5V22.5C18.3807 22.5 19.5 21.3807 19.5 20H18.5ZM17 21.5H7V22.5H17V21.5ZM7 21.5C6.17157 21.5 5.5 20.8284 5.5 20H4.5C4.5 21.3807 5.61929 22.5 7 22.5V21.5ZM5.5 20V6H4.5V20H5.5ZM8.5 6V4H7.5V6H8.5ZM8.5 4C8.5 3.17157 9.17157 2.5 10 2.5V1.5C8.61929 1.5 7.5 2.61929 7.5 4H8.5ZM10 2.5H14V1.5H10V2.5ZM14 2.5C14.8284 2.5 15.5 3.17157 15.5 4H16.5C16.5 2.61929 15.3807 1.5 14 1.5V2.5ZM15.5 4V6H16.5V4H15.5Z" fill="${color}"/>
<path d="M10 11V17" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 11V17" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
};
export const userIcon = (focused) => {
  const color = !focused ? "#212121" : "#FFF";
  return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M28 29V27C28 24.7909 26.2091 23 24 23H16C13.7909 23 12 24.7909 12 27V29" stroke="${color}" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 19C22.2091 19 24 17.2091 24 15C24 12.7909 22.2091 11 20 11C17.7909 11 16 12.7909 16 15C16 17.2091 17.7909 19 20 19Z" stroke="${color}" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round" />
</svg>
`;
};
export const photoIcon = (focused, inversia) => {
  let color = !focused ? "#BDBDBD" : "#FF6C00";
  if (inversia) {
    color = focused ? "#BDBDBD" : "#FFF";
  }

  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
<g clip-path="url(#clip0_36_0)">
<path d="M11.9998 15.2C13.7671 15.2 15.1998 13.7673 15.1998 12C15.1998 10.2327 13.7671 8.79999 11.9998 8.79999C10.2325 8.79999 8.7998 10.2327 8.7998 12C8.7998 13.7673 10.2325 15.2 11.9998 15.2Z" fill="${color}" />
<path d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" fill="${color}" />
</g>
<defs>
<clipPath id="clip0_36_0">
<rect width="24" height="24" fill="white" />
</clipPath>
</defs>
</svg>
`;
};
export const arrowUpIcon = (focused) => {
  let color = !focused ? "#fff" : "#FF6C00";
  return `<svg width="12" height="16" viewBox="0 0 12 16" fill="none">
<path d="M6 1L6.35355 0.646447C6.15829 0.451184 5.84171 0.451184 5.64645 0.646447L6 1ZM10.6464 6.35355C10.8417 6.54882 11.1583 6.54882 11.3536 6.35355C11.5488 6.15829 11.5488 5.84171 11.3536 5.64645L10.6464 6.35355ZM0.646447 5.64645C0.451184 5.84171 0.451184 6.15829 0.646447 6.35355C0.841709 6.54882 1.15829 6.54882 1.35355 6.35355L0.646447 5.64645ZM5.5 15C5.5 15.2761 5.72386 15.5 6 15.5C6.27614 15.5 6.5 15.2761 6.5 15H5.5ZM5.64645 1.35355L10.6464 6.35355L11.3536 5.64645L6.35355 0.646447L5.64645 1.35355ZM5.64645 0.646447L0.646447 5.64645L1.35355 6.35355L6.35355 1.35355L5.64645 0.646447ZM5.5 1V8H6.5V1H5.5ZM5.5 8V15H6.5V8H5.5Z" fill="${color}"/>
</svg>`;
};