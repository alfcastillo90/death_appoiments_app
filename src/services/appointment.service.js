import { authHeader } from '../helpers'
export const appointmentService = {
    getAll
}
function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    console.log(authHeader());
    return fetch(`http://127.0.0.1:8000/api/appointments`, requestOptions).then(handleResponse);
}
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log(response.status);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
              
                location.reload(true);
            }
            console.log(error);

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}