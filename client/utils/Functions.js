export function validateEmail(string) {
    var emailRegExp = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)
    if(emailRegExp.test(string)){
        return true
    }
    return false
}