/**
 * ==============================================================
 * 服务器
 * ==============================================================
 * @param server 服务器标识符
 * @param server_name 服务器英文名称
 * @param server_nameU 服务器中文名称
 * @example {
 *   "server": "0",
 *   "server_name": "default",
 *   "server_nameU": "默认线路"
 * }
 */
export interface Server {
    server: string;
    server_name: string;
    server_nameU: string;
}
