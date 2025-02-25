let cont = localStorage.getItem('counterValue')?
parseInt(localStorage.getItem('counterValue'), 10) : 0;

const counter = document.getElementById('counter');

function updateCounter() {
    counter.textContent = cont;

    counter.style.color = "darkorange";

    counter.style.animation = "bounce 0.3s ease";

    setTimeout(() => {
        counter.style.animation = "";
        counter.style.color = "";
    }, 300);

    localStorage.setItem("counterValue", count);
}

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");

function createButton(id, text, action) {
    const btn = document.createElement("button");
    btn.id = id;
    btn.innerText = text;
    btn.addEventListener("click", action);
    return btn;
}

const decreaseBtn = createButton("decrease", "decrease", () => {
    cont--;
    updateCounter();
});

const resetBtn = createButton("reset", "reset", () => {
    cont = 0;
    updateCounter();
});

const increaseBtn = createButton("increase", "increase", () => {
    cont++;
    updateCounter();
});

buttonContainer.appendChild(decreaseBtn);
buttonContainer.appendChild(resetBtn);
buttonContainer.appendChild(increaseBtn);

document.querySelector(".container").appendChild(buttonContainer);
updateCounter();

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            count++;
            updateCounter();
            break;
            case "ArrowDown":
                count--;
                updateCounter();
                break;
                case "r":
                    case "R":
                        count = 0;
                        updateCounter();
                        break;
                        default:
                            break;
    }
});