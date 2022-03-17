const addPlayer = document.querySelector('.addPlayer');
const removePlayer = document.querySelector('.removePlayer');
let numPlayers = document.querySelector('.playerAmount');
let submit = document.querySelector('.submit');
let container = document.querySelector('.container');

const makeCol = (a, b, buttons) => {
    // let columns = [];
    let col = document.createElement('div');
    for (a; a < b; a++){
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
    container.style= "text-align:center;";
    
    
    
    //make calculator
    
    let buttons = [];
    for (let i = 0; i < 10; i++){
        let btn = document.createElement('button');
        btn.classList.add('btn');
        btn.classList.add('btn-primary');
        btn.style = "margin-left:5px;margin-top:5px";
        btn.textContent = i;
        buttons.push(btn);
        // console.log(btn.textContent)
    }


    let row1 = makeRow(makeCol(1,4,buttons));
    let row2 = makeRow(makeCol(4, 7, buttons));
    let row3 = makeRow(makeCol(7, 10, buttons));
    let row4 = makeRow(makeCol(0, 1, buttons));

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
}
addForm();


let num = 1;
addPlayer.addEventListener('click', function () {
    numPlayers.textContent = num += 1;
})
removePlayer.addEventListener('click', function () {
    if (num > 1) {
        numPlayers.textContent = num -= 1;
    }
})

submit.addEventListener('click', function () {
    let num = numPlayers.textContent;
    handleFormSubmit(num);
})

const handleFormSubmit = (n) => {
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
        // player.classList.add(`player${i+1}`);
        
        let indPlayer = document.createElement('strong');
        indPlayer.classList.add(`player${i+1}`);
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
        score.classList.add(`score${i+1}`);
        score.textContent = `Score: ${0}`;
        score.style = "margin-left:50px;";
        score.classList.add(`score${i}`);
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
    for (let j = 0; j < addBtn.length; j++){
        addBtn[j].addEventListener('click', function () {
            let modalTitle = document.querySelector(`.player${j+1}`);
            console.log(modalTitle)
            let modalTitleEl = document.querySelector(`.modal-title`);
            modalTitleEl.textContent = modalTitle.textContent;
        })
    }
};

