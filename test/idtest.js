var chai = require('chai');
var expect = require('chai').expect;
var id = require('../src/id');

describe('CreatesExpensiveFunction', function(){

    it('Checks whether the Resource Method on NAMSPACE OBJECT', function(){
        var NAMESPACE = id.addNamespaceResource();

        expect(NAMESPACE.resource).to.not.be.undefined;
        expect(NAMESPACE.resource(2).getExpensiveResource().value).to.equal("I'm a very expensive resource associated with ID 2");
        expect(NAMESPACE.resource(3).getExpensiveResource().value).to.equal("I'm a very expensive resource associated with ID 3");
        expect(NAMESPACE.resource(4).getExpensiveResource().value).to.equal("I'm a very expensive resource associated with ID 4");
        NAMESPACE.resource(3).close();
        expect(NAMESPACE.resource.ids[3]).to.be.undefined;
        expect(NAMESPACE.resource(4).getId()).to.be.equal(4);

    })

})
