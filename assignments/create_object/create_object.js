function CreateObject(arr) {
    // Write your code here
    obj1={}
    for(var i=0;i<(arr.length)-1;i=i+2){
        obj1[arr[i]]=arr[i+1]

    }
    return(obj1)
}

module.exports = CreateObject;
