
export const verifyAuth = (token: string) => {
	console.log(`verifying ${token}`)
	return token === 'god'
}
