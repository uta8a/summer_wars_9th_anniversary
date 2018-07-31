import * as util from './lib/util'

const loading = document.querySelector('#scene-0 > .end > div:nth-child(5)')

loading.addEventListener('animationend', () => {
    util.finScene_1()
})