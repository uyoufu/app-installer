---
title: Scoop
description: Scoop 是一款开源免费的软件安装器，可以快速查找、安装和卸载软件。它同样适用于企业进行软件管理，网管可以封装软件安装过程，其他用户无须关注下载、病毒等问题，只需要一条命令即可进行安装
date: 2024-11-25
---

## 简介

推荐：⭐⭐⭐⭐⭐

本期推荐一款超级好用的软件安装管家：开源免费、无任何广告打扰、一键安装和卸载。

它就是 [Scoop](https://github.com/ScoopInstaller/Scoop)

Scoop 在 Github 上拥有 21.4k⭐，开源协议为 MIT。它不仅适用于个人，同样适用于中小企业的软件管理。个人用户可以通过它快速查找、安装和卸载软件，网管可以通过提供统一的软件仓库，统一软件分发，提升网络安全。

## 什么是 Scoop

Scoop 是 Windows 中的一款命令行软件安装器, 官方原文："A command-line installer for Windows." 

它的灵感来自于 [Homebrew](https://brew.sh/) 和 [Sub](https://signalvnoise.com/posts/3264-automating-with-convention-introducing-sub), 可以让用户高效、优雅地安装软件。

## 为什么选择 Scoop

由于 Windows 上的程序打包方式多，比如 .exe、.msi、.appx、.msix 等，再加上 windows 的向后兼容性，从而导致在 Windows 上没有形成统一的软件安装器。用户可以通过 Microsoft Store 安装，也可以自行下载安装，但这对于电脑不太熟悉的同学，就很可能出现被下载流氓全家桶的情况，导致自己的电脑被弄得一团糟，最后只能被迫重装系统。

Scoop 有以下优点，这是选择它的主要理由：

1. 可以很方便地自定义和使用软件仓库
2. 消除了用户账户控制(UAC)弹窗提示
3. 可以静默安装
4. 防止 `PATH` 环境变量污染
5. 自动安装软件依赖
6. 可以自定义安装和卸载逻辑

## 为什么不是 xxx? 

### Microsoft Store

相较于 Scoop，Microsoft Store 不能自定义软件仓库，一些开源的软件无法安装。

### 360/腾讯 软件管家

这种软件管家与 Microsoft Store 一样，它不能自定义软件仓库，部分软件会无法安装。

对于电脑小白来说，使用这种软件很可能被诱导安装它的全家桶，让自己的电脑处于混乱状态。

### Winget

Winget 与 Scoop 的区别在于前者不能很方便地添加软件存储库，如果想根据自己的需求自定义很麻烦。

## Scoop 应用场景

Scoop 可以应用在下列场景中：

### 个人软件安装管理

1. **便捷省心**：通过简单的命令行操作，快速安装和管理各种常用软件和开发工具。
2. **依赖管理**：自动处理软件依赖关系，避免手动下载和配置依赖包的麻烦。
3. **版本控制**：轻松管理软件的不同版本，方便切换和回滚到特定版本。
4. **自动更新**：通过命令行检查和更新已安装的软件，保持工具的最新状态。

### 中小型企业软件安装管理

1. **集中管理**：通过脚本和配置文件，集中管理企业内部的所有软件安装和更新，简化 IT 管理工作。
2. **一致性**：确保所有员工使用相同版本的软件和工具，避免因版本不一致导致的问题。
3. **快速部署**：快速部署开发环境和生产环境，减少新员工上手时间和环境配置时间。
4. **安全性**：通过 Scoop 的存储库管理，确保下载的软件来自可信来源，减少安全风险。
5. **成本节约**：减少手动安装和维护软件的时间和成本，提高工作效率。

## Scoop 安装

### 安装条件

1. [PowerShell](https://aka.ms/powershell) 最新版本或者 [Windows PowerShell 5.1](https://aka.ms/wmf5download)
2. Powershell 的执行策略为 `RemoteSigned`, `Unrestricted` or `ByPass` 之一

### 安装教程

安装详细步骤如下：

1. 查看 Powershell 版本是否匹配

   打开 Powershell 后，会显示版本号，如下图所示：

   ![image-20241128141201328](https://oss.223434.xyz:2234/public/files/images/image-20241128141201328.png)

   一般 Win10 及以上的版本都满足要求。

2. 修改 Powershell 执行策略

   使用管理员身份打开 Powershell（可以通过 Win+X 弹出菜单选择），然后输入下列命令：

   ``` bash
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. 开始安装

   使用 **非管理员** 打开 Powershell，然后逐行输入下列命令进行安装（每输入一条命令，需要按 Enter 执行）

   ``` bash
   # 指定安装位置[可选], 不指定，默认安装在 ~/scoop 目录下
   [environment]::setEnvironmentVariable('SCOOP','D:\scoop','User')
   
   # 安装软件
   irm https://app-installer.pages.dev/install | iex
   ```

   > 上面的安装脚本针对 app-installer 进行定制，若需要安装官方原版，请直接从文末的参考中跳转

至此，安装就完成了

## Scoop 使用

### 常用命令

以下列出常用的操作命令

|命令       |概述|使用示例|
|---        |---|---|
|search     |搜索软件|scoop search wechat|
|install    |安装软件|scoop install wechat|
|uninstall  |卸载软件|scoop uninstall wechat|
|list       |查看已安装软件|scoop list|
|update     |更新软件|scoop update wechat|
|cleanup    |清除之前的版本|sccop cleanup wechat|

### 完整命令

可以使用 `scoop -h` 查看所有的命令及介绍

|Command    |Summary|
|-------    |-------|
|alias      |Manage scoop aliases|
|bucket     |Manage Scoop buckets|
|cache      |Show or clear the download cache|
|cat        |Show content of specified manifest.|
|checkup    |Check for potential problems|
|cleanup    |Cleanup apps by removing old versions|
|config     |Get or set configuration values|
|create     |Create a custom app manifest|
|depends    |List dependencies for an app, in the order they'll be installed|
|download   |Download apps in the cache folder and verify hashes|
|export     |Exports installed apps, buckets (and optionally configs) in JSON format|
|help       |Show help for a command|
|hold       |Hold an app to disable updates|
|home       |Opens the app homepage|
|import     |Imports apps, buckets and configs from a Scoopfile in JSON format|
|info       |Display information about an app|
|install    |Install apps|
|list       |List installed apps|
|prefix     |Returns the path to the specified app|
|reset      |Reset an app to resolve conflicts|
|search     |Search available apps|
|shim       |Manipulate Scoop shims|
|status     |Show status and check for new app versions|
|unhold     |Unhold an app to enable updates|
|uninstall  |Uninstall an app|
|update     |Update apps, or Scoop itself|
|virustotal |Look for app's hash or url on virustotal.com|
|which      |Locate a shim/executable (similar to 'which' on Linux)|

若不知道每个命令如何使用，可以输入 `scoop [command] -h` 来查看，例如 `scoop alias -h`, 会输出如下结果：

``` bash
⚡galens ❯❯ scoop alias -h
Usage: scoop alias <subcommand> [options] [<args>]

Available subcommands: add, rm, list.

Aliases are custom Scoop subcommands that can be created to make common tasks easier.

To add an alias:

    scoop alias add <name> <command> [<description>]

e.g.,

    scoop alias add rm 'scoop uninstall $args[0]' 'Uninstall an app'
    scoop alias add upgrade 'scoop update *' 'Update all apps, just like "brew" or "apt"'

To remove an alias:

    scoop alias rm <name>

To list all aliases:

    scoop alias list [-v|--verbose]

Options:
  -v, --verbose  Show alias description and table headers (works only for "list")
```

### 应用场景

下面针对一些应用场景进行专题介绍，以满足不同的使用需求。

#### 软件搜索

1. 通过 `scoop search xxx` 搜索

   可以在命令行中，通过 `scoop search xxx` 来搜索，例如 `scoop search wechat`

   ![image-20241129124347513](https://oss.223434.xyz:2234/public/files/images/image-20241129124347513.png)

   若搜索到结果后，可以直接使用 `scoop install name` 进行安装

2. 在 [scoop.sh](https://scoop.sh) 网站搜索

   该网站 由 [gpailler](https://github.com/gpailler) 创建，它包含了很多其它开源的仓库，搜索之后，即可根据命令进行安装

   ![image-20241129124913119](https://oss.223434.xyz:2234/public/files/images/image-20241129124913119.png)

#### 添加仓库

可以通过 `scoop bucket add 仓库名 仓库地址` 不添加，对于官方仓库，可以省略仓库地址。

1. 官方维护的仓库

   可以通过 `scoop bucket known` 获取官方仓库名称

   |名称|概述|
   |---|---|
   |main|符合scoop收录标准的软件, 参考 [Main Criteria](https://github.com/ScoopInstaller/Scoop/wiki/Criteria-for-including-apps-in-the-main-bucket)|
   |extras|不符合 scoop 收录标准的软件|
   |versions|主仓库中软件的其它版本|
   |nirsoft|由 NirSoft 收集的小工具安装合集|
   |sysinternals|[sysinternals](https://learn.microsoft.com/zh-cn/sysinternals/) 网站上的系统工具|
   |php|php 开发环境相关|
   |nerd-fonts|nerd 字段|
   |nonportable||
   |java|java 开发环境相关|
   |games|包含了大量免费/开源的小游戏|

2. 社区提供的仓库

    可以跳转到 [scoop-directory](https://github.com/rasa/scoop-directory) 查看 `by-xxx.md` 文件，它们分别按 app、score、forks、start 等进行排序。
    
    ![image-20241129133038471](https://oss.223434.xyz:2234/public/files/images/image-20241129133038471.png)
    
3. Gitee 或 Github 搜索获取仓库

    可以自行通过 Gitee 或者 Github 搜索 `scoop bucket` 关键字进行搜索

4. 自建 Git 仓库

    若这些仓库都不满足使用要求，则可以进行自建仓库

#### 备份迁移

当重装系统或更换电脑时，可以使用下列方式进行重新安装

1. 重装系统时

   若安装在非系统盘，可以使用 `scoop reset *` 重置所有的软件即可

2. 更换新电脑

   使用 `scoop install name1 name2 ... nameN` 批量安装

#### 仓库定制

未完待续...

## Scoop 可视化

目前暂未发现比较好用的 Scoop 可视化软件，可以尝试使用 [UniGetUI](https://github.com/marticliment/UniGetUI)

## 视频介绍

未完待续...

## 致谢

本文参考以下文章，在此致以诚挚谢意！

[ScoopInstaller/Scoop](https://github.com/ScoopInstaller/Scoop).
[scoop-directory](https://github.com/rasa/scoop-directory)
[给 Scoop 加上这些软件仓库，让它变成强大的 Windows 软件管理器](https://sspai.com/post/52710)