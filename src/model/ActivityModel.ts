import { ActivityRuleModel } from './ActivityRuleModel'
/**
 * 活动类
 */
export class ActivityModel {
  ruleMode!: number; // 指定类型
  venderIds!: string; // 活动商家
  brandName!: string; // 品牌
  categoryName!: string[]; // 品类
  skuId!: string; // 商品列表
  rebateRuleList!: ActivityRuleModel[]; // 返利规则列表
}
