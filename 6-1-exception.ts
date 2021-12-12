//JAVA : Exception
//JavaScript : Error

//Error(Exception) Handling : try-> catch ->finally

function readFile(fileName: string): string {
    if (fileName === 'not exist!') {
        throw new Error(`file not exist ${fileName}`)
    }
    return 'file contents';
}

function closeFile(fileName: string) {
    console.log('Finally!')
}

const fileName = 'not exist!';
try {
    console.log(readFile(fileName));
} catch (error) { //catch 덕분에 에러가 있더라도 죽지않는다.
    console.log('catched!')
} finally { //finally는 항상 실행된다. error나더라도.
    closeFile(fileName);
}
console.log('even though error exist,program still working !')