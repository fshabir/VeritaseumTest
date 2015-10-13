var chai = require('chai');
var expect = require('chai').expect;
var id = require('../src/id');

describe('CreatesExpensiveFunction', function(){

    it('Checks whether the Resource Method on NAMSPACE OBJECT', function(){
        var NAMESPACE = id.addNamespaceResource();

        expect(NAMESPACE.resource).to.not.be.undefined;
        expect(NAMESPACE.resource(2).getExpensiveResource().value).to.equal("I'm a very expensive resource associated with ID 2");

    })


})
