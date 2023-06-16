export default function UsernameAndPasswordValidation(username, password){
    let errorMessage;
    if(!username && !password){
        return errorMessage = "Username and Password cannot be empty"
    }else if (!username){
        return errorMessage = "Username cannot be empty"
    }else if(!password){
        return errorMessage = "Password cannot be empty"
    }
}