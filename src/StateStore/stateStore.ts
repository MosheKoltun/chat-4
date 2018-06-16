export {
    setAuthenticationSucceedFlag,
    getAuthenticationSucceedFlag,
    setUsername,
    getUsername
};

//variables
// ========================================================
let username : string = "";
let authenticationSucceededFlag : boolean = false;

//functions
// ========================================================
function setAuthenticationSucceedFlag() {
    authenticationSucceededFlag = true;
}
// ========================================================
function getAuthenticationSucceedFlag() {
    return authenticationSucceededFlag;
}
// ========================================================
function setUsername(myUsername: string) {
    username = myUsername;
}
// ========================================================
function getUsername(): string {
    return username;
}