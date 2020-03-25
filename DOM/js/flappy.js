function newElement(tagName, className) {
    const element = document.createElement(tagName)
    element.className = className
    return element
}

function Obstacle(reverse = false) {
    this.element = newElement('div', 'div_obstacle')

    const body = newElement('div', 'div_body_obstacle')
    const border = newElement('div', 'div_border_obstacle')
    this.element.appendChild(reverse ? body : border)
    this.element.appendChild(reverse ? border : body)

    this.setHeight = height => body.style.height = `${height}px`
}   

function PairObstacle(gameHeight, opening, x) {
    this.element = newElement('div', 'div_pair_obstacle')

    this.superior = new Obstacle(true)
    this.inferior = new Obstacle(false)

    this.element.appendChild(this.superior.element)
    this.element.appendChild(this.inferior.element)

    this.raflleOpening = () => {
        const superiorHeight = Math.random() * (gameHeight - opening)
        const inferiorHeight = gameHeight - opening - superiorHeight
        this.superior.setHeight(superiorHeight)
        this.inferior.setHeight(inferiorHeight)
    }

    this.getX = () => parseInt(this.element.style.left.split('px')[0])
    this.setX = x => this.element.style.left = `${x}px`
    this.getWidth = () => this.element.clientWidth

    this.raflleOpening()
    this.setX(x)
} 

function Obstacles(gameHeight, gameWidth, opening, spaceBetweenn, notifyPoint) {
    this.pairs = [
        new PairObstacle(gameHeight, opening, gameWidth),
        new PairObstacle(gameHeight, opening, gameWidth + spaceBetweenn),
        new PairObstacle(gameHeight, opening, gameWidth + spaceBetweenn * 2),
        new PairObstacle(gameHeight, opening, gameWidth + spaceBetweenn * 3)
    ]

    const pixelDisplacement = 3
    this.animate = () => {
        this.pairs.forEach(pair => {
            pair.setX(pair.getX() - pixelDisplacement)

            // when the obstacle get out of the screen game
            if (pair.getX() < -pair.getWidth()) {
                pair.setX(pair.getX() + spaceBetweenn * this.pairs.length)
                pair.raflleOpening()
            }

            const middle = gameWidth / 2
            const atMiddle = pair.getX() + pixelDisplacement >= middle && pair.getX() < middle
            atMiddle && notifyPoint()
        })
    }
}

function Bird(gameHeight) {
    let flying = false

    this.element = newElement('img', 'img_bird')
    this.element.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.element.style.bottom.split('px')[0])
    this.setY = y => this.element.style.bottom = `${y}px`

    window.onkeydown = event => {
        if(event.key == 'ArrowUp') {
            flying = true
        }
    }
    window.onkeyup = event => flying = false

    this.animate = () => {
        const newY = this.getY() + (flying ? 8 : -5)
        const maxHeight = gameHeight - this.element.clientHeight

        if (newY <= 0) {
            this.setY(0)
        } else if (newY >= maxHeight) {
            this.setY(maxHeight)
        } else {
            this.setY(newY)
        }
    }

    this.setY(gameHeight / 2)
}

function Progress() {
    this.element = newElement('span', 'span_progress')
    this.updateScore = score => {
        this.element.innerHTML = score
    }
    this.updateScore(0)
}

function areOverLaid(elementA, elementB) {
    const rectA = elementA.getBoundingClientRect()
    const rectB = elementB.getBoundingClientRect()

    const horizontal = rectA.left + rectA.width >= rectB.left 
                    && rectB.left + rectB.width >= rectA.left
    const vertical = rectA.top + rectA.height >= rectB.top
                  && rectB.top + rectB.height >= rectA.top

    return horizontal && vertical
}

function collided(bird, obstacles) {
    let collided = false
    obstacles.pairs.forEach(pair => {
        if(!collided) {
            const superior = pair.superior.element
            const inferior = pair.inferior.element
            collided = areOverLaid(bird.element, superior)
                    || areOverLaid(bird.element, inferior)
        }
    })
    return collided
}

function reflesh() {
    window.location.reload()
}

function Menu() {
    const body = document.querySelector('body')
    this.element = newElement('div', 'div_menu')
    
    this.reflesh = newElement('a', 'a_reflesh')
    this.reflesh.innerHTML = 'Restart'
    this.reflesh.onclick = reflesh
    this.element.appendChild(this.reflesh)

    const middle = body.style.clientWidth / 2
    this.element.style.right = `${middle - ( this.element.style.clientWidth / 2 )}px`

    body.insertBefore(this.element, body.childNodes[0])
}

function FlappyBird() {
    const menu = new Menu()
    
    let score = 0
    
    const gameArea = document.querySelector('[wm-flappy]')
    const gameHeight = gameArea.clientHeight
    const gameWidth = gameArea.clientWidth
    
    const progress = new Progress()
    const obstacles = new Obstacles(gameHeight, gameWidth, 200, 400,
        () => {
            progress.updateScore(++score)
        })
        const bird = new Bird(gameHeight)
        
        gameArea.appendChild(progress.element)
        gameArea.appendChild(bird.element)
        obstacles.pairs.forEach(pair => gameArea.appendChild(pair.element))
        
        this.start = () => {
            // Game loop
            const timer = setInterval(() => {
                obstacles.animate()
                bird.animate()
                
                if(collided(bird, obstacles) || (menu.paused) ) {
                    clearInterval(timer)
                }
            }, 20)
        }
    }
    
    new FlappyBird().start()