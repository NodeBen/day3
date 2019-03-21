function resolveAfter2Second() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {

    console.log('calling');

    var result = await resolveAfter2Second();
    
    console.log(result);
}

asyncCall();