import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full'},
    { path: 'pages', component: HomeComponent, children: [
        { path: '', redirectTo: 'overview', pathMatch: 'full' },
        { path: 'overview', component: OverviewComponent },
        { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
        { path: 'client', loadChildren: 'app/client/client.module#ClientModule' },
        { path: 'data-object', loadChildren: 'app/data-object/data-object.module#DataObjectModule' },
        { path: 'about', component: AboutComponent }
    ]}   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }