import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationExperienceComponent } 
from './components/education-experience/education-experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HttpClientModule, HTTP_INTERCEPTORS } 
from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/auth/login.component';
import { interceptorProvider } from './services/interceptor.service';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/auth/registro.component';
import { IndexComponent } from './components/index/index.component';
import { MenuComponent } from './components/menu/menu.component';
import { AuthService } from './services/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    LogoApComponent,
    AboutComponent,
    ExperienceComponent,
    EducationExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    IndexComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  //AuthService lo puse para probar
  providers: [AuthService,
  //{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true},
  interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
