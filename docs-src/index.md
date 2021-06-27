---
layout: page.11ty.cjs
title: <activity-rule> ⌲ Home
---

# &lt;activity-rule>

`<activity-rule>` 是一个能够跨三端共同使用的组件，作用是展示一盘货返利活动规则。

三端分别为商家端（React版）、供应商端（Vue版）、管理端（Vue版）。

组件基于 LitElement 框架构建的，具体使用方法参考本文档。

## 配置 attributes

```html
<activity-rule ruleData={JSON.stringify(ruleData)}></activity-rule>
```

<section class="columns">
  <div>

ruleData：必填项，返利活动数据

hideVender: boolean 选填，配置为true可隐藏商家信息

ruleTitle: string 选填，配置后可修改【返利规则】标签名


```js
const ruleData = {
  ruleMode: 1, // 商品/类目类型： 1 代表类目品牌，2 代表 商品列表
  venderIds: '205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370;205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370;205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370', // 活动商家
  brandName: '美的', // 品牌
  categoryName: ['家用电器-大家电-洗衣机'], // 品类
  skuId: '123,456', // 商品
  rebateRuleList: [ // 返利规则
    {
    "purchaseMin": "90000", // 采购金额最小值
    "purchaseMax": "9000000", // 采购金额最大值
    "rebateType": 1, // 返利配额类型： 1 代表百分比，2 代表 固定数额
    "rebateQuota": "20" // 返利值
    },
    {
    "purchaseMin": "9000000",
    "purchaseMax": "90000000",
    "rebateType": 1,
    "rebateQuota": "22"
    },
    {
    "purchaseMin": "90000000",
    "purchaseMax": null,
    "rebateType": 2,
    "rebateQuota": "23"
    }
  ]
}

```

  </div>
  <div>

<h2>This is a &lt;activity-rule&gt;</h2>
<activity-rule></activity-rule>
<script>
  const ruleData = {
    ruleMode: 1, // 商品/类目类型： 1 代表类目品牌，2 代表 商品列表
    venderIds: '205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370;205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370;205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370；205370', // 活动商家
    brandName: '美的', // 品牌
    categoryName: ['家用电器-大家电-洗衣机'], // 品类
    skuId: '123,456', // 商品
    rebateRuleList: [ // 返利规则
      {
      "purchaseMin": "90000", // 采购金额最小值
      "purchaseMax": "9000000", // 采购金额最大值
      "rebateType": 1, // 返利配额类型： 1 代表百分比，2 代表 固定数额
      "rebateQuota": "20" // 返利值
      },
      {
      "purchaseMin": "9000000",
      "purchaseMax": "90000000",
      "rebateType": 1,
      "rebateQuota": "22"
      },
      {
      "purchaseMin": "90000000",
      "purchaseMax": null,
      "rebateType": 2,
      "rebateQuota": "23"
      }
    ]
  }
  document.querySelector('activity-rule') && document.querySelector('activity-rule').setAttribute('ruleData', JSON.stringify(ruleData))
</script>


  </div>
</section>
