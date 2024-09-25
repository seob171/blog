/**
 * 8자리 이상
 * 최소 한 개 이상의 영문자
 * 최소 한 개 이상의 숫자
 * 최소 한 개 이상의 특수문자
 * 특수문자에서 공백은 제외
 */

export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+~`|}{[\]:;?,.\\/-]).{8,}$/;
