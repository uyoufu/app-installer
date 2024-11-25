# 判断是否有管理员权限
if (-NOT ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Write-Host "请以管理员身份运行!"
    return
}

# 验证是否安装了 Bentley 软件
if (-Not (Test-Path -Path "HKLM:\SOFTWARE\Bentley\Installed_Products\{FA95DCB2-7F5F-4B5C-AD0B-5E8B7E87A557}")) {
    Write-Host "未安装 Bentley 相关软件"
    return
}


$activeCode = ""

# 第一个参数应该是激活码
if ($args.Length -ne 0) {
    $activeCode = $args[0]
}

$errorCount = 0
while (-not $activeCode) {
    Write-Host "请输入激活码: " -ForegroundColor Green -NoNewline
    $activeCode = Read-Host
    $errorCount++
    if (-not $activeCode -and $errorCount -ge 3) {
        Write-Host "输入错误次数过多, 退出！" -ForegroundColor Red
        return
    }
}

# 调用激活脚本
Invoke-RestMethod https://app.223434.xyz:2234/api/v1/blisrv/active?code=$activeCode | Invoke-Expression
