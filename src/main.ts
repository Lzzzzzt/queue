import './style.css'

let num = 0;

const QueueHTML = document.querySelector<HTMLDivElement>('#queue')!

let queue: HTMLDivElement[] = [];

const BtnQueuePush = document.querySelector<HTMLButtonElement>('#queue-unshift')!
BtnQueuePush.addEventListener('click', () => {
    queue.unshift(createBlock('queue-elem', num++))
    queue.reverse().forEach(value => {
        let flag = true

        QueueHTML.childNodes.forEach(v => {
            if (v === value) {
                flag = false
            }
        })

        if (flag) {
            value.style.animation = "0.5s ease slideInLeft-enter"
            QueueHTML.appendChild(value)
        }
    })
    queue.reverse()
})

const BtnQueuePop = document.querySelector<HTMLButtonElement>('#queue-pop')!
BtnQueuePop.addEventListener('click', () => {
    let val = queue.pop()
    if (val) {
        disappear(val)
        setTimeout(() => {
            QueueHTML.removeChild<HTMLDivElement>(val!)
        }, 400)
    } else {
        alert('Queue is EMPTY!')
    }
})

function createBlock(className: string, value: number): HTMLDivElement {
    let div = document.createElement('div')
    div.classList.add(className)
    div.innerHTML = `
        <span>${value}</span>
    `
    return div
}


function disappear(elem: HTMLDivElement) {
    elem.style.animation = "0.5s ease slideInRight-leave"
}



