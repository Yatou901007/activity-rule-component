---
layout: example.11ty.cjs
title: <activity-rule> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example
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
      "purchaseMin": "90,000", // 采购金额最小值
      "purchaseMax": "9,000,000", // 采购金额最大值
      "rebateType": 1, // 返利配额类型： 1 代表百分比，2 代表 固定数额
      "rebateQuota": "20" // 返利值
      },
      {
      "purchaseMin": "9,000,000",
      "purchaseMax": "90,000,000",
      "rebateType": 1,
      "rebateQuota": "22"
      },
      {
      "purchaseMin": "90,000,000",
      "purchaseMax": null,
      "rebateType": 2,
      "rebateQuota": "23"
      }
    ]
  }
  document.querySelector('activity-rule') && document.querySelector('activity-rule').setAttribute('ruleData', JSON.stringify(ruleData))
</script>


<h3>HTML</h3>

```html
<activity-rule ruleData="JSON.stringify(ruleData)"></activity-rule>
```
