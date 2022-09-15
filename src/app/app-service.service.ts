import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
//fetching data from api
export class AppServiceService {
  constructor(private http: HttpClient) {}
  async getData() {
    return await axios
      .post('http://localhost:5000/products', {})
      .then((res) => {
        return res.data;
      });
  }
  //   const EXAMPLE_DATA : any[]   = await axios
  //   .post('localhost:5000/products', {})
  //   .then((res) => {
  //     return res.data;
  //   });
}
