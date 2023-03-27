import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { BorrowerComponent } from './borrower/borrower.component';
import { BorrowerDetailsComponent } from './borrower/borrower-details/borrower-details.component';
import { BorrowerDashboardComponent } from './borrower/borrower-dashboard/borrower-dashboard.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardChatComponent } from './dashboard/dashboard-chat/dashboard-chat.component';
import { DashboardProfileComponent } from './dashboard/dashboard-profile/dashboard-profile.component';
import { DashboardTransactionComponent } from './dashboard/dashboard-transaction/dashboard-transaction.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MatCardModule} from '@angular/material/card';
import {SidenavComponent} from "./sidenav/sidenav.component";
import {MatTableModule} from "@angular/material/table";
import { LenderDetailsComponent } from './lender/lender-details/lender-details.component';
import { BorrowerTransactionComponent } from './borrower/borrower-transaction/borrower-transaction.component';
import { DashboardLoansComponent } from './dashboard/dashboard-loans/dashboard-loans.component';
import { BorrowerLoansComponent } from './borrower/borrower-loans/borrower-loans.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { LoanDialogComponent } from './borrower/borrower-loans/loan-dialog/loan-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatPaginatorModule} from "@angular/material/paginator";
import { LoanDetailsComponent } from './borrower/borrower-loans/loan-details/loan-details.component';
import {MatDividerModule} from "@angular/material/divider";
import { DashboardMessagesComponent } from './dashboard/dashboard-messages/dashboard-messages.component';
import {BorrowerMessagesComponent} from "./borrower/borrower-messages/borrower-messages.component";
import { DashboardMessageWindowComponent } from './dashboard/dashboard-message-window/dashboard-message-window.component';
import { BorrowerMessageWindowComponent } from './borrower/borrower-message-window/borrower-message-window.component';

@NgModule({
  declarations: [AppComponent, SignupComponent, NavbarComponent, LoginComponent,SidenavComponent, BorrowerComponent, BorrowerDetailsComponent,DashboardComponent, BorrowerDashboardComponent, DashboardHomeComponent, DashboardChatComponent, DashboardProfileComponent, DashboardTransactionComponent,LenderDetailsComponent, BorrowerTransactionComponent, DashboardLoansComponent, BorrowerLoansComponent, LoanDialogComponent,LoanDetailsComponent, DashboardMessagesComponent, BorrowerMessagesComponent, DashboardMessageWindowComponent, BorrowerMessageWindowComponent],
  declarations: [AppComponent, SignupComponent, NavbarComponent, LoginComponent,SidenavComponent, BorrowerComponent, BorrowerDetailsComponent,DashboardComponent, BorrowerDashboardComponent, DashboardHomeComponent, DashboardChatComponent, DashboardProfileComponent, DashboardTransactionComponent,LenderDetailsComponent,LenderDetailsComponent, BorrowerTransactionComponent, DashboardLoansComponent, BorrowerLoansComponent, LoanDialogComponent, LoanDetailsComponent, NotificationComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        HttpClientModule,
        MatRadioModule,
        MatButtonModule,
        MatCardModule,
        MatSelectModule,
        MatInputModule,
        MatSidenavModule,
        RouterModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatButtonToggleModule,
        MatTableModule,
        MatExpansionModule,
        MatDialogModule,
        MatPaginatorModule,
        MatDividerModule

    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
