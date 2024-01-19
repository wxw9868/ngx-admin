import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HistoryTableData } from '../data/history-table';

@Injectable()
export class HistoryTableService extends HistoryTableData {
  private url = 'http://localhost:8080/stock/tradingRecords?page=1&page_size=300'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    super();
  }

  public data: any;

  getData() {
    // this.http.get<JSON>(this.url).subscribe(data =>this.data = data);
    // this.http.get<JSON>(this.url).subscribe((res: JSON) =>{
    //   console.log(res) 
    // });
    return this.http.get<JSON>(this.url)
  }

}
