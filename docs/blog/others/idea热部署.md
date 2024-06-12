> 我的idea版本是2023，其他版本可能略有不同

1. 需要在项目中添加热部署依赖，pom.xml中添加如下

```xml
<!--依赖中添加-->   
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <scope>runtime</scope>
    <optional>true</optional>
</dependency>

<!--build模块中添加-->
<build>
	<plugins>
		<plugin>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-maven-plugin</artifactId>
			<version>1.5.9.RELEASE</version>
			<configuration>
                <fork>true</fork><!--重点是这里-->
                <addResources>true</addResources>
            </configuration>
		</plugin>
	</plugins>
</build>
```





2. 需要修改项目配置文件，允许项目进行热部署，示例中是yml文件
   spring:
     devtools:
       restart:
         enabled: true

3. 修改idea配置
   `file->settings->Advanced Settings     `          

   ![img](https://raw.githubusercontent.com/dynamicbeam/picbed/master/a77fa683392c4aa29ccdc7ca0ca34138.png)

4. `file->settings->Builds,Execution,Deployment->Compiler   `

   ​           ![img](https://raw.githubusercontent.com/dynamicbeam/picbed/master/d3ca205ec3e0413c8a8b5df00b5d4d71.png)

   5. 重启idea后即可实现热部署 