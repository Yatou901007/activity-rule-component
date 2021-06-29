/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {repeat} from 'lit/directives/repeat.js';
import { ActivityModel } from './model/ActivityModel';
import { formatMoney } from './utils/formatMoney';

/**
 * An example element.
 *
 * @slot - This element has no slot
 * @csspart button - The button
 */
@customElement('activity-rule')
export class ActivityRule extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .el-table {
      border-top: 1px solid #d9d9d9;
      border-left: 1px solid #d9d9d9;
      font-size: 14px;
      color: #595959;
      flex: 1;
    }
    .el-table th {
      text-align: left;
      font-weight: 400;
      white-space: nowrap;
      overflow: hidden;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: #fafafa;
    }
    .el-table td, .el-table th {
      border-right: 1px solid #d9d9d9;
      border-bottom: 1px solid #d9d9d9;
    }
    .el-table td, .el-table th, .el-table th>.cell {
      position: relative;
      color: #262626;
      line-height: 40px;
      vertical-align: middle;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      height: 40px;
      text-overflow: ellipsis;
    }
    .el-table .cell {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        word-break: break-all;
        line-height: 23px;
        font-size: 12px;
        padding: 0 15px;
    }
    .el-table td .cell {
      padding: 10px 20px;
    }
    .el-table td .cell p {
      margin-bottom: 0;
      margin-top: 0;
    }
    .el-table td .cell p .aa {
      display: inline-block;
      width: 100px;
      text-align: right;
      padding-right: 5px;
    }
    .el-table td .cell p .bb {
      display: inline-block;
      width: 70px;
      text-align: center;
    }
    .el-table td .cell p .cc {
      display: inline-block;
      width: 120px;
      padding-right: 20px;
    }
    .el-table td .cell p .dd {
    }
  `;

  /**
   * 规则基础数据
   */
  @property({ type: Object })
  ruleData: ActivityModel = new ActivityModel;

  /**
   * 隐藏商家信息
   */
  @property({ type: Boolean })
  hideVender?: boolean = false

  /**
   * 返利规则标签名
   */
  @property({ type: String })
  ruleTitle?: string = '返利规则'

  render() {
    console.log('ruleData参数：',this.ruleData)
    return html`
      <table cellspacing="0" cellpadding="0" border="0" class="el-table" style="width: 100%;">
        <colgroup>
          <col name="el-table_1_column_1" width="90" />
        </colgroup>
        ${!this.hideVender
        ? html`
        <tr class="">
          <th colspan="1" rowspan="1" class="el-table_1_column_1 is-left is-leaf">
            <div class="cell">活动商家</div>
          </th>
          <td rowspan="1" colspan="1" class="el-table_1_column_1 is-left">
            <div class="cell">${this.ruleData.venderIds}</div>
          </td>
        </tr>
        `: html``}
        ${this.ruleData.ruleMode == 1
        ? html`
        <tr class="el-table__row" v-if="ruleData.brandName">
          <th colspan="1" rowspan="1" class="el-table_1_column_2 is-left is-leaf">
            <div class="cell">品牌</div>
          </th>
          <td rowspan="1" colspan="1" class="el-table_1_column_2 is-left">
            <div class="cell">
              <span>${this.ruleData.brandName}</span>
            </div>
          </td>
        </tr>
        `: html``}
        ${this.ruleData.ruleMode == 1
        ? html`
        <tr class="el-table__row">
          <th colspan="1" rowspan="1" class="el-table_1_column_2 is-left is-leaf">
            <div class="cell">品类列表</div>
          </th>
          <td rowspan="1" colspan="1" class="el-table_1_column_2 is-left">
            <div class="cell">
              <span>
                ${this.ruleData.categoryName && this.ruleData.categoryName.length > 0
                  ? html`
                  ${this.ruleData.categoryName.join('，')}
                  `: html``}
              </span>
            </div>
          </td>
        </tr>
        `: html``}
        ${this.ruleData.ruleMode == 2
        ? html`
        <tr class="el-table__row" v-if="ruleData.skuId">
          <th colspan="1" rowspan="1" class="el-table_1_column_2 is-left is-leaf">
            <div class="cell">商品列表</div>
          </th>
          <td rowspan="1" colspan="1" class="el-table_1_column_2 is-left">
            <div class="cell">
              <span>${this.ruleData.skuId}</span>
            </div>
          </td>
        </tr>
        `: html``}
        <tr class="">
          <th colspan="1" rowspan="1" class="el-table_1_column_1 is-left is-leaf">
            <div class="cell">${this.ruleTitle}</div>
          </th>
          <td rowspan="1" colspan="1" class="el-table_1_column_1 is-left">
            <div class="cell">
            ${repeat(this.ruleData.rebateRuleList, (item) => 
              html`
              <p>
                <span class="aa">
                  ${item.purchaseMin
                    ? html`
                      ${formatMoney(item.purchaseMin)}
                    `
                    : html`
                      '--'
                    `
                  }元
                </span>
                &lt;
                <span class="bb">采购金额</span>
                <span class="cc">
                  ${item.purchaseMax
                    ? html`
                      &le;
                      <span class="dd">${formatMoney(item.purchaseMax)}元</span>
                    `
                    : ''
                  }
                </span>
                <span>
                  ${item.rebateType == 1
                    ? html`
                      采购金额 ${item.rebateQuota} %
                    `
                    : html`
                      固定数额 ${formatMoney(item.rebateQuota)} 元
                    `
                  }
              </p>`
            )}
            </div>
          </td>
        </tr>
      </table>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'activity-rule': ActivityRule;
  }
}