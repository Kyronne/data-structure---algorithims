class Cookie {
    constructor(color) {
        this.color = color
    }
    getColor() {
        return this.color
    }
    setColor(color) {
        this.color = color
    }
}

let cookieOne = new Cookie('green')

console.log(cookieOne.setColor('yellow'))
console.log(cookieOne.getColor())
