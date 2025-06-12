
console.log("are you reaching me?")
const myCanvas = document.getElementById("window");
const ctx = myCanvas.getContext("2d");

let time = 0

class Player {

    constructor(x, y, size) {
        this.x = x
        this.y = y
        this.size = size
    }

    set movePlayer(direction) {
        dirs =  [
            {
                code : "up",
                move : [0, 1]
            },
            {
                code : "down",
                move : [0, -1]
            },
            {
                code : "left",
                move : [-1, 0]
            },
            {
                code : "right",
                move : [1, 0]
            },
        ];

        for (const dir of dirs) {
            if (dir.code == direction) {
                this.x += dir.move[0];
                this.y += dir.move[1];
                
                console.log("I moved!");

                break;
            }
        }
    }


}



function run() {
    console.log("dayum");
    ctx.clearRect(0, 0, 300, 150)
    ctx.fillRect(20 + time, 20, 150, 100);
    time += 10
}


setInterval(run, 10);

