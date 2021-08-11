import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule as Store, reducers } from "./store";
import { TimerEffects } from "./store/timer/effects";

import { ContainersModule } from "./containers";
import { ServicesModule } from "./services";

import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([TimerEffects]),

        Store,
        ContainersModule,
        ServicesModule,

        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        }),
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
