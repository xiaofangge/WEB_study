const MusicDecoratorFactory = (type: string): ClassDecorator => {
    switch (type) {
        case 'Tank':
            return (target: Function) => {
                target.prototype.playMusic = () => {
                    console.log(`${type}: 坦克音乐`)
                }
            }
        case 'Player':
            return (target: Function) => {
                target.prototype.playMusic = () => {
                    console.log(`${type}: 流行音乐`)
                }
            }
        default: 
            return (target: Function) => {
                target.prototype.playMusic = () => {
                    console.log(`${type}: 春庭雪`)
                }
            }
    }
}

@MusicDecoratorFactory('Tank')
class Tank3 {}
(<any>new Tank3()).playMusic();


@MusicDecoratorFactory('Player')
class Player3 {}
(new Player3() as any).playMusic();