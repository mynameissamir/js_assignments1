function CanDrive(hasDrivingLiscence, isTired, isSober) {
    if(hasDrivingLiscence === false){
        return("You cannot drive")
    }
    else if(hasDrivingLiscence === true && isTired === false && isSober === true){
        return("You can drive")
    }
    else{
        return("You shouldn't drive")
    }
    // Write you code here
}

module.exports = CanDrive;
