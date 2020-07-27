let main = document.querySelector("main")


class traveler {
    constructor(name, food) {
        this.name = name
        this.food = 1
        this.isHealthy = true

    }

    hunt() {
        this.food += 2
    }

    eat() {

        if (this.food === 0) {

            return this.isHealthy = false
        } else {
            this.food -= 1

        }
        console.log(this.eat)
    }

}
class Doctor extends traveler {
    construction(name, food, heal) {
        super(name, food)
        this.heal =
            this.isHealthy = true

    }
}
class Hunter extends traveler {
    construction(name, food, hunt, eat, giveFood) {
        super(name, food)
        this.food = 2
        this.hunt =
            this.eat =
            giveFood(traveler, numOfFoodUnits)
    }
}

main.append();

let button1Element = document.createElement('button1')
let button2Element = document.createElement("button2")
let button3Element = document.createElement("button3")
let inputElement = document.createElement('input')
document.querySelector("button1")
document.querySelector("buttons2")
document.querySelector("button3")
document.querySelector("input")

main.appendChild('button1')
main.appendChild('button2')
main.appendChild('button3')
main.appendChild('input')

button1Name = feed
button2Name = add
button3Name =
    class Wagon {
        constructor(capacity) {
            this.capacity = capacity
            this.passengers = []

        }

        getAvailableSeatCount() {
            return this.capacity - this.passengers.length

        }

        join(traveler) {
            if (this.getAvailableSeatCount() >= 1) {
                this.passengers.push(traveler)
            }
        }

        shouldQuarantine() {
            for (let index = 0; index < this.passengers.length; index++) {
                var passenger = this.passengers[index]
                if (passenger.isHealthy === false) {
                    return true
                }

            }
            return false
        }
        totalFood() {
            for (let index = 0; index + this.food; index++) {
                var food = this.food + hunt[index]

                return this.totalFood
            }

        }

    }
