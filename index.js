function getMessage(msg,callback){
    console.log(msg);
    callback();
}

function DisplayMessage(){
    console.log("Display Message")
}

getMessage("Get Message",DisplayMessage);
