import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  locations: Location[] = [
    new Location(1, 'ABCD', 'Location A'),
    new Location(2, 'EFGH', 'Location B'),
    new Location(3, 'IJKL', 'Location C')
  ];

  filteredLocations: Observable<Location[]>;
  location = new FormControl(Validators.required);
  selectedLocation: Location;
  formA: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.filteredLocations = this.initializeLocationFilter();

    this.formA = this.formBuilder.group({
      'location': this.location
    });
  }

  initializeLocationFilter(): Observable<Location[]> {
    return this.location.valueChanges
      .pipe(
        startWith<string | Location>(''),
        map(value => typeof value === 'string' ? value : value.displayName),
        map(name => name ? this.filter(name) : this.locations.slice())
      );
  }

  filter(name: string): Location[] {
    return this.locations.filter(option => option.displayName.toLowerCase().indexOf(name.toLowerCase()) > -1);
  }

  displayLocation(location?: Location): string | undefined {
    return location ? location.displayName : undefined;
  }

  reset(stepper: MatStepper) {
    this.selectedLocation = null;
    this.filteredLocations = this.initializeLocationFilter();
    stepper.reset();
  }
}

class Location {
  id: number;
  name: string;
  description: string;
  get displayName(): string { return `${this.name} - ${this.description}`; }

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}
