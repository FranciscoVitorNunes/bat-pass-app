export default function generatePass(){
    let password: string = ''

    let lenthPass = 8

    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&_+<>?'

    for(let i = 1;i <= lenthPass; i++ ){
        password+= characters.charAt(Math.floor(Math.random() * characters.length)) // chsrtAt - apenas 1 character , floor - inteiros
    }

    return password
}