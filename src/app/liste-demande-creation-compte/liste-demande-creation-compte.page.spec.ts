import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeDemandeCreationComptePage } from './liste-demande-creation-compte.page';

describe('ListeDemandeCreationComptePage', () => {
  let component: ListeDemandeCreationComptePage;
  let fixture: ComponentFixture<ListeDemandeCreationComptePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDemandeCreationComptePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeDemandeCreationComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
