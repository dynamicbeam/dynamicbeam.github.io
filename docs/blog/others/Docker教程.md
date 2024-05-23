## 一些概念



+ 仓库 registry

  Docker仓库是集中存放镜像文件的场所。

  仓库分为公开仓库和私有仓库两种。

  最大的公开仓库是Docker官方的Docker Hub：https://hub.docker.com/

+ 镜像 image

​		Docker镜像就是一个只读的模板。镜像可以用来创建Docker容器，一个镜像可以创建多个容器。

+ 容器 container

​		Docker利用容器独立运行的一个或一组应用，应用程序或服务运行在容器里面，容器就类似于一个虚拟化的运行环境，容器是用镜像创建的运行实例。

![Docker教程-2024-05-06-22-19-40](http://scwh1zyu0.hn-bkt.clouddn.com/Docker教程-2024-05-06-22-19-40.png)





## 镜像加速



> docker的镜像默认从[docker hub](https://hub-stage.docker.com/)上拉取,访问会慢点。也可以从国内镜像拉取,方式如下两种：

+ 直接指定拉取地址：

`docker pull hub.c.163.com/library/mysql:latest`

+ 配置镜像加速地址

​	登录阿里云，进入 `工作台` -> `容器镜像服务` -> `镜像工具` -> `镜像加速器`。



​	里面提供了一个加速器地址：`https://xxxxx.mirror.aliyuncs.com`，将该地址配置到docker中：

![Docker常用命令-2024-05-06-16-28-32](http://scwh1zyu0.hn-bkt.clouddn.com/Docker常用命令-2024-05-06-16-28-32.png)







------

## 命令 



### 启动类命令

+ 启动docker：

```shell
systemctl start docker
```



+ 停止Docker：

```shell
systemctl stop docker
```



+ 重启Docker：



```shell
systemctl restart docker
```



+ 查看状态：

```shell
systemctl status docker
```



+ 设置开机自启：



```shell
systemctl enable docker
```

### 帮助类命令

+ 查看Docker概要信息：

```shell
docker info
```

+ 查看Docker总体帮助文档：

```shell
docker --help
```



+ 查看docker具体命令帮助文档：

```shell
docker 具体命令 --help
```



### 镜像命令



#### 列出本地主机上的镜像



```shell
docker images
```



参数：



- `-a`：列出所有镜像（含历史镜像）

- `-q`：只显示镜像ID

- `-f`：过滤



#### 在远程仓库中搜索镜像



（默认取docker hub中搜索）



```shell
docker search 镜像名称
```



参数：



- `-f`：过滤

- `--limit 数量`：只展示前几项



#### 下载镜像



```shell
docker pull 镜像名称[:tag]
```



不加 tag 时，默认下载最新的镜像（即tag为`latest`）。



#### 查看占据的空间



查看镜像/容器/数据卷所占的空间：



```shell
docker system df
```



#### 删除镜像



```shell
docker rmi 镜像名称/ID
```



可以使用空格分隔，删除多个镜像：



```shell
docker rmi 镜像1 镜像2 镜像3
```



删除全部镜像：



```shell
docker rmi -f $(docker images -qa)
```





### 容器命令



`docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`

常用的参数：



- `--name`：为容器指定一个名称

- `-d`：后台运行容器并返回容器ID，也即启动守护式容器

- `-i`：以交互模式（interactive）运行容器，通常与`-t`同时使用

- `-t`：为容器重新分配一个伪输入终端（tty），通常与`-i`同时使用。也即启动交互式容器（前台有伪终端，等待交互）

- `-e`：为容器添加环境变量

- `-P`：随机端口映射。将容器内暴露的所有端口映射到宿主机随机端口

- `-p`：指定端口映射



`-p`指定端口映射的几种不同形式：



- `-p hostPort:containerPort`：端口映射，例如`-p 8080:80`

- `-p ip:hostPort:containerPort`：配置监听地址，例如 `-p 10.0.0.1:8080:80`

- `-p ip::containerPort`：随机分配端口，例如 `-p 10.0.0.1::80`

- `-p hostPort1:containerPort1 -p hostPort2:containerPort2`：指定多个端口映射，例如`-p 8080:80 -p 8888:3306`



#### 启动交互式容器



```shell
# -i 交互模式

# -t 分配一个伪输入终端tty

# ubuntu 镜像名称

# /bin/bash（或者bash） shell交互的接口

docker run -it ubuntu /bin/bash
```



> 退出交互模式：



+ 方式1：



```shell
# 在交互shell中exit即可退回宿主机
exit;
```



+ 方式2：使用快捷键`ctrl` + `P` + `Q`



> 方式1 退出后，容器会停止；

> 方式2 退出后容器依然正在运行。

+ #### 列出正在运行的容器



```shell
docker ps [OPTIONS]
```



常用参数：



- `-a`：列出当前所有正在运行的容器+历史上运行过的容器

- `-l`：显示最近创建的容器

- `-n`：显示最近n个创建的容器

- `-q`：静默模式，只显示容器编号





#### 启动已经停止的容器



```shell
docker start 容器ID或容器名
```



#### 重启容器



```shell
docker restart 容器ID或容器名
```



#### 停止容器



```shell
docker stop 容器ID或容器名
```



#### 强制停止容器



```shell
docker kill 容器ID或容器名
```



#### 删除容器



删除已经停止的容器：



```shell
docker rm 容器ID或容器名
```



**删除容器是 `docker rm`，删除镜像是 `docker rmi`，注意区分。**



#### 强制删除正在运行的容器：



```shell
docker rm -f 容器ID或容器名
```



#### 一次删除多个容器实例：



```shell
docker rm -f ${docker ps -a -q}

# 或者
docker ps -a -q | xargs docker rm
```



#### 查看容器日志



```shell
docker logs 容器ID或容器名
```



#### 查看容器内运行的进程



```shell
docker top 容器ID或容器名
```



#### 查看容器内部细节



```shell
docker inspect 容器ID或容器名
```



#### 进入正在运行的容器



> 进入正在运行的容器，并以命令行交互：



```shell
docker exec -it 容器ID bashShell
```



> 重新进入：



```shell
docker attach 容器ID
```



`docker exec` 和 `docker attach` 区别：



- `attach`直接进入容器启动命令的终端，不会启动新的进程，用`exit`退出会导致容器的停止

- `exec`是在容器中打开新的终端，并且可以启动新的进程，用`exit`退出不会导致容器的停止



如果有多个终端，都对同一个容器执行了 `docker attach`，就会出现类似投屏显示的效果。一个终端中输入输出的内容，在其他终端上也会同步的显示。



#### 容器和宿主机文件拷贝



> 容器内文件拷贝到宿主机：



```shell
docker cp 容器ID:容器内路径 目的主机路径
```



> 宿主机文件拷贝到容器中：



```shell
docker cp 主机路径 容器ID:容器内路径
```



#### 导入和导出容器



`export`：导出容器的内容流作为一个tar归档文件（对应`import`命令）；



`import`：从tar包中的内容创建一个新的文件系统再导入为镜像（对应`export`命令）；



示例：



```shell
# 导出
# docker export 容器ID > tar文件名
docker export abc > aaa.tar

# 导入
# cat tar文件 | docker import - 自定义镜像用户/自定义镜像名:自定义镜像版本号
cat aaa.tar | docker import - test/mytest:1.0.1
```



#### 将容器生成新镜像



> `docker commit`提交容器副本使之成为一个新的镜像。



docker 启动一个镜像容器后， 可以在里面执行一些命令操作，然后使用`docker commit`将新的这个容器快照生成一个镜像。



```shell
docker commit -m="提交的描述信息" -a="作者" 容器ID 要创建的目标镜像名:[tag]
```



Docker挂载主机目录，可能会出现报错：`cannot open directory .: Perission denied`。



解决方案：在命令中加入参数 `--privileged=true`。



CentOS7安全模块比之前系统版本加强，不安全的会先禁止，目录挂载的情况被默认为不安全的行为，在SELinux里面挂载目录被禁止掉了。如果要开启，一般使用 `--privileged=true`，扩大容器的权限解决挂载没有权限的问题。也即使用该参数，容器内的root才拥有真正的root权限，否则容器内的root只是外部的一个普通用户权限。



#### 容器数据卷



卷就是目录或文件，存在于一个或多个容器中，由docker挂载到容器，但不属于联合文件系统，因此能够绕过UnionFS，提供一些用于持续存储或共享数据。



特性：卷设计的目的就是数据的持久化，完全独立于容器的生存周期，因此Docker不会在容器删除时删除其挂载的数据卷。



特点：



- 数据卷可以在容器之间共享或重用数据

- 卷中的更改可以直接实施生效

- 数据卷中的更改不会包含在镜像的更新中

- 数据卷的生命周期一直持续到没有容器使用它为止



> 运行一个带有容器卷存储功能的容器实例：



```shell
docker run -it --privileged=true -v 宿主机绝对路径目录:容器内目录[rw | ro] 镜像名
```



可以使用`docker inspect`查看容器绑定的数据卷。



权限：



-  `rw`：读写 

-  `ro`：只读。如果宿主机写入内容，可以同步给容器内，容器内可以读取。 



容器卷的继承：



```shell
# 启动一个容器
docker run -it --privileged=true /tmp/test:/tmp/docker --name u1 ubuntu /bin/bash

# 使用 --volumes-from 继承 u1的容器卷映射配置
docker run -it --privileged=true --volumes-from u1 --name u2 ubuntu
```

![Docker教程-2024-05-06-17-30-16](http://scwh1zyu0.hn-bkt.clouddn.com/Docker教程-2024-05-06-17-30-16.png)



## Docker 安装 Mysql



以安装 Mysql 5.7为例：



```shell
docker pull mysql:5.7
```



### Mysql 单机



#### 简单版 Mysql 5.7 安装



简单的启动Mysql容器：



```shell
# 需要使用 -e 配置环境变量 MYSQL_ROOT_PASSWORD（mysql root用户的密码）
docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7
```



简单版的Mysql会存在以下问题：



- 中文乱码

- 没有容器卷映射



启动docker容器后，可以正常的连接、创建数据库，创建表，插入数据。但是插入中文则会报错。



例如：



```sql
-- 创建db01数据库
create database db01;
-- 切换到db01;
use db01;
-- 创建表
create table t1(id int, name varchar(20));

-- 插入英文可以正常插入
insert into t1 values(1, 'abc');

-- 插入中文报错
insert into t1 values(2, '张三');
```



这是因为docker默认的字符集的问题，可以在mysql中使用以下命令查看数据库字符集：



```sql
show variables like 'character%';
```



返回的字符集中，`character_set_database`、`character_set_server`等都为`latin1`字符集，所以会报错。



而且因为启动容器时没有配置容器卷映射，当容器意外被删时，数据无法找回。



#### 实际应用版 Mysql 5.7安装



启动 Mysql 容器，并配置容器卷映射：



```shell
docker run -d -p 3306:3306 \
           --privileged=true \
           -v /app/mysql/log:/var/log/mysql \
           -v /app/mysql/data:/var/lib/mysql \
           -v /app/mysql/conf:/etc/mysql/conf.d \
           -e MYSQL_ROOT_PASSWORD=root \
           --name mysql \
           mysql:5.7
```



在`/app/mysql/conf`下新建 `my.cnf`，通过容器卷同步给mysql实例，解决中文乱码问题：



```plain
[client]
default_character_set=utf8
[mysqld]
collation_server = utf8_general_ci
character_set_server = utf8
```



重启mysql容器，使得容器重新加载配置文件：



```shell
docker restart mysql
```



此时便解决了中文乱码（中文插入报错）问题。



而且因为启动时将容器做了容器卷映射，将mysql的配置（映射到`/app/mysql/conf`）、数据（映射到`/app/mysql/data`）、日志（映射到`/app/mysql/log`）都映射到了宿主机实际目录，所以即使删除了容器，也不会产生太大影响。只需要再执行一下启动Mysql容器命令，容器卷还按相同位置进行映射，所有的数据便都可以正常恢复。



### Mysql 主从复制安装



安装主服务器容器实例（端口号3307）：



1.  启动容器实例 

```shell
docker run -p 3307:3306 \
           --name mysql-master \
           --privileged=true \
           -v /app/mysql-master/log:/var/log/mysql \
           -v /app/mysql-master/data:/var/lib/mysql \
           -v /app/mysql-master/conf:/etc/mysql \
           -e MYSQL_ROOT_PASSWORD=root \
           -d mysql:5.7
```

 

2.  进入`/app/mysql-master/conf`，新建`my.cnf`配置文件： 

```plain
[mysqld]
## 设置server_id, 同一个局域网中需要唯一
server_id=101
## 指定不需要同步的数据库名称
binlog-ignore-db=mysql
## 开启二进制日志功能
log-bin=mall-mysql-bin
## 设置二进制日志使用内存大小（事务）
binlog_cache_size=1M
## 设置使用的二进制日志格式（mixed,statement,row）
binlog_format=mixed
## 二进制日志过期清理时间。默认值为0，表示不自动清理
expire_logs_days=7
## 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断
## 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致
slave_skip_errors=1062
```

 

3. 重启容器实例 

```shell
docker restart mysql-master
```

 

4. 进入容器实例内 

```shell
docker exec -it mysql-master /bin/bash
```

5.  登录mysql，创建数据同步用户 

```sql
-- 首先使用 mysql -uroot -p 登录mysql
-- 创建数据同步用户
create user 'slave'@'%' identified by '123456';
-- 授权
grant replication slave, replication client on *.* to 'slave'@'%';
flush privileges;
```

 



安装从服务器容器实例（端口号3308）：



1.  启动容器服务： 

```shell
docker run -p 3308:3306 \
           --name mysql-slave \
           --privileged=true \
           -v /app/mysql-slave/log:/var/log/mysql \
           -v /app/mysql-slave/data:/var/lib/mysql \
           -v /app/mysql-slave/conf:/etc/mysql \
           -e MYSQL_ROOT_PASSWORD=root \
           -d mysql:5.7
```

 

2. 进入`/app/mysql-slave/conf`目录，创建`my.cnf`配置文件： 

```plain
[mysqld]
## 设置server_id, 同一个局域网内需要唯一
server_id=102
## 指定不需要同步的数据库名称
binlog-ignore-db=mysql
## 开启二进制日志功能，以备slave作为其它数据库实例的Master时使用
log-bin=mall-mysql-slave1-bin
## 设置二进制日志使用内存大小（事务）
binlog_cache_size=1M
## 设置使用的二进制日志格式（mixed,statement,row）
binlog_format=mixed
## 二进制日志过期清理时间。默认值为0，表示不自动清理
expire_logs_days=7
## 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断
## 如：1062错误是指一些主键重复，1032是因为主从数据库数据不一致
slave_skip_errors=1062
## relay_log配置中继日志
relay_log=mall-mysql-relay-bin
## log_slave_updates表示slave将复制事件写进自己的二进制日志
log_slave_updates=1
## slave设置只读（具有super权限的用户除外）
read_only=1
```

3.  修改完配置需要重启slave容器实例 

```shell
docker restart mysql-slave
```

 



在主数据库中查看主从同步状态：



1.  进入主数据库容器： 

```shell
docker exec -it mysql-master /bin/bash
```

2.  进入Mysql 

```shell
mysql -uroot -p
```

3. 查看主从同步状态 

```sql
show master status;
```


主要查看返回结果的文件名`File`、当前位置`Position` 



进入从数据库容器，配置主从复制：



1.  进入从数据库容器： 

```shell
docker exec -it mysql-slave /bin/bash
```

2. 进入数据库 

```shell
mysql -uroot -p
```

3. 配置从数据库所属的主数据库： 

```sql
-- 格式：
-- change master to master_host='宿主机ip',master_user='主数据库配置的主从复制用户名',master_password='主数据库配置的主从复制用户密码',master_port=宿主机主数据库端口,master_log_file='主数据库主从同步状态的文件名File',master_log_pos=主数据库主从同步状态的Position,master_connect_retry=连接失败重试时间间隔（秒）;

change master to master_host='192.168.xxx.xxx',master_user='slave',master_password='123456',master_port=3307,master_log_file='mall-mysql-bin.000001',master_log_pos=769,master_connect_retry=30;
```

 

4. 查看主从同步状态： 

```sql
# \G 可以将横向的结果集表格转换成纵向展示。
# slave status的字段比较多，纵向展示比友好
show slave status \G;
```


除了展示刚刚配置的主数据库信息外，主要关注 `Slave_IO_Running`、`Slave_SQL_Running`。目前两个值应该都为 `No`，表示还没有开始。 

5. 开启主从同步： 

```sql
start slave;
```

 

6.  再次查看主从同步状态，`Slave_IO_Running`、`Slave_SQL_Running`都变为`Yes`。 



主从复制测试：



1.  在主数据库上新建库、使用库、新建表、插入数据 

```sql
create database db01;
use db01;
create table t1 (id int, name varchar(20));
insert into t1 values (1, 'abc');
```

 

2. 在从数据库上使用库、查看记录

```sql
show databases;
use db01;
select * from t1;
```



## Docker安装Redis



以 Redis 6.0.8 为例：

```shell
docker pull redis:6.0.8
```



### 单机版安装

#### 简单版 Redis

简单的启动Redis容器：

```shell
docker run -p 6379:6379 -d redis:6.0.8
```



简单版没有配置容器卷映射，当容器被删除时数据无法恢复。



#### 实际应用版Redis

配置文件、数据文件都和容器卷进行映射。



步骤：

1.  宿主机创建目录`/app/redis` 

2.  在`/app/redis`下创建文件`redis.conf`，主要修改以下几项配置 

```plain
# 开启密码验证（可选）
requirepass 123

# 允许redis外地连接，需要注释掉绑定的IP
# bind 127.0.0.1

# 关闭保护模式（可选）
protected-mode no

# 注释掉daemonize yes，或者配置成 daemonize no。因为该配置和 docker run中的 -d 参数冲突，会导致容器一直启动失败
daemonize no

# 开启redis数据持久化， （可选）
appendonly yes
```


即最后的配置文件为：  

3. 启动docker容器：（因为要使用自定义的配置文件，所以需要指定容器运行的命令为`redis-server 容器内配置文件路径`） 

```shell
docker run -d -p 6379:6379 --name redis --privileged=true \
           -v /app/redis/redis.conf:/etc/redis/redis.conf \
           -v /app/redis/data:/data \
           redis:6.0.8 \
           redis-server /etc/redis/redis.conf
```

 

### 3主3从Redis集群

#### 搭建

使用docker搭建3主3从的Redis集群，每台主机都对应一台从机。

启动6台redis容器

```shell
# 启动第1台节点
# --net host 使用宿主机的IP和端口，默认
# --cluster-enabled yes 开启redis集群
# --appendonly yes 开启redis持久化
# --port 6381 配置redis端口号
docker run -d --name redis-node-1 --net host --privileged=true -v /app/redis-cluster/share/redis-node-1:/data redis:6.0.8 --cluster-enabled yes --appendonly yes --port 6381

# 启动第2台节点
docker run -d --name redis-node-2 --net host --privileged=true -v /app/redis-cluster/share/redis-node-2:/data redis:6.0.8 --cluster-enabled yes --appendonly yes --port 6382

# 启动第3台节点
docker run -d --name redis-node-3 --net host --privileged=true -v /app/redis-cluster/share/redis-node-3:/data redis:6.0.8 --cluster-enabled yes --appendonly yes --port 6383

# 启动第4台节点
docker run -d --name redis-node-4 --net host --privileged=true -v /app/redis-cluster/share/redis-node-4:/data redis:6.0.8 --cluster-enabled yes --appendonly yes --port 6384

# 启动第5台节点
docker run -d --name redis-node-5 --net host --privileged=true -v /app/redis-cluster/share/redis-node-5:/data redis:6.0.8 --cluster-enabled yes --appendonly yes --port 6385

# 启动第6台节点
docker run -d --name redis-node-6 --net host --privileged=true -v /app/redis-cluster/share/redis-node-6:/data redis:6.0.8 --cluster-enabled yes --appendonly yes --port 6386
```



构建主从关系：

1.  进入节点1（或其中任意一个节点）: 

```shell
docker exec -it redis-node-1 /bin/bash
```

 

2. 构建主从关系： 

```shell
# 宿主机IP:端口
redis-cli --cluster create 192.168.xxx.xxx:6381 192.168.xxx.xxx:6382 192.168.xxx.xxx:6383 192.168.xxx.xxx:6384 192.168.xxx.xxx:6385 192.168.xxx.xxx:6386 --cluster-replicas 1
```

3. redis尝试自动进行主从节点分配 

4. 因为我们的docker容器IP相同，所以会出现警告，可以直接忽略该警告 

```plain
[WARNING] Some slaves are in the same host as their master
```

 

5. redis自动分配结果完成后，需要输入 `Yes` 确认配置信息： 

```plain
M: f451eb48bbc0a7c31c7da022ffe80cc1696e0f37 192.168.xxx.xxx:6381
   slots:[0-5460] (5461 slots) master
M: 05984211b8c38222a73abeff1d4e459c0fe1efbc 192.168.xxx.xxx:6382
   slots:[5461-10922] (5462 slots) master
M: 1fc935c12b1d34a7df50aed643c195eb29bb3435 192.168.xxx.xxx:6383
   slots:[10923-16383] (5461 slots) master
S: f8d0de47114bf33438747acd713cce4e412ae721 192.168.xxx.xxx:6384
   replicates 1fc935c12b1d34a7df50aed643c195eb29bb3435
S: de0b393c17e452d856f6de2b348e9ca4e5aa4002 192.168.xxx.xxx:6385
   replicates f451eb48bbc0a7c31c7da022ffe80cc1696e0f37
S: 0c0767e13a09ee48541738d4163592cd9842c143 192.168.xxx.xxx:6386
   replicates 05984211b8c38222a73abeff1d4e459c0fe1efbc
Can I set the above configuration? (type 'yes' to accept):
```

 

1.  输入`Yes`确认后，redis会向其他节点发送信息加入集群，并分配哈希槽： 

```plain
>>> Nodes configuration updated
>>> Assign a different config epoch to each node
>>> Sending CLUSTER MEET messages to join the cluster
Waiting for the cluster to join
.....
>>> Performing Cluster Check (using node 192.168.xxx.xxx:6381)
M: f451eb48bbc0a7c31c7da022ffe80cc1696e0f37 192.168.xxx.xxx:6381
   slots:[0-5460] (5461 slots) master
   1 additional replica(s)
M: 1fc935c12b1d34a7df50aed643c195eb29bb3435 192.168.xxx.xxx:6383
   slots:[10923-16383] (5461 slots) master
   1 additional replica(s)
M: 05984211b8c38222a73abeff1d4e459c0fe1efbc 192.168.xxx.xxx:6382
   slots:[5461-10922] (5462 slots) master
   1 additional replica(s)
S: 0c0767e13a09ee48541738d4163592cd9842c143 192.168.xxx.xxx:6386
   slots: (0 slots) slave
   replicates 05984211b8c38222a73abeff1d4e459c0fe1efbc
S: f8d0de47114bf33438747acd713cce4e412ae721 192.168.xxx.xxx:6384
   slots: (0 slots) slave
   replicates 1fc935c12b1d34a7df50aed643c195eb29bb3435
S: de0b393c17e452d856f6de2b348e9ca4e5aa4002 192.168.xxx.xxx:6385
   slots: (0 slots) slave
   replicates f451eb48bbc0a7c31c7da022ffe80cc1696e0f37
[OK] All nodes agree about slots configuration.
>>> Check for open slots...
>>> Check slots coverage...
[OK] All 16384 slots covered.
```

查看集群状态：

1.  进入容器节点1（或集群中其他节点）： 

```shell
docker exec -it redis-node-1 /bin/bash
```

 

2.  使用`redis-cli`连接到`6381`节点： 

```shell
redis-cli -p 6381
```

 

3. 使用`redis`的相关命令查看集群状态： 

```shell
cluster info
```


其中，分配的哈希槽数量 `cluster_slots_assigned`为16384，集群节点数量`cluster_known_nodes`为6 

4.  查看集群节点信息 

```shell
cluster nodes
```

 





## Dockerfile

> Dockerfile是用来构建Docker镜像的文本文件，是由一条条构建镜像所需的指令和参数构成的脚本。
>
> 构建步骤：



1. 编写Dockerfile文件

2. `docker build`命令构建镜像

3. `docker run`依据镜像运行容器实例



### 构建过程

> Dockerfile编写：



- 每条保留字指令都必须为大写字母，且后面要跟随至少一个参数

- 指令按照从上到下顺序执行

- `#`表示注释

- 每条指令都会创建一个新的镜像层并对镜像进行提交



> Docker引擎执行Docker的大致流程：



1. docker从基础镜像运行一个容器
2. 执行一条指令并对容器做出修改
3. 执行类似`docker commit`的操作提交一个新的镜像层
4. docker再基于刚提交的镜像运行一个新容器
5. 执行Dockerfile中的下一条指令，直到所有指令都执行完成



### Dockerfile保留字



#### FROM



基础镜像，当前新镜像是基于哪个镜像的，指定一个已经存在的镜像作为模板。Dockerfile第一条必须是`FROM`



```dockerfile
# FROM 镜像名
FROM hub.c.163.com/library/tomcat
```



#### MAINTAINER



镜像维护者的姓名和邮箱地址



```dockerfile
# 非必须
MAINTAINER ZhangSan zs@163.com
```



#### RUN



容器构建时需要运行的命令。



有两种格式：



-  shell格式 

```dockerfile
# 等同于在终端操作的shell命令
# 格式：RUN <命令行命令>
RUN yum -y install vim
```

 

-  exec格式 

```dockerfile
# 格式：RUN ["可执行文件" , "参数1", "参数2"]
RUN ["./test.php", "dev", "offline"]  # 等价于 RUN ./test.php dev offline
```

 



`RUN`是在`docker build`时运行



#### EXPOSE



当前容器对外暴露出的端口。



```dockerfile
# EXPOSE 要暴露的端口
# EXPOSE <port>[/<protocol] ....
EXPOSE 3306 33060
```



#### WORKDIR



指定在创建容器后， 终端默认登录进来的工作目录。



```dockerfile
ENV CATALINA_HOME /usr/local/tomcat
WORKDIR $CATALINA_HOME
```



#### USER



指定该镜像以什么样的用户去执行，如果不指定，默认是`root`。（一般不修改该配置）



```dockerfile
# USER <user>[:<group>]
USER patrick
```



#### ENV



用来在构建镜像过程中设置环境变量。



这个环境变量可以在后续的任何`RUN`指令或其他指令中使用



```dockerfile
# 格式 ENV 环境变量名 环境变量值
# 或者 ENV 环境变量名=值
ENV MY_PATH /usr/mytest

# 使用环境变量
WORKDIR $MY_PATH
```



#### VOLUME



容器数据卷，用于数据保存和持久化工作。类似于 `docker run` 的`-v`参数。



```dockerfile
# VOLUME 挂载点
# 挂载点可以是一个路径，也可以是数组（数组中的每一项必须用双引号）
VOLUME /var/lib/mysql
```



#### ADD



将宿主机目录下（或远程文件）的文件拷贝进镜像，且会自动处理URL和解压tar压缩包。



#### COPY



类似`ADD`，拷贝文件和目录到镜像中。



将从构建上下文目录中`<源路径>`的文件目录复制到新的一层镜像内的`<目标路径>`位置。



```dockerfile
COPY src dest
COPY ["src", "dest"]
# <src源路径>：源文件或者源目录
# <dest目标路径>：容器内的指定路径，该路径不用事先建好。如果不存在会自动创建
```



#### CMD



指定容器启动后要干的事情。



有两种格式：



-  shell格式 

```dockerfile
# CMD <命令>
CMD echo "hello world"
```

 

-  exec格式 

```dockerfile
# CMD ["可执行文件", "参数1", "参数2" ...]
CMD ["catalina.sh", "run"]
```

 

-  参数列表格式 

```dockerfile
# CMD ["参数1", "参数2" ....]，与ENTRYPOINT指令配合使用
```

 



Dockerfile中如果出现多个`CMD`指令，只有最后一个生效。`CMD`会被`docker run`之后的参数替换。



例如，对于tomcat镜像，执行以下命令会有不同的效果：



```shell
# 因为tomcat的Dockerfile中指定了 CMD ["catalina.sh", "run"]
# 所以直接docker run 时，容器启动后会自动执行 catalina.sh run
docker run -it -p 8080:8080 tomcat

# 指定容器启动后执行 /bin/bash
# 此时指定的/bin/bash会覆盖掉Dockerfile中指定的 CMD ["catalina.sh", "run"]
docker run -it -p 8080:8080 tomcat /bin/bash
```



`CMD`是在`docker run`时运行，而 `RUN`是在`docker build`时运行。



#### ENTRYPOINT



用来指定一个容器启动时要运行的命令。



类似于`CMD`命令，但是`ENTRYPOINT`不会被`docker run`后面的命令覆盖，这些命令参数会被当做参数送给`ENTRYPOINT`指令指定的程序。



`ENTRYPOINT`可以和`CMD`一起用，一般是可变参数才会使用`CMD`，这里的`CMD`等于是在给`ENTRYPOINT`传参。



当指定了`ENTRYPOINT`后，`CMD`的含义就发生了变化，不再是直接运行期命令，而是将`CMD`的内容作为参数传递给`ENTRYPOINT`指令，它们两个组合会变成 `<ENTRYPOINT> "<CMD>"`。



例如：



```dockerfile
FROM nginx

ENTRYPOINT ["nginx", "-c"]  # 定参
CMD ["/etc/nginx/nginx.conf"] # 变参
```



对于此Dockerfile，构建成镜像 `nginx:test`后，如果执行；



- `docker run nginx test`，则容器启动后，会执行 `nginx -c /etc/nginx/nginx.conf`

- `docker run nginx:test /app/nginx/new.conf`，则容器启动后，会执行 `nginx -c /app/nginx/new.conf`





### 构建镜像



> 创建名称为`Dockerfile`的文件，示例：



```dockerfile
FROM ubuntu
MAINTAINER lee<lee@xxx.com>

ENV MYPATH /usr/local
WORKDIR $MYPATH

RUN apt-get update
RUN apt-get install net-tools

EXPOSE 80

CMD echo $MYPATH
CMD echo "install ifconfig cmd into ubuntu success ....."
CMD /bin/bash
```



> 编写完成之后，将其构建成docker镜像。命令：



```shell
# 注意：定义的TAG后面有个空格，空格后面有个点
# docker build -t 新镜像名字:TAG .
docker build -t ubuntu:1.0.1 .
```



### 虚悬镜像



虚悬镜像：仓库名、标签名都是 `<none>`的镜像，称为 dangling images（虚悬镜像）。



在构建或者删除镜像时可能由于一些错误导致出现虚悬镜像。



例如：



```shell
# 构建时候没有镜像名、tag
docker build .
```



列出docker中的虚悬镜像：



```shell
docker image ls -f dangling=true
```



虚悬镜像一般是因为一些错误而出现的，没有存在价值，可以删除：



```shell
# 删除所有的虚悬镜像

docker image prune
```







## 发布微服务项目到Docker容器



1.  将项目jar包上传到服务器 
2.  编写Dockerfile 

```dockerfile
FROM openjdk:8-oracle
MAINTAINER lee

# 在主机 /var/lib/docker目录下创建一个临时文件，并链接到容器的 /tmp
VOLUME /tmp

# 将jar包添加到容器中，并命名为 springboot_docker.jar
ADD docker_boot-1.0-SNAPSHOT.jar /springboot_docker.jar
# 运行jar包
RUN bash -c 'touch /springboot_docker.jar'
ENTRYPOINT ["java", "-jar", "/springboot_docker.jar"]

# SpringBoot项目配置的端口号为6001，需要将6001暴露出去
EXPOSE 6001
```

3. 构建镜像 

```shell
docker build -t springboot_docker:1.0 .
```

4.  启动容器： 

```shell
docker run -d -p 6001:6001 --name springboot springboot_docker:1.0
```





## 搭建**docker**私有仓库

+ Nexus：Nexus的安装请参考该文档：https://www.yuque.com/tmfl/pom/uumrx2
+ Docker Registry：是官方提供的工具，用于构建私有镜像仓库。[参考](https://blog.csdn.net/sl963216757/article/details/118335839)

## Docker-compose



`Docker-Compose` 是 Docker 官方的开源项目，负责实现对Docker容器集群的快速**编排**。



`Docker-Compose`可以管理多个Docker容器组成一个应用。需要定义一个yaml格式的配置文件 `docker-compose.yml`，配置好多个容器之间的调用关系，然后只需要一个命令就能同时启动/关闭这些容器。



Docker建议我们每个容器中只运行一个服务，因为Docker容器本身占用资源极少，所以最好是将每个服务单独的分割开来。但是如果我们需要同时部署多个服务，每个服务单独构建镜像构建容器就会比较麻烦。所以 Docker 官方推出了 `docker-compose` 多服务部署的工具。



Compose允许用户通过一个单独的 `docker-compose.yml` 模板文件来定义一组相关联的应用容器为一个项目（`project`）。可以很容易的用一个配置文件定义一个多容器的应用，然后使用一条指令安装这个应用的所有依赖，完成构建。



核心概念：

- 服务（`service`）：一个个应用容器实例

- 工程（`project`）：由一组关联的应用容器组成的一个完整业务单元，在`docker-compose.yml`中定义



Compose使用的三个步骤：

1. 编写 Dockerfile 定义各个应用容器，并构建出对应的镜像文件

1. 编写 `docker-compose.yml`，定义一个完整的业务单元，安排好整体应用中的各个容器服务

1. 执行 `docker-compose up` 命令，其创建并运行整个应用程序，完成一键部署上线



### 安装Docker-Compose



`Docker-Compose`的版本需要和Docker引擎版本对应，可以参照官网上的[对应关系](https://docs.docker.com/compose/compose-file/compose-file-v3/)。



安装Compose：

```shell
# 例如从github下载 2.5.0版本的docker-compose
# 下载下来的文件放到 /usr/local/bin目录下，命名为 docker-compose
curl -L https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose

# 添加权限
chmod +x /usr/local/bin/docker-compose

# 验证
docker-compose version
```



卸载Compose：直接删除 `usr/local/bin/docker-compose`文件即可



### 常用命令



执行命令时，需要在对应的`docker-compose.yml`文件所在目录下执行。



查看帮助：

```shell
docker-compose -h
```



创建并启动`docker-compose`服务：（类似 `docker run`）

```shell
docker-compose up

# 后台运行
docker-compose up -d
```



停止并删除容器、网络、卷、镜像：（类似 `docker stop` +  `docker rm`）

```shell
docker-compose down
```



进入容器实例内部：

```shell
docker-compose exec <yml里面的服务id> /bin/bash
```



展示当前`docker-compose`编排过的运行的所有容器：

```shell
docker-compose ps
```



展示当前`docker-compose`编排过的容器进程：

```shell
docker-compose top
```



查看容器输出日志：

```shell
docker-compose log <yml里面的服务id>
```



检查配置：

```shell
docker-compose config

# 有问题才输出
docker-compose config -q
```



重启服务：

```shell
docker-compose restart
```



启动服务：（类似 `docker start`）

```shell
docker-compose start
```



停止服务：

```shell
docker-compose stop
```



### compose编排实例



> 示例：

```yaml
# docker-compose文件版本号
version: "3"

# 配置各个容器服务
services:
  microService:
    image: springboot_docker:1.0
    container_name: ms01  # 容器名称，如果不指定，会生成一个服务名加上前缀的容器名
    ports:
      - "6001:6001"
    volumes:
      - /app/microService:/data
    networks:
      - springboot_network
    depends_on:  # 配置该容器服务所依赖的容器服务
      - redis
      - mysql

  redis:
    image: redis:6.0.8
    ports:
      - "6379:6379"
    volumes:
      - /app/redis/redis.conf:/etc/redis/redis.conf
      - /app/redis/data:data
    networks:
      - springboot_network
    command: redis-server /etc/redis/redis.conf

  mysql:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: '123456'
      MYSQL_ALLOW_EMPTY_PASSWORD: 'no'
      MYSQL_DATABASE: 'db_springboot'
      MYSQL_USER: 'springboot'
      MYSQL_PASSWORD: 'springboot'
    ports:
      - "3306:3306"
    volumes:
      - /app/mysql/db:/var/lib/mysql
      - /app/mysql/conf/my.cnf:/etc/my.cnf
      - /app/mysql/init:/docker-entrypoint-initdb.d
    networks:
      - springboot_network
    command: --default-authentication-plugin=mysql_native_password # 解决外部无法访问

networks:
  # 创建 springboot_network 网桥网络
  springboot_network:
```



> 编写完成`docker-compose.yml`后，进行语法检查：

```shell
# 进行语法检查
docker-compose config -q
```



> 如果语法检查没有任何问题，进行创建、启动：

```shell
docker-compose up -d
```





## Docker轻量级可视化工具Portainer

Portainer也是一个Docker镜像，可以直接使用Docker运行。



```shell
# 旧版镜像地址为portainer/portainer，从2022年1月标记为过期
# 新版镜像地址为portainer/portainer-ce

# --restart=always 如果Docker引擎重启了，那么这个容器实例也会在Docker引擎重启后重启，类似开机自启
docker run -d -p 8000:8000 -p 9000:9000 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:2.13.0-alpine
```



启动之后，便可以在浏览器中进行访问：http://xxx.xxx.xxx.xxx:9000



首次进来时，需要创建 admin 的用户名（默认`admin`）、密码（必须满足校验规则，例如`portainer.io123`）。



选择 `local`管理本地docker，即可看到本地Docker的详细信息，包括其中的镜像（images）、容器（containers）、网络（networks）、容器卷（volumes）、compose编排（stacks）等等。
