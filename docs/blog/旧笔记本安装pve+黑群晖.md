1. F1进入bios设置启动项为UEFI Only
2. 下载pve镜像`proxmox-ve_7.4-1.iso`
3. 使用rufus写入镜像到u盘
4. 安装pve，完成后使用局域网访问
![image.png](http://qn.wuzhiyong.eu.org//20240701140936.png)


5. 笔记本配置关闭屏幕和关盖不休眠
`nano /etc/default/grub`
```shell
GRUB_CMDLINE_LINUX="consoleblank=30" 
```
`update-grub`

`nano /etc/systemd/logind.conf`
```shell
HandleLidSwitch=ignore
HandleLidSwitchExternalPower=ignore
HandleLidSwitchDocked=ignore
```
参考：[PVE设置屏幕休眠和笔记本合盖不休眠 - 今天的努力 - 博客园 (cnblogs.com)](https://www.cnblogs.com/pdblogs/p/16535590.html)
6. 由于pve wifi不能桥接，配置wifi nat转发
+ 配置国内源
+ 安装wpasupplicant wireless-tools
+ 安装net-tools
+ 配置wifi
`nano /etc/network/interfaces`
```
auto lo
iface lo inet loopback

iface enp4s0 inet manual


auto wlp5s0
iface wlp5s0 inet dhcp
        wpa-ssid ASUS
        wpa-psk d325e10b18d945a70515e66c14ca8611fe2dccefddfd7566a8086e9f0f85c918


auto vmbr0
iface vmbr0 inet static
        address 10.10.10.1/24
        bridge-ports none
        bridge-stp off
        bridge-fd 0

post-up iptables -t nat -A POSTROUTING -o wlp5s0 -j MASQUERADE;iptables -t nat -A POSTROUTING -d 10.10.10.0/24 -o vmbr0 -j MASQUERADE
post-down iptables -t nat -D POSTROUTING -o wlp5s0 -j MASQUERADE; iptables -t nat -D POSTROUTING -d 10.10.10.0/24 -o vmbr0 -j MASQUERADE
```
参考：[PVE 使用无线网卡 - 简书 (jianshu.com)](https://www.jianshu.com/p/8c684d11baf0)
[pve虚拟机使用wifi网卡 - 哔哩哔哩 (bilibili.com)](https://www.bilibili.com/read/cv26212890/)

7. 安装虚拟机（黑群晖）
参考：[2024年PVE8最新安装使用指南|安装黑群晖｜img格式镜像安装_NAS存储_什么值得买 (smzdm.com)](https://post.smzdm.com/p/al82z7ee/)
8. 安装dhcp并配置，让虚拟机获取虚拟网卡的ip
`nano /etc/dhcp/dhcpd.conf`
```
subnet 10.10.10.0 netmask 255.255.255.0 {
  range 10.10.10.10 10.10.10.99;
  option domain-name-servers 114.114.114.114, 8.8.8.8;
  option routers 10.10.10.1;
}
```

10. 设置静态路由让局域网访问虚拟机
![image.png](http://qn.wuzhiyong.eu.org//20240701144624.png)
![image.png](http://qn.wuzhiyong.eu.org//20240701151159.png)

11. pvetools
[ivanhao/pvetools: proxmox ve tools script(debian9+ can use it).Including email, samba, NFS set zfs max ram, nested virtualization ,docker , pci passthrough etc. for english user,please look the end of readme. (github.com)](https://github.com/ivanhao/pvetools)


![image.png](http://qn.wuzhiyong.eu.org//20240701144723.png)

12. 硬件直通，需要看下cpu是否支持
13. 安装[CloudDrive - 下载(v0.7.6) (clouddrive2.com)](https://www.clouddrive2.com/download.html)，挂在到本地使用

