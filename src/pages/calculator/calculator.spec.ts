import { CalculatorPage } from "./calculator";
import { TestBed, async } from "@angular/core/testing";
import { IonicModule, Platform, NavController, NavParams } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock, NavParamsMock } from "ionic-mocks";

describe("CalculatorPage", () => {
  let calculatorpage, fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalculatorPage
      ],
      imports: [IonicModule.forRoot(CalculatorPage)],
      providers: [
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
        { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() },
        { provide: NavParams, useFactory: () => NavParamsMock.instance() }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorPage);
    calculatorpage = fixture.componentInstance;
  });

  it("should create the calculator page", () => {
    expect(calculatorpage).toBeTruthy();
    expect(calculatorpage instanceof CalculatorPage).toEqual(true);
  });

  it('should have calculateBMI function', () => {
    spyOn(calculatorpage, 'calculateBMI'); 

    calculatorpage.calculateBMI();

    expect(calculatorpage.calculateBMI).toHaveBeenCalled(); 
  });

  it('should have setBMIMessage function', () => {
    spyOn(calculatorpage, 'setBMIMessage'); 

    calculatorpage.setBMIMessage();

    expect(calculatorpage.setBMIMessage).toHaveBeenCalled(); 
  });

  it('assess should return bmi value of 23.88 when weight is 65 and height is 165', () => {
    calculatorpage.weight = 65;
    calculatorpage.height = 165;
    calculatorpage.calculateBMI();

    expect(calculatorpage.bmiValue).toEqual(23.88);
  });

  it('assess should return overweight if bmi value is greater than 25 and less than 30', () => {
    calculatorpage.bmiValue = 25.5
    calculatorpage.setBMIMessage();

    expect(calculatorpage.bmiMessage).toEqual('Overweight');
  });

  it('assess should return Normal when weight is 65 and height is 165', () => {
    calculatorpage.weight = 65;
    calculatorpage.height = 165;
    calculatorpage.calculateBMI();

    expect(calculatorpage.bmiMessage).toEqual('Normal');
  });

});