require('./timeline.less'); 


export function renderTimeline(){
const workIterations = document.getElementById('voter__vote_work-iteration');
const workingTime = document.getElementById('voter__vote_work-time');
const shortBreakTime = document.getElementById('voter__vote_short-break');
const longBreakTime = document.getElementById('voter__vote_long-break');
const timelineItems = document.querySelector('.timeline__items');
const workingItem = document.querySelector('.timeline__work');
const shortBreakItem = document.querySelector('.timeline__short-break');
const longBreakItem = document.querySelector('.timeline__long-break');
const timeLineScale = document.querySelector('.timeline__scale');
const coefficient = 4;
const time = document.querySelector('.timeline__scale');


function Voter(options) {
    let elem = options.elem;
    let step = options.step;
    let min = options.min;
    let max = options.max;
    let voteElem = elem.querySelector('.voter__vote');

    elem.onclick = function(event) {
        if(event.target.closest('.voter__minus')) {
            voteDecrease();
        }
        else if(event.target.closest('.voter__plus')) {
            voteIncrease();
        }
    }

    elem.onmousedown = function() {
        return false;
    };

    function voteDecrease() {
        if(+voteElem.innerHTML < step) return;
        if(+voteElem.innerHTML <= min) return;

        voteElem.innerHTML = parseInt(voteElem.innerHTML, 10) - step;
        redraw();
    }

    function voteIncrease() {
        if(+voteElem.innerHTML >= max) return;
        voteElem.innerHTML = parseInt(voteElem.innerHTML, 10) + step;
        redraw();
    }
}

function getTotalTime(onlyAfterLongBreak) {
    let iterations = +workIterations.innerText;
    let time = +workingTime.innerText * iterations + +shortBreakTime.innerText *(iterations-1);

    if(!onlyAfterLongBreak) {
        time *=2;
    }

    time += +longBreakTime.innerText;
    return time;
}

function convertToHoursAndMins(time) {
    let hours = parseInt(time / 60, 10);
    let minutes = time % 60;

    let result = '';
    if(hours > 0) {
        result += hours + 'h ';
    }
    if(minutes > 0) {
        result += minutes + 'm';
    }

    return result;
}

let WorkingTimeLine = function() {
    this.start = document.createElement("div");
    this.start.className = 'timeline__total';
    this.start.innerHTML = '0h';
    this.start.style.left = '-54px';

    this.afterLongBreak = document.createElement("div");
    this.afterLongBreak.className = 'timeline__total';

    this.end = document.createElement("div");
    this.end.className = 'timeline__total';

    this.updateTime = function() {
        this.afterLongBreak.innerHTML = 'First cycle: ' + convertToHoursAndMins(getTotalTime(true));
        this.end.innerHTML = convertToHoursAndMins(getTotalTime(false));
    }
}

const workingTotalTime = new WorkingTimeLine();


function redraw() {
    workingItem.style.width = +workingTime.innerText * coefficient + '%';
    shortBreakItem.style.width = +shortBreakTime.innerText * coefficient + '%';
    longBreakItem.style.width = +longBreakTime.innerText * coefficient + '%';

    timelineItems.innerHTML = "";
    let iterations = +workIterations.innerText;
    let drawPart = function() {
        for(let i=0; i<iterations; i++) {
            timelineItems.insertAdjacentHTML('beforeend', workingItem.outerHTML);
            if(i < iterations-1) {
                timelineItems.insertAdjacentHTML('beforeend', shortBreakItem.outerHTML);
            }
        }
    };

    workingTotalTime.updateTime();

    drawPart();
    timelineItems.firstChild.innerHTML = '';
    timelineItems.firstChild.insertAdjacentHTML('afterbegin', workingTotalTime.start.outerHTML);
    longBreakItem.innerHTML = '';
    longBreakItem.insertAdjacentHTML('beforeend', workingTotalTime.afterLongBreak.outerHTML);
    timelineItems.insertAdjacentHTML('beforeend', longBreakItem.outerHTML);

    drawPart();
    timelineItems.lastChild.innerHTML = '';
    timelineItems.lastChild.insertAdjacentHTML('beforeend', workingTotalTime.end.outerHTML);
    timeLineScale.innerHTML = '';
    let totalTime = getTotalTime(false);

    let halfPartsCount = function() {
        return parseInt(totalTime / 30, 10);
    }

    let oneMinProportion = 100 / totalTime;
    let halfHourSize = 30 * oneMinProportion + '%';

    for(let i=0; i<halfPartsCount(); i++) {
        let item = document.createElement("div");
        item.className = 'timeline__scale-item';
        item.style.left = 30 * oneMinProportion * i + '%';
        item.style.width = halfHourSize;
        item.innerHTML = '0h';
        item.style.right = '0px';
        item.innerText = convertToHoursAndMins((i+1)*30);
        timeLineScale.insertAdjacentHTML('beforeend', item.outerHTML);
    }
}

redraw();

let voterWorkTime = new Voter({ elem: document.getElementById('voter_work-time'), step: 5, min: 15, max: 25 });
let voterWorkIteration = new Voter({ elem: document.getElementById('voter_work-iteration'), step: 1, min: 2, max: 5 });
let voterShortBreak = new Voter({ elem: document.getElementById('voter_short-break'), step: 1, min: 3, max: 5 });
let voterLongBreak = new Voter({ elem: document.getElementById('voter_long-break'), step: 5, min: 15, max: 30 });


let template = require('./timeline.hbs');
let main = document.querySelector(".main");
// main.insertAdjacentHTML("beforeend", template());
}
