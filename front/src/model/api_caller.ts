const addr: string = "http://[::1]:4000/";

export type StatusMessage = {
    success: boolean,
    errorMessage?: string,
}

///
/// function who call the api and handle errors
/// return a json with data if all the request is successful
/// return null either
///
export async function callAPI(subAdrr: string): Promise<any> {
    let response: Response = await fetch(addr + subAdrr);
    if(!(handleFetchError(response).success)) {
        return null;
    }

    let json_data: any = await response.json();

    return json_data;
}

///return true if the request is fine, else return false
export async function PostApi(subAdrr: string, body: any): Promise<StatusMessage> {
    let response = await fetch(addr + subAdrr, {
            method: 'POST',
            body: JSON.stringify(body),  
            headers: [["Content-Type","application/json"]], 
        });
    return handleFetchError(response);
    
}

export async function PutApi(subAdrr: string, body: any): Promise<StatusMessage> {
    let response = await fetch(addr + subAdrr, {
        method: 'PUT',
        body: JSON.stringify(body),  
        headers: [["Content-Type","application/json"]], 
    });
    return handleFetchError(response);
}

///return true if everything is fine, else return false
function handleFetchError(response: Response): StatusMessage {
    if(response.status !== 200) {
        console.log(response.url);
        console.log("code erreur : " + response.status);
        console.log(response.statusText);
        console.log(response.text());
        return {
            success: false,
            errorMessage: response.statusText,
        };
    }
    return {
        success: true,
    };
}