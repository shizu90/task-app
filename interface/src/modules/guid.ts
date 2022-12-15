export function generateGuid(len: number): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let guid = ""; 
    let random;
    for(let i = 0; i < len; i++) {
        random = Math.floor(Math.random() * ((chars.length - 1) - 0 + 1)) + 0;
        guid += chars[random];
    }
    
    return guid
}