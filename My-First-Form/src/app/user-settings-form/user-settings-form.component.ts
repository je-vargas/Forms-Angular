import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})

export class UserSettingsFormComponent implements OnInit {
  originalSetting: UserSettings = {
    name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes...',
  };

  userSetting: UserSettings = { ...this.originalSetting };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log('in onSubbmit: ', form.valid);
  }
}
