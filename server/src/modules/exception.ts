export function exceptionObject(message: string, code: number) {
    return {
        status: code,
        timestamp: Date.now(),
        message: message
    }
}