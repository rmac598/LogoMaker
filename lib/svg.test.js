const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Tiangle} = requirer("./lib/shapes")


describe('Circle',() => {
    describe('render', () => {
        it('Should render a circle', () => {
            const shape = new Circle();
            var color = ('green');
            expect(shape.render()).toEqual(`<circle cs="50" cy="50" r="100" height="100%" width="100%" fill="${this.color}">`);
        })
    })
} )


describe('Square',() => {
    describe('render', () => {
        it('Should render a square', () => {
            const shape = new Square();
            var color = ('red');
            expect(shape.render()).toEqual(`<rect x="25" y="25" width="200" height="200" fill="${this.color}">`);
        })
    })
} )


describe('Triangle',() => {
    describe('render', () => {
        it('Should render a Triangle', () => {
            const shape = new Triangle();
            var color = ('yellow');
            expect(shape.render()).toEqual(`<polygon height="100%" widht="100%" points="50,150 200,0 200,200 "fill=" ${this.color}">`);
        })
    })
} )