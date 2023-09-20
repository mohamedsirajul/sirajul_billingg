import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SidebarComponent } from './admin-layout/sidebar/sidebar.component';
import { UserPanelComponent } from './admin-layout/sidebar/user-panel.component';
import { SidemenuComponent } from './admin-layout/sidemenu/sidemenu.component';
import { AccordionAnchorDirective } from './admin-layout/sidemenu/accordionanchor.directive';
import { AccordionDirective } from './admin-layout/sidemenu/accordion.directive';
import { AccordionLinkDirective } from './admin-layout/sidemenu/accordionlink.directive';
import { HeaderComponent } from './admin-layout/header/header.component';
import { BrandingComponent } from './admin-layout/header/branding.component';
import { NotificationComponent } from './admin-layout/header/notification.component';
import { UserComponent } from './admin-layout/header/user.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { CustomizerComponent } from './admin-layout/customizer/customizer.component';
import { TranslateComponent } from './admin-layout/header/translate.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    SidebarComponent,
    UserPanelComponent,
    SidemenuComponent,
    AccordionAnchorDirective,
    AccordionDirective,
    AccordionLinkDirective,
    HeaderComponent,
    BrandingComponent,
    NotificationComponent,
    UserComponent,
    AuthLayoutComponent,
    CustomizerComponent,
    TranslateComponent,
  ],
  imports: [SharedModule],
})
export class ThemeModule {}
