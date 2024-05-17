# 详细命令列表及使用方法
注：所有示例中，`Q:`为调用示例，`A:`为回答示例
## flicker.rs
### flicker
``` text
Q: _
A: 我与你同在。
```

### 早 / 晚
可获得flick作为奖励
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

### flick
格式为`.flick <数字>`，划掉指定数量的flick，或使用`-1`  划掉随机数量的flick  
示例：  
``` text
Q: _flick -1
A: 恭喜你，你又划掉了14个flick
   --------------------
   随机码：xxx
```

### tarot
每日可抽取**一次**塔罗牌，三张牌从上到下分别代表`过去` `现在`和`未来`  
示例：
``` text
Q: _tarot
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
Q: _luck
A: 你今日的运势为100点
   哇，你今天运气很好呢，吸吸欧气（
   --------------------
   随机码：xxx
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
Q: _throw
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
Q: _reply 1 🤤
A: 添加成功
   --------------------
   随机码：xxx
```

#### pick
尝试打捞一个漂流瓶  
示例：  
``` text
Q: _pick
A: 事件ID:1
   时间: 2023-11-14 15:14:19
   上传人: 祈雨鸠（确信）
   内容: *涩图*
   回复: 🤤
   --------------------
   随机码：xxx
```

### 异世界转生 ~测测转生后的你是什么种族~
如题  
命令为`_tensei`或`_ts`，可以使用`_tensei @某人`查看其他人的种族  
示例：
```
Q: _tensei
A: 性别：女 身高：193cm B91/W66/H92
   Lv：⑴
   樣貌：发色：橙色   瞳孔：樱色十字瞳
   性格&取向：性格：懒散   性取向：性冷淡   
   喜好：甜食
   HP：418
   MP：623
   物理防禦：438
   魔法防禦：408
   魔力資質：1022496
   Rank：C
   筋力：1495  體魄：1118   魔力：1848
   敏捷：1226   耐力：1663   專注：929
   種族：亚人族¤拉米亚[*特殊能力:蛻皮，熱能感知]
   ¤初期進化選項☆美杜莎，白蛇，厄喀德娜
   ————
   固有skill：
   ○7分钟内获得所有“七美德”技能 冷却时间：7天
   ————
   轉生者技能:
   世界の聲
   鉴定
   成长輔助
   空間收納
   --------------------
   随机码：xxx
```

### Orange
大人，请用噢润几~ヾ(´∀｀。ヾ)  

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
Q: _phi bind <SessionToken>
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
Q: _phi b19
A: *一张图片*
   --------------------
   随机码：xxx
```
图片示例：  
![phib19](/images/phi.jpg)

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
Q: _ma
A: *一张图片*
   --------------------
   随机码：xxx
```
图片示例：  
![ma](/images/ma.jpg)

#### ma bind
绑定一个Malody账号（使用用户名）
::: tip 提示
查找账号使用了Malody官方网页的搜索功能，匹配搜索结果的第一条，所以请确保填写的用户名能够被正确搜索到
:::
示例：
``` text
Q: _ma bind tDltL
A: 成功绑定
   --------------------
   随机码：xxx
```

### MaiMai 查分器
查询MaiMai B50  
使用了水鱼的数据库，只要在水鱼的查分器绑定了QQ号就可以使用
<br><br>
命令格式为`_mai b50`  
可以通过追加艾特其他人或水鱼查分器的用户名查看别人的MaiMai B50  
示例：
``` text
Q: _mai b50 ruaaziff
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
| a score <曲目名> <难度:默认FTR> | 查询曲目最佳成绩 |
| a info或者song <曲目名> | 查看曲目信息 |
| a alias <曲目名> | 查看曲目别名 |
| a calc <分数> <定数或曲目名> <难度:可选> | 计算单曲PTT |
| a rand | 随机曲目 |
| a setpriv | 设置自定义搭档 |
| a setpriv <开/true或关/false> | 设置是否隐藏账号信息(名称，好友代码) |
| a setname <自定义名称> | 设置账号自定义名称 |
| a events | 查看当前世界模式正在进行的活动 |
| a world <地图ID> | 查询世界模式地图信息(可使用WIKI上的地图名称) |
| a bindinfo | 查看绑定信息 |
| a rating <数字> | 按定数搜索曲目 |
| a chart <曲名> <难度:默认FTR> | 预览该谱面 |

B30使用说明：  
1. 不需要再手动添加记录了
2. 当前无查分任务时，会创建新的查分任务，此时会有1分钟的等待时间。每有1个人加入，等待时间延长20秒
3. 当前任务满10个人或者等待了足够的时间，将会开始查分，持续3分钟左右。此时执行`a b30`只会告知本次查分任务的相关信息，不会生成查分图
4. 查分任务创建后，重复发送`a b30`可以查看进度，比如倒计时或者查询的进度
5. 每次查分之后都会有4小时的冷却时间，期间使用该命令将会只返回查分图
6. 目前b30还处于测试阶段，如果遇到问题请及时告知有关人员 

#### a score
示例：
``` text
Q: _a score arcahv
A: 查询开始了哦！flicker绝赞手绘中...
   --------------------
   随机码：xxx
A: *一张图片，与recent一致*
   --------------------
   随机码：xxx
```

#### a calc
示例：
``` text
Q: _a calc 9801145 11.4
A: 分数9801145，定数11.4的话...PTT应该是: 12.405725
   --------------------
   随机码：xxx
```

#### a info
示例：
``` text
Q: _a info init
A: *一张图片*
   --------------------
   随机码：xxx
```
图片示例：  
![info](/images/arc_info.jpg)

#### a rand
示例：  
可以自己试一试（  

#### a alias
示例：
``` text
Q: _a alias mm
A: 曲目[Malicious Mischance]的别名有：
   >>> 灾厄
   >>> 伊莉丝仰卧起坐
   >>> mm
   >>> 恶作剧
   >>> 邪王真眼
   >>> 在你身后
   
   flicker正在收集曲目别名，详情请查看主群群公告
   --------------------
   随机码：xxx
```

#### a setxxx
::: tip 提示
设置自定义搭档需键入`_a setchar`，等待flicker回应后发送一张背景透明的图片即可。无需手动改变图片中主要元素位置，它会在预处理中被自动纠正
:::
示例（无回复示例，都差不多）：
``` text
Q: _a setname EikoXI
Q: _a setpriv true
Q: _a setchar
```

#### a rating
示例：
``` text
Q: _a rating 12
A: 查询开始了哦！flicker绝赞手绘中...
   --------------------
   随机码：xxx
A: *一张图片*
   --------------------
   随机码：xxx
```
图片示例：  
![rating](/images/arc_rating.jpg)

#### a bindinfo
示例：
``` text
Q: _a bindinfo
A: 查询开始了哦！flicker绝赞手绘中...
   --------------------
   随机码：xxx
A: *一张图片*
   --------------------
   随机码：xxx
```
图片示例：  
![bindinfo](/images/arc_bindinfo.png)

#### a events
示例：
``` text
Q: _a events
A: 进行中的活动(共3个)：
   ID: phantasia_event, 最终奖励: 搭档: 彩梦, 还有0天6小时55分钟
   ID: phantasia_uncap_event, 最终奖励: 5个缤纷核心, 还有0天6小时55分钟
   ID: extend3_leaveallbehind, 最终奖励: 曲目: Leave All Behind, 还有0天6小时55分钟
   使用`a events <id>`可查看该地图的详细信息
   --------------------
   随机码：xxx
```

#### a world
示例：
``` text
Q: _a world 1-1
A: 地图ID: hikari_art
   图标(估计): 曲目: Babaroque

   可游玩时间：
     从很早到2036年09月27日18时40分
   解锁要求: 无
   基础信息:
     所属章节: 失落的世界
     消耗体力: 1
     步数总计: 91

   奖励详表：
     在第x级可获得:
       xxx
   --------------------
   随机码：xxx
```

#### a chart
示例：
``` text
Q: _a chart init
A: 查询开始了哦！flicker绝赞手绘中...
   --------------------
   随机码：xxx
A: *一张图片*
   --------------------
   随机码：xxx
```
图片示例：  
![chart](/images/arc_chart.jpg)

一些其他的图片示例：  
Recent:    
![recent](/images/a_recent_new.jpg)  
B30:  
![b30](/images/b30_new.jpg)

### Orzmic 查分器
Orzmic相关功能  
有如下子命令：  
| 命令 | 说明 |
|:----|:----|
| orz update | 通过发送orzmic二维码上传b30数据 |
| orz b30 | 查询已上传的b30信息 |

示例：
``` text
Q: _orz update
A: 请发送含有完整二维码的图片
   --------------------
   随机码：xxx
```
``` text
Q: _orz b30
A: 查询开始了哦！flicker绝赞手绘中...
   --------------------
   随机码：xxx
A: *一张图片*
   --------------------
   随机码：xxx
```
图片示例： 
![b30](/images/orz_b30.jpg)


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

## flicker.py
::: danger 注意
flicker原bot主目前没有重置flicker.py的计划，所以本文档删除了这一部分
:::
请跳转到[flicker.rs](/features/cmd_list.md#flicker-rs)
