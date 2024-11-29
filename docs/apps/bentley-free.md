---
title: 安装教程
date: 2024-11-26
---

本文介绍如何安装 Bentley-Free 达到免费使用 Bentley 系列软件的目的。

推荐：⭐⭐⭐⭐⭐

## 操作文档

1. 使用超级管理员打开 powershell 终端

2. 在里面输入以下内容，并按 Enter

   ``` bash
   irm https://app-installer.pages.dev/active-bentley | iex
   ```

   若出现 `because the execution of scripts is disabled on this system` 类似错误，则需要启用远程脚本执行权限，在终端中输入下列命令开启：

   ``` bash
   Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
   ```

3. 根据提示输入激活码，详见下图

   ![image-20241127141302147](https://oss.223434.xyz:2234/public/files/images/image-20241127141302147.png)

## 视频介绍

若使用文档有困难，可以参考下面的操作视频

<VidStack
  src="https://oss.223434.xyz:2234/public/files/video/bentley-free.mp4"
  poster="https://oss.223434.xyz:2234/public/files/images/bentley-free.png"
/>

## 其它说明

1. 激活码可在闲鱼查找

2. 经测试，每个激活码可激活两台电脑