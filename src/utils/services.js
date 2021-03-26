export default class Service {


    postApiCall(url,data,successResponse,) {
        this.callApi(url,"POST",data,successResponse,errorResponse);
    }

    getApiCall(url,successResponse,errorResponse){
        this.callApi(url,"GET",undefined,successResponse,errorResponse);
    }



    callApi = async (
        url,
        methodType,
        data,
        successCallback,
        errorCallback,
    ) => {
        fetch(url, {
            method: methodType,
            headers: { 
                "Content-Type": "application/json" ,
                Authorization: ""
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                return response.json();
            })
            .then(responseData => {
                console.log(responseData)
                successCallback(responseData);
                return responseData;
            })
            .catch(error => {
                console.log( 'catch ' + JSON.stringify(error))
                errorCallback(error);
                return error;
            });
            
    };

}
