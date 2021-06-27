---
layout: example.11ty.cjs
title: <activity-rule> ⌲ Examples ⌲ ruleTitle Property
tags: example
name: ruleTitle Property
description: set ruleTitle Property
---

<activity-rule></activity-rule>
<script>
  const ruleData = {
    ruleMode: 1, // 商品/类目类型： 1 代表类目品牌，2 代表 商品列表
    venderIds: '123', // 活动商家
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
  document.querySelector('activity-rule').setAttribute('ruleData', JSON.stringify(ruleData))
  document.querySelector('activity-rule').setAttribute('ruleTitle', '奖励规则')
</script>

<h3>JSX</h3>

```html
<activity-rule ruleData={JSON.stringify(ruleData)} ruleTitle="奖励规则"></activity-rule>
```

<h3>vue</h3>

```html
<activity-rule :ruleData="JSON.stringify(ruleData)" :ruleTitle="'奖励规则'"></activity-rule>
```
