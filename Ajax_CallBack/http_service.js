function makePromiseCall(methodType,url,async=true,data=null)
{
    //creating a promise object which has two parameters resolve and reject
    return new Promise(function(resolve,reject){
    let xhr= new XMLHttpRequest();
    xhr.onload= function(){
        //if connection is closed and status is 200 or 201 then callback method is called
        if(xhr.readyState===4)
        {
            if(xhr.status===200||xhr.status===201)
            {
            resolve(xhr.responseText);
            }
            else if(xhr.status>=400)
            {
                reject({
                    status:xhr.status,
                    statusText:xhr.statusText
                });
                console.log("Xhr failed");
                console.log("Handle 400 client error or 500 server error" )
            }
        }
    }
    xhr.onerror= function(){
        reject({
            status:this.status,
            statusText:xhttp.statusText
        });
    }
        xhr.open(methodType,url,async);
        //changes required for inserting data into json file
        if(data)
        {
            //setting header for request
            xhr.setRequestHeader("Content-Type","application/json");
            xhr.send(JSON.stringify(data));
        }
        else
        {
            xhr.send();
        }
    console.log(methodType+" Request sent to the server" );
    });
}