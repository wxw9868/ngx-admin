import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { HistoryTableData } from '../../../@core/data/history-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss'],
})
export class HistoryTableComponent {

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
      trading_day: {
        title: '成交日期',
        type: 'string',
      },
      trading_time: {
        title: '成交时间',
        type: 'string',
      },
      securities_code: {
        title: '证券代码',
        type: 'number',
      },
      securities_name: {
        title: '证券名称',
        type: 'string',
      },
      operate: {
        title: '操作',
        type: 'number',
      },
      trading_volume: {
        title: '成交数量',
        type: 'number',
      },
      trading_average_price: {
        title: '成交均价',
        type: 'number',
      },
      turnover: {
        title: '成交金额',
        type: 'number',
      },
      contract_number: {
        title: '合同编号',
        type: 'string',
      },
      trading_number: {
        title: '成交编号',
        type: 'number',
      },
      commission: {
        title: '手续费',
        type: 'number',
      },
      stamp_duty: {
        title: '印花税',
        type: 'number',
      },
      other_expenses: {
        title: '其他杂费',
        type: 'number',
      },
      note: {
        title: '备注',
        type: 'string',
      },
      shareholder_accounts: {
        title: '股东帐户',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: HistoryTableData) {
    // const data = this.service.getData();
    // this.source.load([]);
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
