// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    if(height<=0 || mass<=0 || (height<=0 && mass<=0)){
        return("INVALID INPUT");
    }
    else{
    var BMI;
    BMI = mass / (height * height);
    if(BMI<=0){
        return("INVALID INPUT");
    }
    else{
    return(BMI);
    }    
}
    // Write your code here
}

module.exports = BMICalculator;
