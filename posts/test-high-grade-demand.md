[TOC]

本文探索分析下我所理解的测试怎么驱动需求的高质量化，也包括SANGFOR公司内的当前的一些标准。主要是软件方向哈。

### 背景和目的

1. 从测试管理的角度出发，高质量的需求就是意味着**研发过程的高质高效、风险可控**，更重要的是大大提高可度量性。个人认为项目的准时交付是极度依赖精准的评估工作量的；另外高质量需求往往意味着你可以得到一个高质量产品。

2. 同时不可否认的是，高质量的需求和清晰的需求方向大大减轻测试人员的业务知识库压力。

### 高质量的标准

#### 用户需求精准

1. 有明确的价值属性的，在全局业务中有其明确的定位和演进方向，与整体业务目标至少不矛盾。
2. 内容是正确无二义的、完整和健壮的、与其他需求独立不重复但风格是一致的
3. 有定义完成标准的，技术可实现的，测试可验证的。
4. 颗粒度是可度量估算的、合适的、有优先级的、可追踪的﻿

#### 非功能需求精准



#### 测试范围及目的精准



### 工作中常见阻碍

1. 可测试性需求识别困难

2. 评审通过的需求还是一句话、缺少用户故事、验收标准、演进方向等

3. 非业务需求缺失

4. 需求细化程度不足

5. 产品价值和目标未清晰传递



### 方式方法

#### 用户需求精准

1.  该需求是给什么样的用户解决什么样的问题？用户目的是什么，过程中的痛点是什么？

2. 为什么说这个方案可以解决用户的问题？用户是怎么学会使用这个方案的？他们是怎么理解这个东西的？

3. 这个方案让用户牺牲了什么？如果你是用户，遇到这样的问题，你希望可以怎么解决？

4. UI层面应用到技术是否成熟？交互是否繁杂冗余？交互设计的可预见性是否符合用户思维？

5. 这个方案的数据流是怎么样的？从产品角度看，哪些是当前系统缺失的？哪些是当前系统已有的？

6. 需求实现后，当前已有服务中哪些链路被影响了？

7. 方案定义的可用性、兼容性、稳定性、性能、安全、可运维性等是怎么样的？

8. 该方案设计的每一个逻辑分支是否都可以由配置面控制？在兼容当前的架构下配置面落地选择的形式是什么？配置面的变动是否简易易行？

9. 实现需求的第一难点是什么？第二难点是什么？第三难点是什么？

10. 实现方案最优的数据结构是什么？以什么的形式储存？是否具备可观察性？怎么便捷查询观察？怎么便捷修改？是否可提供一键构建测试数据？

11. 配置面各个API的核心参数是什么？关联参数是什么？是不是可以做到极简API？配置成功或失败的标志是否明确清晰？

12. 如果配置面发生变动，怎么提供一键检查业务生效性？一键检查数据链的变动正确性？

13. 时间或异步任务等设计怎么提供精准控制？异步任务怎么保证正确结束

14. 依赖前置异步任务的服务，怎么可以保证异步任务完成后开始服务。

15. 驱动模块是怎么样的？怎么设计可以一键实现驱动数据？

16. 数据流中怎么做MOCK？

17. 错误的定位设计和错误日志暴露的内容？存储形式？可观察性？观察代价？异常模拟和异常复现的难易程度？

    

#### 非功能需求精准



#### 测试范围及目的精准





### 评价及复盘改进

#### 需求评价

1. 【理解不对】 需求无价值、需求错误、目标不明有偏差
2. 【表达不准】 描述不准、覆盖不全、预期不明、全局不一、有重复、太耦合
3. 【体验不好】 不好用、难理解、没诱惑、不友好、无性能、无安全
4. 【实现不了】 开发实现的可行性差、测试可行性差、人力不足
5. 【管理不好】 需求管理乱、需求拆分不合理、需求无优先级