import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const MIDDELBURG = {
  latitude: 51.4895837,
  longitude: 3.6596301,
  timezone: 1
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private currentTheme = new BehaviorSubject<'light' | 'dark'>('light');
  theme$ = this.currentTheme.asObservable();

  constructor() {
    this.setThemeBasedOnTime();
    setInterval(() => this.setThemeBasedOnTime(), 60000);
  }

  private setThemeBasedOnTime() {
    const now = new Date();
    const isDaytime = this.isDaytime(now);
    const theme: 'light' | 'dark' = isDaytime ? 'light' : 'dark';
    
    this.currentTheme.next(theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  private isDaytime(date: Date): boolean {
    const sunrise = this.getSunrise(date);
    const sunset = this.getSunset(date);
    const hours = date.getHours() + date.getMinutes() / 60;
    return hours >= sunrise && hours < sunset;
  }

  private getSunrise(date: Date): number {
    return this.calculateSunTime(date, true);
  }

  private getSunset(date: Date): number {
    return this.calculateSunTime(date, false);
  }

  private calculateSunTime(date: Date, sunrise: boolean): number {
    const dayOfYear = this.getDayOfYear(date);
    const lngHour = MIDDELBURG.longitude / 15;
    
    let t = sunrise 
      ? dayOfYear + ((6 - lngHour) / 24) 
      : dayOfYear + ((18 - lngHour) / 24);
    
    const m = this.getSunMeanAnomaly(t);
    const l = this.getSunTrueLongitude(m);
    const dec = this.getSunDeclination(l);
    const hourAngle = this.getHourAngleSunrise(dec, MIDDELBURG.latitude);
    
    const hours = sunrise ? 24 - hourAngle / 15 : hourAngle / 15;
    const tzOffset = this.getTimezoneOffset(date);
    
    return hours + tzOffset - 12;
  }

  private getDayOfYear(date: Date): number {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - start.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  private getTimezoneOffset(date: Date): number {
    const jan = new Date(date.getFullYear(), 0, 1);
    const jul = new Date(date.getFullYear(), 6, 1);
    const stdTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    return -date.getTimezoneOffset() / 60 + 1;
  }

  private getSunMeanAnomaly(t: number): number {
    return (0.9856 * t) - 3.289;
  }

  private getSunTrueLongitude(m: number): number {
    const l = m + (1.916 * this.sinDeg(m)) + (0.020 * this.sinDeg(2 * m)) + 282.634;
    return this.normalizeAngle(l);
  }

  private getSunDeclination(l: number): number {
    return this.asinDeg(0.39782 * this.sinDeg(l));
  }

  private getHourAngleSunrise(dec: number, lat: number): number {
    const latRad = lat * (Math.PI / 180);
    const decRad = dec * (Math.PI / 180);
    const cosHourAngle = (this.cosDeg(90.833) / (this.cosDeg(latRad) * this.cosDeg(decRad))) - (this.tanDeg(latRad) * this.tanDeg(decRad));
    if (cosHourAngle > 1 || cosHourAngle < -1) return 0;
    return this.acosDeg(cosHourAngle);
  }

  private sinDeg(deg: number): number {
    return Math.sin(deg * (Math.PI / 180));
  }

  private cosDeg(deg: number): number {
    return Math.cos(deg * (Math.PI / 180));
  }

  private tanDeg(deg: number): number {
    return Math.tan(deg * (Math.PI / 180));
  }

  private asinDeg(x: number): number {
    return Math.asin(x) * (180 / Math.PI);
  }

  private acosDeg(x: number): number {
    return Math.acos(x) * (180 / Math.PI);
  }

  private normalizeAngle(angle: number): number {
    while (angle < 0) angle += 360;
    while (angle >= 360) angle -= 360;
    return angle;
  }

  toggleTheme() {
    const next = this.currentTheme.value === 'light' ? 'dark' : 'light';
    this.currentTheme.next(next);

    document.documentElement.setAttribute('data-theme', next);
  }

  getCurrentThemeValue(): 'light' | 'dark' {
    return this.currentTheme.value;
  }
}


