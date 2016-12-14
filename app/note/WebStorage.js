/*
 * cookie
 * react-cookie
 */
import cookie from 'react-cookie'

const tokenName = 'dzj_token'
const maxAge = 24 * 3600

export function setToken(token) {
  // localStorage.setItem(tokenName, token)
  cookie.save(tokenName, token, { path: '/', maxAge: maxAge})
}

export function getToken() {
  // return localStorage.getItem(tokenName)
  return cookie.load(tokenName)
}

export function logout(cb) {
    // delete localStorage[tokenName]
    cookie.remove(tokenName, { path: '/' })
    if (cb) cb()
}

export function clearToken() {
  cookie.remove(tokenName, { path: '/' })
}

export function loggedIn() {
  return !!getToken()
}

/*
 * local storage/session storage
 * setItem(key, value), getItem(key), removeItem(key), clear()
 */
const cacheManager = window.localStorage
const cacheManager = window.sessionStorage

export function set(key, val) {
	key && cacheManager.setItem(key, val)
}

export function setObject(key, val) {
	key && cacheManager.setItem(key, JSON.stringify(val))
}

export function get(key, defaultVal) {
	let val = cacheManager.getItem(key)
	return val ? val : defaultVal
}

export function getAsObject(key) {
	let rawVal = cacheManager.getItem(key)
	try {
		return rawVal ? JSON.parse(rawVal) : undefined
	} catch(e) {
		return undefined
	}
}

export function remove(key, callback) {
	cacheManager.removeItem(key)
	callback && callback()
}

export function clear() {
	cacheManager.clear()
}
