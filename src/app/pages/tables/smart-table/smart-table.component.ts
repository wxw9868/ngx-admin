import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      stockName: {
        title: '股票名称',
        type: 'string',
      },
      profitAndLoss: {
        title: '盈亏',
        type: 'string',
      },
      amountOfMoney: {
        title: '盈亏金额',
        type: 'number',
      },
      earningRate: {
        title: '收益率',
        type: 'number',
      },
      holdStockDays: {
        title: '持股天数',
        type: 'number',
      },
      transactionTaxes: {
        title: '交易税费',
        type: 'number',
      },
      buyingDay: {
        title: '建仓日期',
        type: 'string',
      },
      sellingDay: {
        title: '清仓日期',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    // const data = this.service.getData();
    // this.source.load(data);
    this.service.getData().subscribe((data: any) =>{
      this.source.load(data)
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
