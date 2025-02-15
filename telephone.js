class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = [];
    }

    addPhoneNumber(number) {
        this.phoneNumbers.add(number);
    }

    removePhoneNumber(number) {
        this.phoneNumbers.delete(number);
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(number) {
        this.observers.forEach(observer => observer.update(number));
    }

    dialPhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            this.notifyObservers(number);
        } else {
            console.log(`Error: ${number} has not been added.`);
        }
    }
}

// Observer Classes
class PrintObserver {
    update(number) {
        console.log(`Dialing: ${number}`);
    }
}

class DialObserver {
    update(number) {
        console.log(`Now Dialling ${number}`);
    }
}
