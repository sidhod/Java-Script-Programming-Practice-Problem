//Flip Coin problem till either Heads or Tails wins 11 times.
let head = 0;
let tail = 0;
while (-1) {

    flipcoin = Math.floor(Math.random() * 2) + 1;
    if (flipcoin == 1) {
        head = head + 1;
        console.log("Heads-" + head);
        if (head == 11) {
            console.log("Heads win 11 Times");
            break;
        }

    }
    else {
        if (flipcoin == 2) {
            tail = tail + 1;
            console.log("tails-" + tail);
            if (tail == 11)
                then
            console.log("Tails win 11 Times");
            break;
        }

        else
            console.log("invalid");

    }
}