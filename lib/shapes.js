class Shape {

    constructor(text, textColor, shapeColor, shape) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        
    }
    settext(text){
        this.text = text;
    }
    settextColor(textColor){
        this.textColor= textColor;
    }
    setshapeColor(shapeColor){
        this.shapeColor= shapeColor;
    }

}
class Circle extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <circle cx="50" cy="50" r="100" fill="${this.shapeColor}" />
        <text x="100" y="150" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
}
class Square extends Shape{
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <rect x="25" y="25" width="100" height="100" fill="${this.shapeColor}" />
</svg>`
    }
}
class Triangle extends Shape {
    render() {
        reutrn `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <polygon points="50,150 200,0 200,200" fill="${this.shapeColor}" />
</svg>`
    }
}

module.exports = {Shape, Circle, Square, Triangle}