window.audio_plays = 0

const audio = new Audio('clang.m4a')
const shovel =  document.querySelector('#shovel')

shovel
    .addEventListener('click', () => {
        shovel.classList.add('hitting')
        setTimeout(() => {
            audio.play()
            setTimeout(() => {
                shovel.classList.remove('hitting')
            }, 200)
        }, 750)

    })

