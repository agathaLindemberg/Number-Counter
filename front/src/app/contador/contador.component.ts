import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  valor: number | null = null;
  contagem: number | null = null;
  pagina: number = 0;
  itensPorPagina: number = 5;
  listaValores: { valor: string, contagem: number }[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.carregarLista();
  }

  carregarLista(): void {
    this.http.get<{ [key: string]: number }>('http://localhost:8080/counts')
      .subscribe({
        next: (res) => {
          this.listaValores = Object.entries(res).map(([valor, contagem]) => ({ valor, contagem }));
        },
        error: (err) => console.error('Erro ao buscar lista:', err)
      });
  }

  enviarValor(): void {
    if (!this.valor || this.valor.toString().trim() === '') return;

    const params = new HttpParams().set('value', this.valor.toString());
    this.http.post<number>('http://localhost:8080/count', null, { params })
      .subscribe({
        next: (res) => {
          this.contagem = res;
          this.carregarLista();
        },
        error: (err) => console.error('Erro ao enviar valor:', err)
      });
  }

  resetarContagem(): void {
    this.contagem = null;
  }

  somenteNumeros(event: KeyboardEvent) {
    const teclasPermitidas = [
      'Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'
    ];
    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    if (
      !numeros.includes(event.key) &&
      !teclasPermitidas.includes(event.key)
    ) {
      event.preventDefault();
    }
  }

  paginaAtual(): { valor: string, contagem: number }[] {
    const inicio = this.pagina * this.itensPorPagina;
    return this.listaValores.slice(inicio, inicio + this.itensPorPagina);
  }

  totalPaginas(): number {
    return Math.ceil(this.listaValores.length / this.itensPorPagina);
  }

  anterior(): void {
    if (this.pagina > 0) this.pagina--;
  }

  proximo(): void {
    if ((this.pagina + 1) < this.totalPaginas()) this.pagina++;
  }
}
