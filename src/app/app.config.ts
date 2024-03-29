import { ApplicationConfig, NgModule, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimations(), 
    provideAnimations(), 
    provideAnimationsAsync(), 
    importProvidersFrom(provideFirebaseApp(() => 
    initializeApp({
      "projectId":"ring-of-fire-3855c",
      "appId":"1:121038723612:web:f4d6da3c5a2319302d1dd9",
      "storageBucket":"ring-of-fire-3855c.appspot.com",
      "apiKey":"AIzaSyANeNRwsSrtGlLf039_uO1ruykukbY8W6A",
      "authDomain":"ring-of-fire-3855c.firebaseapp.com",
      "messagingSenderId":"121038723612"}))), 
      importProvidersFrom(provideFirestore(() => getFirestore()),
      
      )
    ]
    
      };
