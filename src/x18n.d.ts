declare module 'x18n' {
    function register(lang:string, messages:any);

    function setDefault(lang:string);

    function set(lang:string);

    function t(lang:string, params?:any):string;

    function on(events:any, callback:Function);
}