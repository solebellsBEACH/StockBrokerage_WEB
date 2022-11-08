import axios from "axios";

export const baseURL = 'http://localhost:3001/'
export const baseURLAlpha = 'https://www.alphavantage.co/'
export const alphaKey = 'PFBMHV3QOCD3GV23'

export const api = axios.create({
  baseURL
});

export const apiAlpha = axios.create({
  baseURL: baseURLAlpha,
});