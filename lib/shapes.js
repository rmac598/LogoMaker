class shape {

    constructor(text, textColor, shapeColor) {
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
        this.setshapeColor= shapeColor;
    }

}
class Circle extends shape {
    render() {
        return `circle cs="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}`
    }
}
class Square extends shape{
    render() {
        return `rect x="25" y="25" width="200" height="200" fill="${this.shapeColor}`
    }
}
class Triangle extends shape {
    render() {
        reutrn `polygon height="100%" widht="100%" points="50,150 200,0 200,200 "fill=" ${this.shapeColor}"`
    }
}

module.exports = {Circle, Square, Triangle}