var apiPutCall = (apptType, firstName, lastName, provider, apptDate, notes) => {
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({
        apptType,
        firstName,
        lastName,
        provider,
        apptDate,
        notes
    });
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://yjjszlwu3a.execute-api.us-east-2.amazonaws.com", requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error))
}