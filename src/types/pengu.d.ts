// Pengu
interface FileStat {
    fileName: string
    length: number
    isDir: boolean
}

interface Rcp {
    preInit(name: string, callback: (provider: any) => any): void;
    postInit(name: string, callback: (api: any) => any, blocking?: boolean): void;
    whenReady(name: string): Promise<any>;
    whenReady(names: string[]): Promise<any[]>;
    get(name: string): object | undefined;
}

interface EventData {
    data: any;
    uri: string;
    eventType: 'Create' | 'Update' | 'Delete';
}

interface ApiListener {
    (message: EventData): void;
}


interface PenguInitContext {
    rcp: Rcp;
    socket: {
        observe: (api: string, listener: ApiListener) => void
        disconnect: (api: string, listener: ApiListener) => void
    };
}

interface PluginFS {
    read: (path: string) => Promise<string | undefined>
    write: (path: string, content: string, enableAppendMode?: boolean) => Promise<boolean>
    mkdir: (path: string) => Promise<boolean>
    stat: (path: string) => Promise<FileStat | undefined>
    ls: (path: string) => Promise<string[] | undefined>
    rm: (path: string, recursively: boolean) => Promise<number>
}

declare interface Window{
    PluginFS: PluginFS
    Pengu:{
        PluginFS: PluginFS
    }
}

type errorResponse = {
    errorCode:string;
    httpStatus:number;
    implementationDetails:string;
    message:string;
}
