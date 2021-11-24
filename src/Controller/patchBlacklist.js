export function patchBlacklist(credentials){
    const curl = 'https://bikengold.herokuapp.com/users';
    const options = {
        method : 'PATCH',
        headers : {
            'Content-Type': 'application/json;charset=utf-8',
            },
        body : JSON.stringify(credentials)
    };

    return fetch(curl,options)
    .then(response=>{return response.json()})
    .catch(error=>{alert(error)});
}