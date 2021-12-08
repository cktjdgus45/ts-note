{
    type Position = {
        x: number,
        y: number
    }
    type Direction = 'up' | 'down' | 'left' | 'right';

    let position: Position = { 'x': 0, 'y': 0 };

    const move = (direct: Direction) => {
        switch (direct) {
            case 'up':
                position.y += 1;
                break;
            case 'down':
                position.y -= 1;
                break;
            case 'left':
                position.x -= 1;
                break;
            case 'right':
                position.x += 1;
                break;
            default:
                throw Error('wrong direction!');
        }
    }
    console.log(position); //{x:0,y:0}
    move('up');
    console.log(position);
    move('down');
    console.log(position);
    move('left');
    console.log(position);
    move('right');
    console.log(position);
}