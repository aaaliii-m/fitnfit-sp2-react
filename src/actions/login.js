export const AddUser = (userName, password) => {
    return {
        type: "Add_User",
        payLoad: {
            userName: userName,
            password: password
        }
    }
}