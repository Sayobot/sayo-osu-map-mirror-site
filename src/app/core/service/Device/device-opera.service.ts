import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
    Device,
    OperateAssets,
    KeysAssets,
    DeviceList,
    Operate,
    OperateMode,
    DeviceOptions,
    KeyCode,
    KeyItem
} from "./devices.model";
import { numSeparate2SystemArr } from "app/utils";

const deviceUrl = `http://127.0.0.1:7296/api/devices`;
const ASSETS_LIST = ["generalKeys", "modifierKeys", "mouseKeys", "noMore"];

export class KeyItemOption {
    private operate: Operate;
    private keysCache: {
        [key: string]: KeysAssets;
    };
    isEdit = false;

    code: number;
    number: number;

    mode: KeyItem;
    keyItems: KeyItem[] = [];
    modeOptions: OperateMode[];

    constructor(
        operate: Operate,
        keysCache: {
            [key: string]: KeysAssets;
        },
        options: DeviceOptions
    ) {
        this.operate = operate;
        this.keysCache = keysCache;
        this.code = options.code;
        this.number = options.number;
        this.getModeItem();
        this.getValuesItem(options.values);
    }

    update(values) {
        this.getModeItem();
        this.getValuesItem(values);
    }

    /**
     * 获取 mode 项
     */
    getModeItem() {
        this.modeOptions = this.operate.mode;
        const item = this.modeOptions.filter(
            (mode: OperateMode) => mode.code === this.code
        )[0];

        this.mode = {
            th: "mode",
            td: item.name,
            code: item.code,
            isEdit: false,
            options: this.modeOptions,
            values: item.values
        };
    }

    /**
     * 获取键值项对象
     * @param codes code 数组
     */
    getValuesItem(codes: number[]) {
        const values = this.mode.values;
        this.keyItems = [];
        values.forEach((asset: string, index: number) => {
            const cache: KeysAssets = this.keysCache[asset];
            const item = cache.data.filter(
                (item: KeyCode) => item.code === codes[index]
            )[0];

            let code = this.getCode(item ? item.code : codes[index], cache);
            let name = this.getName(code, cache);

            this.keyItems.push({
                th: cache.title,
                td: name,
                multiple: cache.multiple,
                code: code,
                isEdit: false,
                options: cache.data
            });
        });
    }

    getName(code: any, cache): string {
        let result;

        if (code.length > 0) {
            result = [];
            for (let i = 0; i < code.length; i++) {
                const item = cache.data.filter(
                    (item: KeyCode) => item.code === code[i]
                )[0];
                result.push(item ? item.name : "none");
            }
        } else {
            const item = cache.data.filter(
                (item: KeyCode) => item.code === code
            )[0];
            result = item ? item.name : "none";
        }

        return result;
    }

    getCode(code, cache) {
        return cache.multiple ? numSeparate2SystemArr(code) : code;
    }

    /**
     * 根据最新数据返回相应的配置项
     */
    getOptions(): DeviceOptions {
        let values = this.keyItems.map((item: any) => {
            return item.multiple
                ? item.code.reduce((acc, next) => acc + next)
                : item.code;
        });

        return {
            code: <number>this.mode.code,
            number: this.number,
            values: values
        };
    }
}

@Injectable({
    providedIn: "root"
})
export class DeviceOperaService {
    devices: Device[];
    operates: Operate[] = [];
    result: KeyItemOption[] = [];

    session: number;
    targetModes: OperateMode;
    currentOperate: Operate;
    isConnect: boolean = false;

    keysCache: {
        [key: string]: KeysAssets;
    } = {};

    constructor(private http: HttpClient) {}

    /**
     * 获取所有静态资源缓存下来
     */
    async assetsCache() {
        await this.getOperatesAssets();
        await this.getKeyListAssets();
    }

    /**
     * 获取操作项列表
     */
    async getOperatesAssets() {
        this.http
            .get("/assets/operate.json")
            .toPromise()
            .then((res: OperateAssets) => {
                this.operates = res.data;
            });
    }

    /**
     * 获取键值静态缓存
     */
    async getKeyListAssets() {
        ASSETS_LIST.forEach((asset: string) => {
            const url = `/assets/${asset}.json`;
            this.http
                .get(url)
                .toPromise()
                .then((res: KeysAssets) => {
                    this.keysCache[asset] = res;
                });
        });
    }

    /**
     * 获取设备列表
     */
    async getDeviceList() {
        const cmd = JSON.stringify({
            cmd: "search",
            vendor_id: 32905,
            product_id: 0
        });

        this.http
            .post(deviceUrl, cmd)
            .toPromise()
            .then((res: DeviceList) => {
                this.devices = res.data;
            });
    }

    /**
     * 链接一个设备
     * @param path 设备路径
     */
    async connect(path: string) {
        const cmd = JSON.stringify({ cmd: "connect", path: path });
        this.http
            .post(deviceUrl, cmd)
            .toPromise()
            .then((res: any) => {
                this.isConnect = true;
                this.session = res.session;
            });
    }

    /**
     * 关闭当前连接的设备
     */
    async close() {
        const cmd = JSON.stringify({ cmd: "disconnect", session: 1 });
        this.http
            .post(deviceUrl, cmd)
            .toPromise()
            .then((res: { status: number }) => {
                if (res.status === 0) this.isConnect = false;
            });
    }

    /**
     * 更新设备配置，重新生成 result
     * @param options 设备配置
     */
    updateResult(options: DeviceOptions[]) {
        this.result = [];

        options.forEach((option: DeviceOptions) => {
            let item = new KeyItemOption(
                this.currentOperate,
                this.keysCache,
                option
            );

            this.result.push(item);
        });
    }

    /**
     * 获取按键项列表
     */
    readDeviceOption(operate: Operate) {
        const cmd = {
            cmd: operate.cmd,
            method: "read",
            session: this.session
        };

        this.currentOperate = operate;

        this.http
            .post(deviceUrl, JSON.stringify(cmd))
            .toPromise()
            .then((res: { status: number; data: DeviceOptions[] }) => {
                const options = res.data;
                this.updateResult(options);
            });
    }

    /**
     * 根据命令修改设备
     */
    writeDeviceOptions(options: KeyItemOption) {
        const data = options.getOptions();

        const cmd = {
            cmd: this.currentOperate.cmd,
            session: this.session,
            method: "write",
            data: [data]
        };

        this.http
            .post(deviceUrl, JSON.stringify(cmd))
            .toPromise()
            .then((res: { status: number; data: DeviceOptions[] }) => {
                const values = res.data[0].values;
                options.update(values);
            });
    }

    /**
     * 修改后的键位需要保存
     */
    saveDeviceOptions() {
        const cmd = JSON.stringify({ cmd: "save", session: this.session });
        this.http
            .post(deviceUrl, cmd)
            .toPromise()
            .then((res: { status: number; message: string }) => {
                const data = this.result.map((item: KeyItemOption) =>
                    item.getOptions()
                );

                this.updateResult(data);
            });
    }
}
