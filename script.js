const addPlayer = document.querySelector('.addPlayer');
const removePlayer = document.querySelector('.removePlayer');
let numPlayers = document.querySelector('.playerAmount');
let submit = document.querySelector('.submit');
let container = document.querySelector('.container');
let scoreInput = document.querySelector('.scoreInput');
let closeScore = document.querySelector('.closeScore')
// scoreInput.inputMode = 5
// console.log(scoreInput)

const makeCol = (a, b, buttons) => {
    // let columns = [];
    let col = document.createElement('div');
    for (a; a < b; a++) {
        col.classList.add('col');
        col.append(buttons[a]);
    }
    // columns.push(col);
    return col;
}

const makeRow = (ls) => {
    let row = document.createElement('div');
    row.classList.add('row');
    row.append(ls);
    return row;
}


const addForm = () => {
    let modalBody = document.querySelector('.modal-body');
    let form = document.createElement('form');
    let formGroup = document.createElement('div');
    let container = document.createElement('div');
    container.style = "text-align:center;";



    //make calculator

    let buttons = [];
    for (let i = 0; i < 10; i++) {
        let btn = document.createElement('button');
        btn.classList.add('btn');
        btn.classList.add('btn-primary');
        btn.classList.add(`num${i}`);
        btn.style = "margin:5px;";
        btn.textContent = i;
        buttons.push(btn);
        // console.log(btn.textContent)
        btn.addEventListener('click', function () {
            let val = parseInt(scoreInput.textContent);
            switch (val) {
                case 0:
                    scoreInput.textContent = btn.textContent;
                    break;
                default:
                    scoreInput.textContent += btn.textContent;
            }
        })
    }

    let btn1 = document.createElement('button');
    let minus = document.createElement('i');
    btn1.classList.add('btn');
    btn1.classList.add('minus');
    btn1.setAttribute('data-dismiss', 'modal')
    minus.classList.add('fa-solid');
    minus.classList.add('fa-minus');
    btn1.append(minus);
    buttons.unshift(btn1);

    let btn2 = document.createElement('button');
    let plus = document.createElement('i');
    btn2.classList.add('btn');
    btn2.classList.add('plus');
    btn2.setAttribute('data-dismiss', 'modal')
    plus.classList.add('fa-solid');
    plus.classList.add('fa-plus');
    btn2.append(plus);
    buttons.splice(2, 0, btn2);


    let row1 = makeRow(makeCol(3, 6, buttons));
    let row2 = makeRow(makeCol(6, 9, buttons));
    let row3 = makeRow(makeCol(9, 12, buttons));
    let row4 = makeRow(makeCol(0, 3, buttons));


    // row4.append(btn);

    container.append(row1);
    container.append(row2);
    container.append(row3);
    container.append(row4);

    modalBody.append(container);
    // row.push(makeCol(1,4,buttons));

    // let columns = [];
    // columns.push(makeCol(1, 4, buttons));
    // columns.push(makeCol(4, 7, buttons));
    // columns.push(makeCol(7, 10, buttons));
    // columns.push(makeCol(0, 1, buttons));




    // console.log(columns[3].children[0].textContent);
    return buttons;
}
btnList = addForm();
let array = [0];

let num = 1;
addPlayer.addEventListener('click', function () {
    numPlayers.textContent = num += 1;
    array.push(0);
})
removePlayer.addEventListener('click', function () {
    if (num > 1) {
        numPlayers.textContent = num -= 1;
        array.pop;
    }
})

submit.addEventListener('click', function () {
    let num = numPlayers.textContent;
    handleFormSubmit(num, array);
})

const handleFormSubmit = (n, array) => {
    let first = document.querySelector('.first');
    n = parseInt(n);
    first.remove();
    for (let i = 0; i < n; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        let col = document.createElement('div');
        col.classList.add('col-sm');
        let card = document.createElement('div');
        card.classList.add('card');
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        let player = document.createElement('div');
        player.classList.add('card-text');
        player.classList.add('players');
        // player.classList.add(`player${i+1}`);

        let indPlayer = document.createElement('strong');
        indPlayer.classList.add(`player${i + 1}`);
        indPlayer.textContent = `Player ${i + 1}`;
        let add = document.createElement('button');
        add.classList.add('btn');
        add.classList.add('btn-info');
        add.classList.add(`add${i}`);
        add.classList.add('addBtn');
        add.classList.add('modalbtn');
        add.setAttribute('data-target', '#playerModal');
        add.setAttribute('data-toggle', 'modal');
        add.setAttribute('id', 'modal-link');
        add.setAttribute('type', 'button');
        add.textContent = 'Add';
        add.style = "margin-left:50px;";
        let score = document.createElement('strong');
        // score.classList.add(`score${i+1}`);
        // score.textContent = `Score: ${0}`;
        if (array[i] == 0) {
            let scoreNum = document.createElement('span');
            scoreNum.innerHTML = array[i];
            score.textContent = `Score: `;
            score.append(scoreNum);
            scoreNum.classList.add(`score${i}`);
        }else{
            score.innerHTML = array[i];
        };
        score.style = "margin-left:50px;";
        score.classList.add('scoreTxt');
        player.append(indPlayer);
        player.append(add);
        player.append(score);
        cardBody.append(player);
        card.append(cardBody);
        col.append(card);
        row.append(col);
        container.append(row);
    }
    let addBtn = document.querySelectorAll('.addBtn');
    for (let j = 0; j < addBtn.length; j++) {
        addBtn[j].addEventListener('click', function () {
            let modalTitle = document.querySelector(`.player${j + 1}`);
            // console.log(modalTitle)
            let modalTitleEl = document.querySelector(`.modal-title`);
            modalTitleEl.textContent = modalTitle.textContent;
        })
    }
};

// closeScore.addEventListener('click', function(){
// let num = 
// let playerNum = document.querySelector('.modal-title');
// playerNum = playerNum.textContent[playerNum.textContent.length-1];
// // console.log(playerNum);
// let indScore = document.querySelector(`.score${playerNum-1}`);
// indScore.textContent = `Score: ${scoreInput.textContent}`;
// scoreInput.textContent = 0;
// console.log(score.previousElementSibling)
// console.log(score)
// });

let btnPlus = document.querySelector('.plus');
btnPlus.addEventListener('click', function () {
    // console.log(btnPlus.classList);
    let playerNum = document.querySelector('.modal-title');
    playerNum = playerNum.textContent[playerNum.textContent.length - 1];
    let indScore = document.querySelector(`.score${playerNum - 1}`);
    // console.log(indScore);
    let sum = parseInt(indScore.textContent) + parseInt(scoreInput.textContent);
    indScore.textContent = sum;
    scoreInput.textContent = 0;
});

let btnMinus = document.querySelector('.minus');
btnMinus.addEventListener('click', function () {
    // console.log(btnPlus.classList);
    let playerNum = document.querySelector('.modal-title');
    playerNum = playerNum.textContent[playerNum.textContent.length - 1];
    let indScore = document.querySelector(`.score${playerNum - 1}`);
    // console.log(indScore);
    let sum = parseInt(indScore.textContent) - parseInt(scoreInput.textContent);
    indScore.textContent = sum;
    scoreInput.textContent = 0;
});

let save = document.querySelector('.save');
save.addEventListener('click', function () {
    localStorage.clear();
    let rows = document.querySelectorAll('.players');
    // console.log(rows[0].children[0].textContent)
    for (let i = 0; i < rows.length; i++) {
        // let num = 
        localStorage.setItem(`${rows[i].children[0].textContent}`, `${rows[i].children[2].innerHTML}`);
    }
    alert(`Your game with ${rows.length} players has been saved`)
})

let resume = document.querySelector('.resume');
resume.addEventListener('click', function () {
    let num = prompt('Please enter the number of players from previous save');
    let store = [];
    for (let i = 0; i < num; i++) {
        let val = localStorage.getItem(`Player ${i + 1}`);
        store.push(val);
    };
    // console.log(store);
    handleFormSubmit(num, store);
});