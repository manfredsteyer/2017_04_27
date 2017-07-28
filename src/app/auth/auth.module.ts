import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../shared/auth/auth.service';
@NgModule({
  imports: [CommonModule],
  declarations: [
    /* LoginComponent */
  ],
  providers: [ /* empty! */],
  exports: [
    /* LoginComponent */
  ]

})
export class AuthModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthService]
    }
  }


}
