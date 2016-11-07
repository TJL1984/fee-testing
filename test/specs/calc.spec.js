(function() {
    'use strict';

    var expect=chai.expect;

    describe('my calc', function() {
        it('should know that one equals one', function() {
            expect(1).to.equal(1);
            // TODO: Your tests go here!
        });

        it('should calculate a sum', function() {
            console.log()
            expect(window.calc.sum).to.be.a('function')
        });

        describe('factorial', function() {

            it('should have a sum of 17', function() {
                var result = window.hello.sum();
                expect(result).to.equal('17')
            })
        });

    });


})();
