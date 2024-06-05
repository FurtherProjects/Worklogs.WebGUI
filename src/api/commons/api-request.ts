const buildQueryString = (params: { [key: string]: string }) => {
    if (!params) {
        return new URLSearchParams();
    }

    const urlSearchParams = new URLSearchParams(params);
    return urlSearchParams;
};

function buildUrl(
    useHttps: boolean,
    host: string,
    port: number,
    path: string,
    params: { [key: string]: string }) {

    const protocol = useHttps ? 'https' : 'http';
    const baseUrl = `${protocol}://${host}:${port}`;
    const url = new URL(path, baseUrl);
    url.search = buildQueryString(params).toString(); // '?' is added automatically if absent.
    return url;
};

export async function request(options: {
    method?: 'HEAD' | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    resource: string,
    params?: { [key: string]: string },
    body?: { [key: string]: string | number } | FormData,
    useAccessToken?: boolean
}): Promise<{
    ok: boolean,
    body: {
        [key: string]: any
    },
    response: Response
}> {
    const { method, resource, params, body, useAccessToken } = options;
    const headers: { [key: string]: string } = {};
    if (body instanceof FormData) {
        headers['Content-Type'] = 'multipart/form-data';
    } else if (body != null) {
        headers['Content-Type'] = 'application/json';
    } else {
        // Don't set Content-Type.
    }

    const url = buildUrl(USE_HTTPS, API_HOST, API_PORT, resource, params);

    const requestInit: RequestInit = {
        mode: 'cors',
        method: method,
        headers: headers,
        body: (body && JSON.stringify(body)) ?? null,
        credentials: 'include'
    };

    let response = await fetch(url, requestInit);
    if (response.status === 401) {
        const renewAccessTokenUrl = buildUrl(USE_HTTPS, API_HOST, API_PORT, 'api/authentication/renew-access-token', null);
        const renewAccessTokenResponse = await fetch(renewAccessTokenUrl, {
            mode: 'cors',
            method: 'POST',
            credentials: 'include'
        });

        if (!renewAccessTokenResponse.ok) {
            location.replace('/login');
            return {
                ok: false,
                body: null,
                response: null
            };
        }
        
        response = await fetch(url, requestInit);
    }

    let returnBody = {};
    const responseContentType = response.headers.get('content-type');
    if (responseContentType && responseContentType.includes('application/json')) {
        returnBody = await response.json();
    }

    return {
        ok: response.ok,
        body: returnBody,
        response: response
    };
}

export default request;
