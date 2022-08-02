import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoApComponent implements OnInit {
  isLogged=false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  showUser!:string;

  password! : string;
  roles: string[] = [];
  errMsj!: string;

  nuevoUsuario!: NuevoUsuario;
  nombre!: string;
  email!: string;

  constructor(private router: Router, 
              private authService: AuthService, 
              private tokenService: TokenService) { }

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
      this.showUser=this.tokenService.getUserName();
    }else{
      this.isLogged = false
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
   // this.showUser="";
    alert("Sesión cerrada")
    window.location.reload();
    
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario,this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.showUser=this.tokenService.getUserName();
        alert("Estás logueado, " + data.nombreUsuario)
        window.location.reload()
      }, err =>{
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
        alert("Login falló, revise el nombre de usuario y/o el password");
      });
  }
  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        alert("Cuenta creada exitosamente")
        this.router.navigate(['']);
      },
      err => {
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
        alert("Fallo al crear perfil")
      });
    }

  
}
