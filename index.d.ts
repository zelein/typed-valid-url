declare module validUrl {
    export function is_uri(value: string): string;
    export function isUri(value: string): string;

    export function is_http_uri(value: string, allowHttps?: boolean): string;
    export function isHttpUri(value: string, allowHttps?: boolean): string;

    export function is_https_uri(value: string): string;
    export function isHttpsUri(value: string): string;

    export function is_web_uri(value: string): string;
    export function isWebUri(value: string): string;
}

export = validUrl;
