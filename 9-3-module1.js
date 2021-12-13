export default function add(n1, n2) {
    return n1 + n2;
}

export function minus(n1, n2) {
    return n1 - n2;
}


//export default로 하면 import 할떄 이름을 자유롭게 할 수 있고 , 한 파일에서 default는 한번 밖에 못쓴다.
//그냥 export 는 import 할떄 이름을 {}를 통해 가져온다.
