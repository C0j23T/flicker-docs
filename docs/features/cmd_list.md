# 详细命令列表及使用方法
注：所有示例中，`Q:`为调用示例，`A:`为回答示例
## flicker.py
::: danger 注意
flicker.py暂不可用
:::
请跳转到[flicker.rs](/features/cmd_list.md#flicker-rs)

### .
我与你同在  
示例：
``` text
Q: .
A: 我与你同在
   --------------------
   随机码：xxx
```

### 早 / 晚
tomato式早安 / 晚安，可获得flick作为奖励
::: tip 提示
该命令无需前缀
:::
示例：
``` text
Q: 早
A: 早安！天涯而非咫尺的梦想！
   今天你划掉了14个flick(
   --------------------
   随机码：xxx
```

### flick
格式为`.flick <数字>`，划掉指定数量的flick，或使用`-1`  划掉随机数量的flick  
示例：  
``` text
Q: .flick -1
A: 恭喜你，你又划掉了14个flick
   --------------------
   随机码：xxx
```

### tarot
每日可抽取**一次**塔罗牌，三张牌从上到下分别代表`过去` `现在`和`未来`  
示例：
``` text
Q: .tarot
A: *一张图片*
   --------------------
   随机码：xxx
```
图片示例：  
![tarot](/images/tarot.jpg)

### luck
每日可查询**一次**运势，它被表示为一个-10到100的数字，数字越高，运气越好，反之运气越差  
示例：
``` text
Q: .luck
A: 你今日的运势为100点
   哇，你今天运气很好呢，吸吸欧气（
   --------------------
   随机码：xxx
```

### sese
涩涩功能  
示例：
``` text
Q: .sese
A: *涩图*
   --------------------
   随机码：xxx
```

### stat
查询flicker.py当前服务器状态  
示例：
``` text
Q: .stat
A: CPU:
   Total usage: 13.5%
   Program usage: 0.0%
   Memory:
   Total: 3072.00MB
   Total used: 1024.00MB (33.3%)
   Program used: 128.00MB (4.15%)
   Statistics:
   CMD sent: 114514
   Uptime: 191 days 9 hours
   --------------------
   随机码：xxx
```
### 漂流瓶相关功能
有如下命令：  
| 命令 | 说明 |
|:----|:----|
| throw | 投掷一个漂流瓶 |
| reply | 回复一个漂流瓶 |
| pick | 打捞一个漂流瓶 |
#### throw
掷出一个漂流瓶。  
发送`.throw`后flicker会询问漂流瓶的内容，将内容在一定时间内发送后会收到相应提示  
示例：
``` text
Q: .throw
A: 欢迎来到万事观，请问要向其中添加什么事件？
   --------------------
   随机码：xxx
Q: *一些内容*
A: 添加成功！希望会有很多人看到吧。
   --------------------
   随机码：xxx
```

#### reply
回复一个漂流瓶  
示例：  
``` text
Q: .reply 1 🤤
A: 添加成功
   --------------------
   随机码：xxx
```

#### pick
尝试打捞一个漂流瓶  
示例：  
``` text
Q: .pick
A: 事件ID:1
   时间: 2023-11-14 15:14:19
   上传人: 祈雨鸠（确信）
   内容: *涩图*
   回复: 🤤
   --------------------
   随机码：xxx
```

### 点歌
从`网易云`搜索歌曲并生成音乐分享卡片  
使用`.wyy <歌名>`搜索歌曲，flicker会生成一张带有搜索结果的图片，发送歌名前的数字即可  
示例：  
``` text
Q: .wyy nhelv
A: *一张图片，假设Silentroom的Nhelv在第一位*
   --------------------
   随机码：xxx
Q: 1
A: *音乐分享卡片，点击封面即可播放*
```

### Arcaea 查分器
Arcaea查分器相关  
有如下子命令：  
| 命令 | 说明 |
|:----|:----|
| a | 查询最近一次游玩成绩 |
| a bind <好友代码> | 绑定arc账号 |
| a add <成绩> | 手动添加arc成绩 |
| a b30 | 根据填入的成绩查询B30 |

#### a
查询最近一次的分数  
示例：
``` text
Q: .a
A: *一张图片*
   --------------------
   随机码：xxx
```
图片示例：  
![recent_old](/images/a_recent.jpg)

#### a bind
绑定一个Arcaea账号  
示例：
``` text
Q: .a bind 114514191
A: 绑定成功。
   --------------------
   随机码：xxx
```

#### a add
手动添加你的Arcaea游玩成绩  
记录格式为`曲目名称,难度,分数`，或输入`曲目名称1,难度1,分数1 / 曲目名称2,难度2,分数2 / 曲目名称3...`来批量存储
::: tip 提示
难度需要为数字，例如past难度为0，present为1，以此类推，而且此处的逗号必须使用英文逗号（即半角逗号`,`）
:::
::: tip 提示
如果填写的记录的rating小于数据库中已存在的相同曲目及难度的rating，则本次操作不更新记录
:::
示例：
``` text
Q: .a add 测试如果歪,3,10002221
A: 添加成功
   --------------------
   随机码：xxx
```

#### a b30
查询Arcaea B30
:::tip 提示
在`.a add`手动填写记录后方可查分
:::
示例：
``` text
Q: .a b30
A: *一张图片*
   --------------------
   随机码：xxx
```
图片示例：  
![b30_old](/images/b30_old.jpg)

#### a info
查询指定曲目的基础信息  
示例：
``` text
Q: .a info Logos
A: *一张图片*
   --------------------
   随机码：xxx
```
图片示例：  
![a_info](/images/a_info.jpg)

### Malody 查分器
Malody查分器相关  
有如下子命令：  
| 命令 | 说明 |
|:----|:----|
| ma | 查询最近一次最佳成绩 |
| ma bind <用户名> | 绑定malody账号(基于搜索) |

#### ma
查询最近一次最佳分数  
示例：
``` text
Q: .ma
A: *一张图片*
   --------------------
   随机码：xxx
```
图片示例：  
![ma_old](/images/ma_old.jpg)

#### ma bind
绑定一个Malody账号（使用用户名）
::: tip 提示
查找账号使用了Malody官方网页的搜索功能，匹配搜索结果的第一条，所以请确保填写的用户名能够被正确搜索到
:::
示例：
``` text
Q: ma bind tDltL
A: 成功绑定
   --------------------
   随机码：xxx
```

### Phigros 查分器
Phigors查分器相关  
有如下子命令：  
| 命令 | 说明 |
|:----|:----|
| phi bind SessionToken | 使用SessionToken绑定Phigros账号（仅私聊） |
| phi b19 | 查询Phigros B19 |
::: danger 警告
SessionToken具有使用账号的权限，你应该妥善保管你的SessionToken，因此FlickerBot只允许通过私聊绑定Phigros账号，不要在群里绑定，并注意账号安全
:::

#### phi bind
绑定Phigros账号  
示例：
``` text
Q: .phi bind <SessionToken>
A: 绑定成功
   --------------------
   随机码：xxx
```
::: tip 提示
该命令仅支持私聊
:::

#### phi b19
查询Phigros b19  
示例：
``` text
Q: phi b19
A: *一张图片*
   --------------------
   随机码：xxx
```
图片示例：  
![phi_old](/images/phi_old.jpg)

### MaiMai 查分器
查询MaMai B50  
使用了水鱼的数据库，只要在水鱼的查分器绑定了QQ号就可以使用
示例：
``` text
Q: .mai b50
A: *一张图片*
   --------------------
   随机码：xxx
```
图片示例：  
![mai_old](/images/mai_old.jpg)

## flicker.rs
### flicker
``` text
Q: _flicker
A: 我与你同在。
```

### 午好
触发`中午好`提示
::: tip 提示
该命令无需前缀，且根据时间不同会产生不同对话
:::
示例：
``` text
Q: 午
A: 中午好，毕竟是午夜嘛，吃宵夜了吗？（拿出）
   --------------------
   随机码：xxx
```

### poke
戳一戳某个人，为没有戳一戳的QQ客户端设计  
只能通过艾特选择要戳的人  
可使用`_poke @r`随机戳一戳  
示例：
``` text
Q: _poke @r
A: *戳了祈瑜久*
```
### stat
查询flicker当前服务器状态  
示例：  
``` text
Q: _stat
A: Flicker.rs哒！！！
   Ver. 0.1.6 x86_64
   OS: Linux 2023.2 Kali GNU/Linux
   RAM:
   total: 2971.27MB
   used: 816.28MB (27.5%)
   proc: 200.55MB (6.7%)
   Uptime: 94703
   Reconnect: 0
   --------------------
   随机码：xxx
```

### Phigros 查分器
与flicker.py一致，请参考[Phigros 查分器](/features/cmd_list.md#phigros-查分器)  
图片示例：  
![phib19](/images/phi.jpg)

### Malody 查分器
与flicker.py一致，请参考[Malody 查分器](/features/cmd_list.md#malody-查分器)  
相比flicker.py，本命令会查询最近6次最佳成绩和3次活动  
图片示例：  
![ma](/images/ma.jpg)

### MaiMai 查分器
查询MaiMai B50  
与flicker.py大致一致，请参考[MaiMai 查分器](/features/cmd_list.md#maimai-查分器)  
命令格式为`_mai`  
可以通过追加艾特其他人或水鱼查分器的用户名查看别人的MaiMai B50  
示例：
``` text
Q: _mai ruaaziff
A: 查询开始了哦！flicker绝赞手绘中...
   --------------------
   随机码：xxx
A: *一张图片*
   --------------------
   随机码：xxx
```
图片示例：  
![maimaib50](/images/maimai.jpg)

### Arcaea 查分器
新的Arcaea查分器，无需手动填入成绩  
有如下子命令：  
| 命令 | 说明 |
|:----|:----|
| a | 查询最近一次游玩成绩 |
| a bind <好友代码> | 绑定arc账号 |
| a b30 | 查询B30 |

使用说明：  
1. 不需要再手动添加记录了
2. 当前无查分任务时，会创建新的查分任务，此时会有五分钟的等待时间，当当前任务满10个人或者5分钟倒计时完成时，将会开始查分，持续5分钟左右，期间无法创建新的查分任务。这一次执行只会告知一次查分任务的相关信息，不会生成查分图
3. 查分任务创建后，重复发送a b30可以查看进度，比如5分钟倒计时的进度和查询的进度
4. 每次查分之后都会有6小时的冷却时间，期间使用该命令将会只返回查分图
5. 目前b30还处于测试阶段，如果遇到问题请及时告知有关人员

命令示例参考[Arcaea 查分器](/features/cmd_list.md#arcaea-查分器)  

图片示例：  
Recent:    
![recent](/images/a_recent_new.jpg)  
B30:  
![b30](/images/b30_new.jpg)

### BiliPush
哔哩哔哩动态推送功能，可通过uid订阅up主，其最新动态将会以图片形式推送到QQ群  
有如下子命令：  
| 命令 | 说明 |
|:----|:----|
| bili sub <up主uid> | 将up主添加到本群推送列表中 |
| bili unsub <up主uid> | 将up主从本群推送列表移除 |
| bili list | 获得本群关注的up主列表（uid） |
| bili getdid <动态id> | 获取动态内容并生成图片 |

示例：  
``` text
Q: _bili sub 1872890
A: 关注成功
   --------------------
   随机码：xxx
```
推送图片示例：  
![bili_push](/images/bilipush.jpg)