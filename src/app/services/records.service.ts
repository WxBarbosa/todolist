import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RecordsService {
  private records = []

  constructor(){
    this.records.push(
      {name:'TKF',members:2000, inviteCode:'D2AF4A1'},
      {name:'PDV',members:1050, inviteCode:'D2AF4A1'},
      {name:'TDP',members:3002, inviteCode:'D2AF4A1'}
    );
  }

  getData(){
    return this.records;
  }
}
