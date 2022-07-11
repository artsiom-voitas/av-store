import { redirectToHome } from '../utils'
import { isAuthorizedUser } from './auth'

document.addEventListener("DOMContentLoaded", () => {
    const hasAccessToPage = isAuthorizedUser()
    if (hasAccessToPage) {
        redirectToHome()}
});
