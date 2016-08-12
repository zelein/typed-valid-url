declare namespace valid-url {
    function is_uri(value: string): boolean;
    function isUri(value: string): boolean;

    function is_http_uri(value: string, allowHttps?: boolean): boolean;
    function isHttpUri(value: string, allowHttps?: boolean): boolean;

    function is_https_uri(value: string): boolean;
    function isHttpsUri(value: string): boolean;

    function is_web_uri(value: string): boolean;
    function isWebUri(value: string): boolean;
}

export = valid-url;
