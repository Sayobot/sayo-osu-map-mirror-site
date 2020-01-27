import { Component, OnInit } from '@angular/core';
import { DeviceOperaService } from '@app/shared/service';
import { Operate, KeyItem } from '@app/shared/models';
import * as myUtils from '@app/utils';

@Component({
    selector: 'app-sayo-control',
    templateUrl: './sayo-control.component.html',
    styleUrls: ['./sayo-control.component.scss']
})
export class SayoControlComponent implements OnInit {
    current: number;
    isSelect = false;

    constructor(public device: DeviceOperaService) {}

    ngOnInit() {
        this.device.assetsCache();
        this.getDeviceList();

        // 绑定 window 离开/刷新 事件，关闭正在连接的设备
        window.addEventListener('beforeunload', () => {
            if (this.device.isConnect) {
                this.close();
            }
        });
    }

    /**
     * 获得设备列表和可操作列表
     */
    getDeviceList() {
        if (this.device.isConnect) {
            this.close();
        }

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
     * @param item 每个按钮的设置项
     */
    isEdit(item: KeyItem) {
        item.isEdit = true;
    }

    /**
     * 修改并获取最新的配置
     */
    write(keyItemOption) {
        this.device.writeDeviceOptions(keyItemOption);
    }

    /**
     * 修改之后进行持久化保存
     */
    save() {
        this.device.saveDeviceOptions();
    }

    /**
     * 选中之后修改编辑状态并触发修改
     * @param isOpen 状态是否为打开
     * @param item 键值项
     */
    onSelect(isOpen: boolean, item: KeyItem, keyItemOption: any) {
        if (!isOpen) {
            item.isEdit = false;
            this.write(keyItemOption);
        }
    }

    /**
     * 复选选中之后修改编辑状态并触发修改
     * @param isOpen 状态是否为打开
     * @param item 键值项
     * @param values 复选选中的值
     */
    onSelectMulti(isOpen: boolean, keyItemOption: any) {
        if (!isOpen) {
            this.write(keyItemOption);
        }
    }

    /**
     * 下载 sayo_control_cli
     */
    onDownload() {
        const url = '/assets/sayo_control.rar';
        myUtils.downloadFile(url);
    }
}
