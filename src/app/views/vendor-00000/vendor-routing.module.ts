import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddvendorComponent } from './addvendor.component';
import { ProductsComponent } from './products.component';
import { SubProductsComponent } from './products/subProducts.component';
import { VendorComponent } from './vendor.component';
// import { ProductsRoutingModule} from './products/products-routing.module';








const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Vendor'
    },
    children: [  
      
      {
        path: '',
        component: VendorComponent,
        data: {
          title: 'vendor List'
        }
      },    
      {
        path: 'addvendor',
        component: AddvendorComponent,
        data: {
          title: 'add vendor'
        }
      },
      {
        path: 'products',
        component: ProductsComponent,
        data: {
          title: 'products'
        }
      }
      ,
      {
        path: 'subProducts',
        component: SubProductsComponent,
        data: {
          title: 'subProducts'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule {}




