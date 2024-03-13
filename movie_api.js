

function send_movie_api(apiEndpoint){
    return fetch(apiEndpoint)
    .then(Response => {if(!Response.ok){throw new Error('ERROR IN HTTP ${Response.status}');}return Response.json();})

    .catch(error =>{console.error('ERROR: ', error.message);throw error;});

}