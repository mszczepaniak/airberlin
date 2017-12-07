import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { ParticipantsService } from './participants.service';


import { AppComponent } from './app.component';
import { voteReducer } from '../store/vote.reducer';
import { VoteEffects } from './../store/vote.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    StoreModule.forRoot({
      vote: voteReducer
    }),
    EffectsModule.forRoot([ VoteEffects ]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [ParticipantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

