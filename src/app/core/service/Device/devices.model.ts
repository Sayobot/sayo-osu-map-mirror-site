export interface CMD {
    vendor_id?: 32905;
    product_id?: 0;
    cmd?: string;
    session?: string;
    path?: string;
    method?: "read" | "write" | "save";
    data?: any;
}

export interface DeviceList {
    device: number;
    status: number;
    data: Device[];
}

export interface Device {
    available: boolean;
    interface_number: number;
    manufacturer_string: string;
    mode: string;
    path: string;
    product_id: number;
    product_string: string;
    release_number: number;
    serial_number: string;
    series: string;
    usage: number;
    usage_page: number;
    vendor_id: number;
    versoin: number;
}

export interface DeviceOptions {
    code: number;
    number: number;
    values: number[];
}

export interface OperateAssets {
    version: string;
    title: string;
    uri: string;
    methods: string[];
    data: Operate[];
}

export interface Operate {
    title: string;
    cmd: string;
    mode: OperateMode[];
}

export interface OperateMode {
    name: string;
    code: number;
    values: string[];
}

export interface KeysAssets {
    version: string;
    title: string;
    multiple: boolean;
    data: KeyCode[];
}

export interface KeyCode {
    name: string;
    code: number;
}

export interface KeyItem {
    th: string;
    td: string;
    code: number | number[];
    isEdit: boolean;
    multiple?: boolean;
    options: any[];
    values?: string[];
}
