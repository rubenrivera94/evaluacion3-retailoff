import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from 'src/app/services/aws-apigateway.service';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.page.html',
  styleUrls: ['./aws.page.scss'],
})
export class AwsPage implements OnInit {

  nombre: string = ""
  email: string = ""

  constructor(private service: AwsApigatewayService) { }

  ngOnInit() {
    //this.service.getCliente().forEach((d:any) => {

    // console.log(d.body)
    //})
  }

  postCliente() {
    console.log('Datos a enviar:', this.nombre, this.email);  // Verificación
    this.service.postCliente(this.nombre, this.email).subscribe((data) => {
      console.log('Respuesta del servidor:', data);
    });
  }


}
