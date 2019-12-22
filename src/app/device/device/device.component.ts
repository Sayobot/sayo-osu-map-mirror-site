import { Component, OnInit } from "@angular/core";
import { DeviceOperaService } from "@service/Device";
import { MatSelectChange } from "@angular/material/select";
import { Operate, KeyItem } from "@service/Device/devices.model";
import { DownloadService } from "@service/Download";

@Component({
    selector: "app-device",
    templateUrl: "./device.component.html",
    styleUrls: ["./device.component.scss"]
})
export class DeviceComponent implements OnInit {
    current: number;
    isSelect = false;

    constructor(
        public device: DeviceOperaService,
        private download: DownloadService
    ) {}

    ngOnInit() {
        this.device.assetsCache();
        this.getDeviceList();

        // 绑定 window 离开/刷新 事件，关闭正在连接的设备
        window.addEventListener("beforeunload", () => {
            if (this.device.isConnect) this.close();
        });
    }

    /**
     * 获得设备列表和可操作列表
     */
    getDeviceList() {
        if (this.device.isConnect) this.close();

        this.device.getDeviceList();
    }

    /**
     * 连接设备
     * @param path 设备路径
     * @param index 当前连接设备的下标
     */
    connect(path: string, index: number) {
        this.device.connect(path);
        this.current = index;
    }

    /**
     * 关闭设备连接
     */
    close() {
        this.device.close();
        this.current = null;
    }

    /**
     *
     * @param operate 对应的操作项
     */
    getKeyItem(operate: Operate) {
        this.isSelect = !this.isSelect;
        this.device.readDeviceOption(operate);
    }

    /**
     * 是否修改状态
     * @param item
     */
    isEdit(item: KeyItem) {
        item.isEdit = true;
    }

    /**
     * 修改并获取最新的配置
     */
    write() {
        this.device.writeDeviceOptions();
    }

    /**
     * 修改之后进行持久化保存
     */
    save() {
        this.device.saveDeviceOptions();
    }

    /**
     * 选中之后修改编辑状态并触发修改
     * @param event 选中项
     * @param item 键值项
     */
    onSelect(event: MatSelectChange, item: KeyItem) {
        item.isEdit = false;
        this.write();
    }

    /**
     * 下载 sayo_control_cli
     */
    onDownload() {
        const url = "/assets/sayo_control.rar";
        this.download.downloadFile(url);
    }
}
