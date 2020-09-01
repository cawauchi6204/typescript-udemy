function echo(message:string): string | null {
    return message;
}

let implicitAny;
implicitAny = 'implicitAny'

let nullableMessage: string | null = echo('hi')
let undefinedableMessage: string | undefined = undefined
let onlyNull:null = null
let onlyUndefined: undefined = undefined
// 下記はnullの場合falseになるのでnullチェックとしてif文を使う
if (nullableMessage) {
    nullableMessage.toUpperCase()
}
const newFunction = echo.call(null,'hi')
