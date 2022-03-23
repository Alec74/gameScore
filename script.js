const addPlayer = document.querySelector('.addPlayer');
const removePlayer = document.querySelector('.removePlayer');
let numPlayers = document.querySelector('.playerAmount');
let submit = document.querySelector('.submit');
let container = document.querySelector('.container');
let scoreInput = document.querySelector('.scoreInput');
let closeScore = document.querySelector('.closeScore')
// let playerNameForm = document.querySelector('.playerName');

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
    btn1.classList.add('btn-danger');
    btn1.classList.add('minus');
    btn1.setAttribute('data-dismiss', 'modal')
    minus.classList.add('fa-solid');
    minus.classList.add('fa-minus');
    btn1.append(minus);
    buttons.unshift(btn1);

    let btn2 = document.createElement('button');
    let plus = document.createElement('i');
    btn2.classList.add('btn');
    btn2.classList.add('btn-success');
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
// let num = 0;
//function to delete all inner html elements
function deleteChild(target) {
    var child = target.lastElementChild;
    while (child) {
        target.removeChild(child);
        child = target.lastElementChild;
    }
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

let form = document.querySelector('.form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    num = numPlayers.textContent;
    handleFormSubmit(num, array);
})

const handleFormSubmit = (n, array, names = []) => {
    // let first = document.querySelector('.first');
    n = parseInt(n);
    // if (first){
    //     first.remove();
    // }
    let container = document.querySelector('.container1');
    deleteChild(container);
    // console.log(container)

    for (let i = 0; i < n; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        let col = document.createElement('div');
        col.classList.add('col-sm');
        let card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('text-center');
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        let player = document.createElement('div');
        player.classList.add('card-text');
        player.classList.add('players');
        // player.classList.add(`player${i+1}`);

        let indPlayer = document.createElement('a');
        // indPlayer.setAttribute('data-target', '#nameModal');
        // indPlayer.setAttribute('data-toggle', 'modal');
        // indPlayer.setAttribute('id', 'modal-link');
        indPlayer.classList.add('aTag');
        // indPlayer.classList.add('modalbtn');
        // indPlayer.classList.add(`player${i + 1}`);
        if (names.length > 0) {
            indPlayer.innerHTML = `<span data-target="#nameModal" data-toggle="modal" id="modal-link" class="indPlayers modalbtn player${i + 1}">${names[i]}</span>`;
        } else {
            indPlayer.innerHTML = `<span data-target="#nameModal" data-toggle="modal" id="modal-link" class="indPlayers modalbtn player${i + 1}">Player ${i + 1}</span>`;
        }

        // indPlayer.href = '#';
        indPlayer.addEventListener('click', function () {
            // console.log(indPlayer.classList);
            let nameTitleEl = document.querySelector(`.name-title`);
            let modalTitle = `${indPlayer.textContent}`;
            nameTitleEl.textContent = modalTitle;
            nameTitleEl.classList.add(`player${i + 1}`);
        });
        let add = document.createElement('button');
        add.classList.add('btn');
        add.classList.add('btn-info');
        add.classList.add(`add${i}`);
        add.classList.add('addBtn');
        add.classList.add('modalbtn');
        add.classList.add(`player${i + 1}`);
        add.setAttribute('data-target', '#playerModal');
        add.setAttribute('data-toggle', 'modal');
        add.setAttribute('id', 'modal-link');
        add.setAttribute('type', 'button');
        add.textContent = 'Add';
        // add.style = "margin-left:50px;";
        add.addEventListener('click', function () {
            let playerNum = document.querySelector('.modal-title');
            playerNum.classList.add(`player${i + 1}`);
        })
        let score = document.createElement('strong');
        // score.classList.add(`score${i+1}`);
        // score.textContent = `Score: ${0}`;
        if (array[i] == 0) {
            let scoreNum = document.createElement('span');
            scoreNum.innerHTML = array[i];
            score.textContent = `Score: `;
            score.append(scoreNum);
            scoreNum.classList.add(`score${i}`);
        } else {
            score.innerHTML = array[i];
        };
        // score.style = "margin-left:50px;";
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

closeScore.addEventListener('click', function (e) {
    e.preventDefault();
    scoreInput.textContent = '0';
})

let clearScore = document.querySelector('.clearScore');
clearScore.addEventListener('click', function (e) {
    e.preventDefault();
    scoreInput.textContent = '0';
})

let btnPlus = document.querySelector('.plus');
btnPlus.addEventListener('click', function () {
    // console.log(btnPlus.classList);
    let playerNum = document.querySelector('.modal-title');
    let rows = document.querySelectorAll('.players');
    for (let i = 0; i < rows.length; i++) {
        if (playerNum.classList.contains(`player${i + 1}`)) {
            // console.log(playerNum.classList.contains(`player${i+1}`));
            playerNum.classList.remove(`player${i + 1}`);
            playerNum = i + 1;
            break;
        }

    }
    // playerNum = playerNum.textContent[playerNum.textContent.length - 1];
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
    let rows = document.querySelectorAll('.players');
    for (let i = 0; i < rows.length; i++) {
        if (playerNum.classList.contains(`player${i + 1}`)) {
            // console.log(playerNum.classList.contains(`player${i+1}`));
            playerNum.classList.remove(`player${i + 1}`);
            playerNum = i + 1;
            break;
        }

    }
    // playerNum = playerNum.textContent[playerNum.textContent.length - 1];
    let indScore = document.querySelector(`.score${playerNum - 1}`);
    // console.log(indScore);
    let sum = parseInt(indScore.textContent) - parseInt(scoreInput.textContent);
    indScore.textContent = sum;
    scoreInput.textContent = 0;
});

let save = document.querySelector('.save');
save.addEventListener('click', function () {
    // console.log(document.querySelectorAll('.players'))
    if (document.querySelectorAll('.players').length > 0) {
        localStorage.clear();
        let rows = document.querySelectorAll('.players');
        // console.log(rows[0].children[0].textContent)
        for (let i = 0; i < rows.length; i++) {
            // let num = 
            localStorage.setItem(`Player ${i + 1}`, `${rows[i].children[2].innerHTML}<@![split]>${rows[i].children[0].textContent}`);
        }
        alert(`Your game with ${rows.length} players has been saved`)
    }
})

let resume = document.querySelector('.resume');
resume.addEventListener('click', function () {
    let num = prompt('Please enter the number of players from previous save');
    if (num <= localStorage.length && num > 0) {
        let store = [];
        let names = [];
        for (let i = 0; i < num; i++) {
            let val = localStorage.getItem(`Player ${i + 1}`);
            // console.log(val);
            let first = val.split('<@![split]>');
            store.push(first[0]);
            names.push(first[1]);
        };
        handleFormSubmit(num, store, names);
    }

});

let restart = document.querySelector('.restart');
restart.addEventListener('click', function () {
    location.reload();
})

// console.log(playerNameForm);
let playerNameSubmit = document.querySelector('.playerNameSubmit');

playerNameSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    let nameTitleEl = document.querySelector(`.name-title`);
    let text = document.querySelector('#playerName');
    if (text.value) {
        let check = document.querySelectorAll('.indPlayers');
        for (let i = 0; i < check.length; i++) {
            // let player = check[i].getAttribute('class');
            if (nameTitleEl.classList.contains(`player${i + 1}`)) {
                nameTitleEl.classList.remove(`player${i + 1}`);
                check[i].textContent = text.value;
                text.value = '';
            }
        }
    }
});

let playerNameClose = document.querySelector('.closeName');
playerNameClose.addEventListener('click', function(){
    let text = document.querySelector('#playerName');
    text.value = '';
})

$('#nameModal').on('shown.bs.modal', function () {
    $('#playerName').focus();
})

