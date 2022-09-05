import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './atoms/button/button.component';
import { FormLabelComponent } from './atoms/form-label/form-label.component';
import { HeaderTextComponent } from './atoms/header-text/header-text.component';
import { LinkComponent } from './atoms/link/link.component';
import { LogoComponent } from './atoms/logo/logo.component';
import { NavBarLinkComponent } from './atoms/nav-bar-link/nav-bar-link.component';
import { ParagraphTextComponent } from './atoms/paragraph-text/paragraph-text.component';
import { TextBoxPasswordComponent } from './atoms/text-box-password/text-box-password.component';
import { TextBoxStandardComponent } from './atoms/text-box-standard/text-box-standard.component';
import { FooterBarComponent } from './molecules/footer-bar/footer-bar.component';
import { HeaderBarComponent } from './molecules/header-bar/header-bar.component';
import { NavBarComponent } from './molecules/nav-bar/nav-bar.component';
import { PageTitleComponent } from './molecules/page-title/page-title.component';
import { PasswordFormControlComponent } from './molecules/password-form-control/password-form-control.component';
import { UsernameFormControlComponent } from './molecules/username-form-control/username-form-control.component';
import { LoginFormComponent } from './organisms/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormLabelComponent,
    HeaderTextComponent,
    LinkComponent,
    LogoComponent,
    NavBarLinkComponent,
    ParagraphTextComponent,
    TextBoxPasswordComponent,
    TextBoxStandardComponent,
    FooterBarComponent,
    HeaderBarComponent,
    NavBarComponent,
    PageTitleComponent,
    PasswordFormControlComponent,
    UsernameFormControlComponent,
    LoginFormComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
