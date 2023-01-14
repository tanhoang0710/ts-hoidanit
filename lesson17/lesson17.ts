function handleException (errorMessage: string): never {
    throw Error(errorMessage)
}

function runInfinity (): void {
    while(true) {
        console.log('running...')
    }
}

const b = handleException('just a test error')
console.log(b) // never ko trả ra gì, kể cả undefined

const a = runInfinity()
console.log(a) // void trả ra undefined