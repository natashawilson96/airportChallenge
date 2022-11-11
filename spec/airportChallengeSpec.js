describe('Airport', function(){
    let airport;
    
    describe('contructs airport', function(){
        it("returns and empty array", function(){
            let airport = new Airport(3)
            expect(airport._capacity).toEqual(3)
            expect(airport._planes).toEqual([])
        });
            
    });

    describe('spyOn() Demo. isStormy to test land function', function(){
        it('isStormy should be false and return true for land', function(){
            let airport = new Airport(3);
            let landSpy = spyOn(airport, 'isStormy').and.returnValue(false);
            let result = airport.land('Air force one')
            console.log(result);
            expect(landSpy).toHaveBeenCalled();
            expect(landSpy).toHaveBeenCalledTimes(1);
            expect(result).toBe(true);
        });
    });

    describe('spyOn() Demo. isStormy', function(){
        it('should be true', function(){
            let airport = new Airport(3);
            let landSpy = spyOn(airport, 'isStormy').and.returnValue(true);
            let result = airport.land('Air force one')
            console.log(result);
            expect(landSpy).toHaveBeenCalled();
            expect(landSpy).toHaveBeenCalledTimes(1);
            expect(result).toBe(false);
        });
    });

    describe('spyOn() Demo. isStormy to test takeOff function', function(){
        it('should be false and return true for takeOff', function(){
            let airport = new Airport(3);
            let takeOffSpy = spyOn(airport, 'isStormy').and.returnValue(false);
            airport.land('Air force one')
            let result = airport.takeOff('Air force one')
            console.log(result);
            expect(takeOffSpy).toHaveBeenCalled();
            expect(takeOffSpy).toHaveBeenCalledTimes(2);
            expect(result).toBe(true);
        });
    });

    describe('spyOn() Demo. isStormy to test takeOff function', function(){
        it('should be true and return false for takeOff', function(){
            let airport = new Airport(3);
            let takeOffSpy = spyOn(airport, 'isStormy').and.returnValue(true);
            airport.land('Air force one')
            let result = airport.takeOff('Air force one')
            console.log(result);
            expect(takeOffSpy).toHaveBeenCalled();
            expect(takeOffSpy).toHaveBeenCalledTimes(1);
            expect(result).toBe(false);
        });
    });
    

    
    
    
    
    
    
    
    
    

});