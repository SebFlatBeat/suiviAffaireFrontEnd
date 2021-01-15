import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) {
  }

  showSuccessDeconnexion(message: string, title: string): void {
    this.toastr.success(message, title);
  }

  showSuccessConnexion(message: string, title: string): void {
    this.toastr.success(message, title);
  }

  showSuccessRegister(message: string, title: string): void {
    this.toastr.success(message, title);
  }

  showSuccessPut(message: string, title: string): void {
    this.toastr.success(message, title);
  }

  showWarnPut(message: string, title: string): void {
    this.toastr.warning(message, title);
  }

  showErrorRegister(message: string, title: string): void {
    this.toastr.error(message, title);
  }

  showErrorConnexion(message: string, title: string): void {
    this.toastr.error(message, title);
  }

  showWarnSearch(message: string, title: string): void {
  this.toastr.warning(message, title);
  }

}
