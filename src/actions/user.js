export const LogIn = () => {
    return {
        type: "SET_LOGGED",
        payload: true
    }
}

export const LogOut = () => {
    return {
        type: "UNSET_LOGGED",
        payload: false
    }
}