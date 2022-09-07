import { TestBed } from '@angular/core/testing';

import { CursosService } from './cursos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('CursosService', () => {
  let service: CursosService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CursosService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debe retornar un arreglo de cursos', (done: DoneFn) => {
    const mockDatos = [
      {id:"4",curso:"dsadas",salon:15},
      {id:"5",curso:"VueJS", salon:18,},
      {id:"6",curso:"SQL", salon:30,},
      {id:"7",curso:"Web 3.0", salon:39,},
      {id:"8",curso:"ReactJS",salon:88,},
      {id:"9",curso:"UI/UX",salon:48,},
      {id:"10",curso:".NET",salon:35,}
    ];
    httpClientSpy.get.and.returnValue(of(mockDatos));
    service.obtenerCurso().subscribe((cursos) =>{
      expect(cursos).toEqual(mockDatos);
      done();
      
    })
  })
});
