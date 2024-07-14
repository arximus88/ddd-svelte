class Miner {
    constructor(name) {
        this.name = name;
        this.tool = new Tool();
        this.energy = 100;
        this.happiness = 100;
    }

    dig() {
        // Implement the logic of digging here
    }

    rest() {
        // Implement the logic of resting here
    }

    work() {
        // Implement the logic of working here
    }
}

class Tool {
    constructor() {
        this.level = 1;
    }

    upgrade() {
        // Implement the logic of upgrading the tool here
    }
}

class Gem {
    constructor(type) {
        this.type = type;
        this.value = this.set_value();
    }

    set_value() {
        // Implement the logic of setting the value of the gem here
    }
}

class Mine {
    constructor(depth) {
        this.depth = depth;
    }

    find_gem() {
        // Implement the logic of finding a gem here
    }
}

class Lift {
    constructor() {
        this.speed = 1;
    }

    upgrade() {
        // Implement the logic of upgrading the lift here
    }
}

class Building {
    constructor(type) {
        this.type = type;
        this.level = 1;
    }

    upgrade() {
        // Implement the logic of upgrading the building here
    }
}
