const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require("./shapes.js")


describe('Circle',() => {
    test('render', () => {
        it('Should render a circle', () => {
            const shape = new Circle();
            var color = ('green');
            shape.setshapeColor(color);
            expect(shape.render()).toEqual(` <circle cx="50%" cy="50%" r=100 heigth=100% width=100% fill="${color}">`)
        })
    })
} )


describe('Square',() => {
    test('render', () => {
        it('Should render a square', () => {
            const shape = new Square();
            var color = ('red');
            shape.setshapeColor(color);
            expect(shape.render()).toEqual(`<rect x="25" y="25" width="200" height="200" fill="${color}">`);
        })
    })
} )


describe('Triangle',() => {
    test('render', () => {
        it('Should render a Triangle', () => {
            const shape = new Triangle();
            var color = ('yellow');
            shape.setshapeColor(color);
            expect(shape.render()).toEqual(`<polygon height="100%" widht="100%" points="50,150 200,0 200,200 "fill=" ${color}">`);
        })
    })
} )