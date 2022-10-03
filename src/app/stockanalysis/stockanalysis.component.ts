import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';
import ChartReponse from '../responses/chart-response'

@Component({
  selector: 'app-stockanalysis',
  templateUrl: './stockanalysis.component.html',
  styleUrls: ['./stockanalysis.component.css']
})
export class StockanalysisComponent {
 
  result: any;
  coinPrice: any;
  coinName: any;
  predict: any;
  chart: any = [];
  private baseUrl = 'https://api.coinranking.com/v2/coins';
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  apiKey = 'coinrankingc032026f93e3b94c047c89523ca837327c4dac81e1070686';
 
  // url = `${this.proxyUrl}${this.baseUrl}`;
  url = 'https://localhost:7217/api/Stocks/17' 
  //url = 'https://api.coinranking.com/v2/coins'
  constructor(private httpClient: HttpClient ) { 
    Chart.register(...registerables);
  }

  ngOnInit() {
  const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-My-Custom-Header': 'coinrankingc032026f93e3b94c047c89523ca837327c4dac81e1070686',
        'Access-Control-Allow-Origin': '*',
      }),
    };

    this.httpClient.get(this.url).subscribe((data) => {
      this.result = data;
      this.coinPrice =Array.from(this.result.dates.split(','),String) ;//.map((coins: any) => coins.price);
      this.coinName = Array.from(this.result.historyCloses.split(','),Number); 
      this.predict =Array.from(this.result.predictedCloses.split(','),Number); 
       //this.result.historyCloses;//.map((coins: any) => coins.name);
      // console.log(this.coinPrice);
      // console.log(this.coinName);

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.coinPrice,
          datasets: [
            {
              data: this.coinName,
              borderColor: '#3e95cd',
              fill: false,
              label: 'Coin Price',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 3,
            },
            {
              data: this.predict,
              borderColor: '#3e95cd',
              fill: false,
              label: 'Coin Price',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 3,
            },
          ],
        },
      });
    });
  }

  // label: any[] = [];
  // history: any[] = [];
  // predicted: any[] = [];
  // // temperature: any[] = [];
  // // chart: any = [];
  // graph:ChartReponse | undefined;

  // ngOnInit(): void {
  //   this.httpClient.get(this.url)  
  //       .subscribe(
  //         (data) => {

  //          // let sdates = (data as any).dates.replace("\"","").split(',');
  //           this.label.push(Array.from((data as any).dates.split(','),String));
  //           this.history.push(Array.from((data as any).historyCloses.split(','),Number));
  //           this.predicted.push(Array.from((data as any).predictedCloses.split(','),Number));
  //         });
  //           // data => this.config = {
  //           //   heroesUrl: (data as any).heroesUrl,
  //           //   textfile:  (data as any).textfile,
  //           // });
  //   // fetching data from database
  //         // var values = data;
  //          // this.graph = (ChartReponse)data;
  //         //  for (var x in values) {
  //          //  this.label.push(this.graph?.dates.split(','));
  //          //  this.history.push(this.graph?.historyCloses.split(','));
  //           // this.predicted.push(this.graph?.predictedCloses.split(','));
  //             // this.time.push(values[x]['time'])
  //             // this.humidity.push(values[x]['humidity'])
  //             // this.pressure.push(values[x]['pressure'])
  //             // this.temperature.push(values[x]['temperature'])
  //         //  }
  //        // })
  //        this.salesData: ChartData<'line'> = {
  //         labels:   this.label, //["Jan", "Feb", "Mar", "Apr", "May"], 
  //         datasets: [
  //          { label: 'Mobiles', data: this.history, tension: 0.5 },
  //          { label: 'Laptop', data: this.predicted, tension: 0.5 },
  //         //  { label: 'AC', data: [500, 400, 350, 450, 650], tension: 0.5 },
  //         //   { label: 'Headset', data: [1200, 1500, 1020, 1600, 900], tension: 0.5 },
  //         ],
  //       };
      
  //       this.chartOptions: ChartOptions = {
  //         responsive: true,
  //         plugins: {
  //           title: {
  //             display: true,
  //             text: 'Monthly Sales Data',
  //           },
  //         },
  //       };
         
  }

  


  
