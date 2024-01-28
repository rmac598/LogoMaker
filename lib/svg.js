class Svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
        
    }
    render(){
        return `<svg version="1.1" xm1ns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;

    }
    setTextElement(text, color) {
        this.textElement =[];

    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()

    }

}


module.export={Svg}