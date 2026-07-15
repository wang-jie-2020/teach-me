# TypeScript Glossary

本工作区的统一术语表,覆盖阶段一“类型系统基础”。所有课程、练习、学习记录都应沿用这里的译法与定义。术语按主题分组。

## 基础

**Static type checking(静态类型检查)**:
在代码运行<em>之前</em>分析类型是否正确的过程,是 TypeScript 的核心能力。
_Avoid_: 编译检查、语法检查

**Type erasure(类型擦除)**:
TS 编译为 JavaScript 时,所有类型注解被移除,运行时不含任何类型信息。
_Avoid_: 类型删除

**Type annotation(类型注解)**:
写在标识符后、形如 `x: string` 的显式类型标记。
_Avoid_: 类型标注、类型声明

**Type inference(类型推断)**:
TS 在没有注解时,根据初始值自动推导出变量类型的能力。
_Avoid_: 类型推导、自动类型

**Implicit any(隐式 any)**:
未标注且无法推断的位置(如函数参数)被默认当作 `any`;在 strict 下会报错。
_Avoid_: 默认 any

## 类型构造

**Literal type(字面量类型)**:
把某个具体值(如 `"up"`、`42`)本身当作类型,只允许等于该值。
_Avoid_: 常量类型

**Union type(联合类型)**:
用 `|` 组合的类型,表示“取其中之一”,如 `number | string`。
_Avoid_: 或类型、组合类型

**Intersection type(交叉类型)**:
用 `&` 组合的类型,表示“同时满足全部”,常用于合并对象类型。
_Avoid_: 与类型

**Type alias(类型别名)**:
用 `type` 给任意类型命名以便复用,如 `type Dir = "up" | "down"`。
_Avoid_: 类型定义

**Narrowing(收窄)**:
通过 `typeof`、`in`、`instanceof`、真值判断等把 union 缩小到更具体类型的过程。
_Avoid_: 类型缩小、细化

**Discriminated union(可辨识联合)**:
每个成员带一个共同的字面量标记字段(如 `kind`),便于用 `switch` 收窄的 union。
_Avoid_: 标签联合、辨别联合

## 结构类型

**Optional property(可选属性)**:
对象类型中以 `?` 标记、可以不存在的属性,其类型隐含 `| undefined`。
_Avoid_: 可空属性

**Index signature(索引签名)**:
形如 `{ [k: string]: T }` 的写法,描述键名未知但值类型统一的对象。
_Avoid_: 键签名

**Tuple(元组)**:
长度固定、每个位置类型已知的数组类型,如 `[string, number]`。
_Avoid_: 定长数组

## 特殊类型

**any**:
关闭类型检查的“逃生舱”,可赋任意值也可任意使用;应尽量避免。
_Avoid_: 任意类型

**unknown**:
类型安全版的 `any`:可接收任何值,但使用前必须先收窄。
_Avoid_: 未知类型(作为口头译名可,但代码中保留 unknown)

**never**:
“不可能存在的值”的类型,用于穷尽检查与永不返回的函数。
_Avoid_: 空类型

**Type assertion(类型断言)**:
用 `as` 告诉编译器“相信我,它是这个类型”;是断言而非运行时转换。
_Avoid_: 类型转换、强制类型
