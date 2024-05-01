--------------------------------------------------------------------------------------------------------------------------------------
                                               Write a class to calculate uber price
--------------------------------------------------------------------------------------------------------------------------------------
//input
class UberPriceCalculator {

    static BASE_FARE = 5.0;
    
    static PER_MILE_RATE = 7.5;
    
    static PER_MINUTE_RATE = 0.3;
    
    constructor(distance, duration) {
    
    this.distance = distance;
    
    this.duration = duration;
    
    }
    
    calculateFare() {
    
    const distanceFare = this.distance * UberPriceCalculator.PER_MILE_RATE;
    
    const timeFare = this.duration * UberPriceCalculator.PER_MINUTE_RATE;
    
    const totalFare = UberPriceCalculator.BASE_FARE + distanceFare + timeFare;
    
    return totalFare;
    
    }
    
    getDistance() {
    
    return this.distance;
    
    }
    
    setDistance(distance) {
    
    this.distance = distance;
    
    }
    
    getDuration() {
    
    return this.duration;
    
    }
    
    setDuration(duration) {
    
    this.duration = duration;
    
    }
    
    toString() {
    
    return `UberPriceCalculator[distance=${this.distance.toFixed(2)} miles, duration=${this.duration} minutes]`;
    
    }
    
    }
    
    const calculator = new UberPriceCalculator(6.4, 20);
    
    console.log(calculator.toString());
    
    const fare = calculator.calculateFare();
    
    console.log(`Total Fare: $${fare.toFixed(2)}`);
--------------------------------------------------------------------------------------------------------------------------------------
//output	
UberPriceCalculator[distance=6.40 miles, duration=20 minutes]
Total Fare: $59.00
--------------------------------------------------------------------------------------------------------------------------------------