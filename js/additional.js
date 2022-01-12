const url = "https://derash.herokuapp.com/user";
// const url = "http://localhost:1111/user/";

async function betaUserAdd(){
    let email = document.querySelector("#mc-email");
    let phoneNumber = document.querySelector("#mc-phoneNumber");

    let data = {
        email: email.value,
        phoneNumber: phoneNumber.value
    }

    if((email.value === "" || email.value === null || email.value === undefined) && (phoneNumber.value === "" || phoneNumber.value === null || phoneNumber.value === undefined)){
        console.log("Values empty")
        return;
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });



    location.reload();
    return false;

}

function enableBtn(){
    document.getElementById("form-button").disabled = false;
}