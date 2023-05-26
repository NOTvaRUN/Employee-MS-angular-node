import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UI';
  employees: any = [];
  employee: any = {};
  addEmployee = {
    name: '',
    dob: '',
    email: '',
    country: ''
  }
  constructor(public http: HttpClient){}

  ngOnInit(){
    this.getAllEmployees();
  }

  // literally no time.
  getAllEmployees(){
    this.http.get("http://localhost:3000/v1/employee").subscribe((resp: any)=>{
      if(resp.status == 'success'){
        this.employees = resp.data
      } else {
        alert(resp.message);
      }
    }, (err)=>{
      alert("unable to reach server.");
    })
  }

  getEmployee(id: string){
    this.http.get("http://localhost:3000/v1/employee/" + id).subscribe((resp: any)=>{
      if(resp.status == 'success'){
        this.employee = resp.data
      } else {
        alert(resp.message);
      }
    }, (err)=>{
      alert("unable to reach server.");
    })
  }

  updateEmployee(id: string, data: any){
    this.http.put("http://localhost:3000/v1/employee/" + id, data).subscribe((resp: any)=>{
      if(resp.status == 'success'){
        this.getAllEmployees()
        alert("updated employee");

      } else {
        alert(resp.message);
      }
    }, (err)=>{
      alert("unable to reach server.");
    })
  }

  addEmployeeEp(data: any){
    this.http.post("http://localhost:3000/v1/employee", data).subscribe((resp: any)=>{
      if(resp.status == 'success'){
        this.getAllEmployees()
        alert("added employee");
        this.addEmployee = {
          name: '',
          dob: '',
          email: '',
          country: ''
        }
      } else {
        alert(resp.message);
      }
    }, (err)=>{
      alert("unable to reach server.");
    })
  }

  deleteEmployee(id: string){
    this.http.delete("http://localhost:3000/v1/employee/" + id).subscribe((resp: any)=>{
      if(resp.status == 'success'){
        this.getAllEmployees()
        alert("deleted employee");

      } else {
        alert(resp.message);
      }
    }, (err)=>{
      alert("unable to reach server.");
    })
  }


}
