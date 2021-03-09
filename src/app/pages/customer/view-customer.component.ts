import { Component, OnInit } from "@angular/core";

@Component({
  selector: "view-customer",
  templateUrl: "view-customer.html"
})
export class ViewCustomerComponent implements OnInit {
    constructor() {}
  ngOnInit() {}

  columnDefs = [
    { headerName: "Name", field: 'name', width: '180', sortable: true, filter: true, checkboxSelection: true },
    { headerName: "Account #", field: 'account', width: '160', sortable: true, filter: true},
    { headerName: "P.Address", field: 'pAddress', width: '170', sortable: true, filter: true},
    { headerName: "T.Address", field: 'tAddress', width: '170', sortable: true, filter: true},
    { headerName: "Mobile #", field: 'mobile', width: '120', sortable: true, filter: true},
    { headerName: "Citizenship #", field: 'citizenship', width: '120', sortable: true, filter: true},
    { headerName: "Action", field: 'action', cellRenderer: this.CustomerActionRender, width: '137', sortable: true, filter: true,}
];

rowData = [
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'},
    { name: 'Manoj Adhikari', account: '13216665321366', pAddress: 'Kathmandu, Nepal', tAddress: 'Kathmandu, Nepal', mobile:'986565633', citizenship: '5654-6566'}
];
public CustomerActionRender(params) {
  let templateHtml = "";
  let patient = params.data;
  templateHtml += `<a href="#" class="grid-action">
              <i class="far fa-edit"></i>
           </a>
           <a href="#" class="grid-action">
               <i class="fas fa-eye"></i>
           </a>
           <a href="#" class="grid-action">
                          <i class="far fa-trash-alt"></i>
             </a>`;
  return templateHtml;
}
}
