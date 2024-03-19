const API_BASE_URL = 'http://127.0.0.1:2999';

type RequestOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    queryParams?: Record<string, string | number | boolean>;
    body?: Record<string, any>;
    headers?: Record<string, string>;
};

export const fetchApi = async (endpoint: string, options: RequestOptions = {}): Promise<any> => {
    const {method = 'GET', queryParams = {}, body, headers = {}} = options;

    const searchParams = new URLSearchParams(queryParams as Record<string, string>);

    const url = new URL(`${API_BASE_URL}/${endpoint}`);
    url.search = searchParams.toString();

    if (body && headers['Content-Type'] === undefined) {
        headers['Content-Type'] = 'application/json';
    }

    const isJson = headers['Content-Type'] === 'application/json';

    const bodyInit: BodyInit | undefined = body && isJson ? JSON.stringify(body) : undefined;

    const response = await fetch(url.toString(), {
        method,
        headers,
        body: bodyInit
    });

    if (!response.ok) {
        throw new Error('API call failed with status ' + response.status);
    }
    return response.json();
};
