import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Customer } from './Model/Customer';
import { MasterService } from './Service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'AngularUI';
  myControl = new FormControl('');
  options !: Customer[];
  Finaldata !: Observable<Customer[]>;
  constructor(private service: MasterService) {
    this.service.GetCustomer().subscribe(item => {
      this.options = item;
    });
  }
  ngOnInit(): void {
   this.Finaldata=this.myControl.valueChanges.pipe(
    startWith(''),
    map(item=>{
      const name=item;
      return name?this._filter(name as string):this.options
    })
    )
  }

  SelectCustomer(name: any) {
    console.log(name);
  }

  private _filter(name:string):Customer[]{
    const filtervalue=name.toLocaleLowerCase();
    return this.options.filter(opt=>opt.name.toLocaleLowerCase().includes(filtervalue));
  }
}
