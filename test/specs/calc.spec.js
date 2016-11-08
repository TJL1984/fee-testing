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


        it('Testing an Array', function() {
            it('Gets result of the added numbers inside array.', function() {
                var result = window.calc.sum(3,5,9);
                expect(result).to.equal('17');
            });
        });

    });


})();
