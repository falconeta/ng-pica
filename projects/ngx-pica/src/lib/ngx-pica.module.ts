import { NgModule } from '@angular/core';
import { NgxPicaService } from './ngx-pica.service';
import { NgxPicaExifService } from './ngx-pica-exif.service';
import { NgxPicaImageService } from './ngx-pica-image.service';

@NgModule({
  providers: [
    NgxPicaService,
    NgxPicaExifService,
    NgxPicaImageService,
  ]
})
export class NgxPicaModule { }
