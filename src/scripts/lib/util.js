const root = document.querySelector('#root')
const scene_0 = document.querySelector('#scene-0')
const scene_1 = document.querySelector('#scene-1')
const scene_2 = document.querySelector('#scene-2')
const scene_3 = document.querySelector('#scene-3')
const scene_4 = document.querySelector('#scene-4')
const scene_5 = document.querySelector('#scene-5')
const scene_6 = document.querySelector('#scene-6')
const scene_7 = document.querySelector('#scene-7')
const scene_8 = document.querySelector('#scene-8')
const scene_9 = document.querySelector('#scene-9')
const scene_10 = document.querySelector('#scene-10')




export const finScene_1 = () => {
    root.removeChild(scene_0)
    scene_1.setAttribute('data-state', 'start')

    document.querySelector('#scene-1 > .end')
        .addEventListener('animationend', () => {
            finScene_2()
        })
}

export const finScene_2 = () => {
    root.removeChild(scene_1)
    scene_2.setAttribute('data-state', 'start')

    document.querySelector('#scene-2 > .end > div:nth-child(7)')
        .addEventListener('animationend', () => {
            finScene_3()
        })
}

export const finScene_3 = () => {
    root.removeChild(scene_2)
    scene_3.setAttribute('data-state', 'start')
    let removed = true
    document.querySelector('#scene-3 > .screen-1 > div:nth-child(4)')
        .addEventListener('animationend', () => {
            if (removed) {
                finScene_4()
                removed = false
            }
        })
}

export const finScene_4 = () => {
    root.removeChild(scene_3)
    scene_4.setAttribute('data-state', 'start')

    document.querySelector('#scene-4 > .curtain-3 > div:nth-child(2)')
        .addEventListener('animationend', () => {
            finScene_5()
        })
}

export const finScene_5 = () => {
    root.removeChild(scene_4)
    scene_5.setAttribute('data-state', 'start')

    document.querySelector('#scene-5 > .dummy')
        .addEventListener('animationend', () => {
            finScene_6()
        })
}

export const finScene_6 = () => {
    root.removeChild(scene_5)
    scene_6.setAttribute('data-state', 'start')

    document.querySelector('#scene-6 > .end > div:nth-child(3)')
        .addEventListener('animationend', () => {
            finScene_7()
        })
}

export const finScene_7 = () => {
    root.removeChild(scene_6)
    scene_7.setAttribute('data-state', 'start')

    document.querySelector('#scene-7 > .end > .low')
    .addEventListener('animationend', () => {
        finScene_8()
    })
}

export const finScene_8 = () => {
    root.removeChild(scene_7)
    scene_8.setAttribute('data-state', 'start')

    document.querySelector('#scene-8 > .rain > div:nth-child(3)')
    .addEventListener('animationend', () => {
        finScene_9()
    })
}

export const finScene_9 = () => {
    root.removeChild(scene_8)
    scene_9.setAttribute('data-state', 'start')

    document.querySelector('#scene-9 > .end > div:nth-child(5)')
    .addEventListener('animationend', () => {
        finScene_10()
    })
}

export const finScene_10 = () => {
    root.removeChild(scene_9)
    scene_10.setAttribute('data-state', 'start')
    document.querySelector('#scene-10 > .end')
    .addEventListener('animationend', () => {
        root.removeChild(scene_10)
    })
}