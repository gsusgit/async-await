
const usersDatabase = [
    {
        email: 'me@example.com',
        password: '12345678',
        name: 'John Doe'
    },
    {
        email: 'you@example.com',
        password: '12345678',
        name: 'John Smith'
    }
]

function logIn(email, password) {
    console.log('Logging in...')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < usersDatabase.length; i++) {
                if (usersDatabase[i].email === email) {
                    if (usersDatabase[i].password === password) {
                        resolve(email)
                    } else {
                        reject('Not a valid email or password')
                    }
                }
            }
        }, 1500)
    })
}

function getUserInfo(email) {
    console.log(`Connected! Getting info of ${email}`)
    let name = ''
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < usersDatabase.length; i++) {
                if (usersDatabase[i].email === email) {
                    name = usersDatabase[i].name;
                }
            }
            if (name !== '') {
                resolve(name)
            } else {
                reject(`The user with the email ${email} doesn't exists in the database`)
            }
        }, 1500)
    })
}

function sayHi(name) {
    console.log(`Hi ${name}!`)
}

function exitApp() {
    setTimeout(() => {
        console.log(`Exiting App...`)
    }, 1500)
}

async function displayUser() {
    const email = await logIn('me@example.com', '12345678')
    const name = await getUserInfo(email)
    await sayHi(name)
    await exitApp()
}

displayUser()
