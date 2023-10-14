class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute, bookingFee) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
      this.bookingFee = bookingFee;
    }
  
    calculatePrice(distanceMiles, timeMinutes) {
      
      const fare = this.baseFare + (distanceMiles * this.costPerMile) + (timeMinutes * this.costPerMinute);
      return fare + this.bookingFee;
    }
  
    setBaseFare(baseFare) {
      this.baseFare = baseFare;
    }
  
    setCostPerMile(costPerMile) {
      this.costPerMile = costPerMile;
    }
  
    setCostPerMinute(costPerMinute) {
      this.costPerMinute = costPerMinute;
    }
  
    setBookingFee(bookingFee) {
      this.bookingFee = bookingFee;
    }
  }
  
  
  const calculator = new UberPriceCalculator(5, 1.5, 0.2, 2.5);
  const distance = 10; 
  const time = 20; 
  
  const price = calculator.calculatePrice(distance, time);
  console.log(`Uber Price: $${price}`);
  