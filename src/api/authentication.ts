import request from './commons/api-request';

export async function login({ identity, password }: { identity: string, password: string }) {
    const body: { [key: string]: string } = {};
    body['Password'] = password;

    /*
     * https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
    */
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const digitRegex = /^\d+$/;
    if (emailRegex.test(identity)) {
        body['Email'] = identity;
    } else if (digitRegex.test(identity)) {
        body['StaffId'] = identity;
    } else {
        body['UserName'] = identity;
    }

    return await request({
        method: 'POST',
        body: body,
        resource: 'api/authentication/login',
        useAccessToken: false
    });
}

export async function renewAccessToken() {
    return await request({
        method: 'POST',
        resource: 'api/authentication/renew-access-token',
        useAccessToken: false
    });
}

export async function logout() {
    return await request({
        method: 'GET',
        resource: 'api/authentication/logout',
        useAccessToken: false
    });
}
