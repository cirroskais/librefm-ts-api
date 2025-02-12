import { LastFMParams, LastFMUnknownFunction } from './types.js';
export declare class LastFMApiRequest<T> {
    private params;
    constructor();
    set<P>(params: LastFMParams<void | P>): this;
    sign(secret?: string): this;
    send(method?: string | LastFMUnknownFunction, callback?: LastFMUnknownFunction): Promise<T>;
    private setParams;
    private getCallback;
    private getMethod;
    private getOptions;
}
export default LastFMApiRequest;
