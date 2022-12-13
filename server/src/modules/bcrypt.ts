import bcrypt from "bcrypt";

export async function encrypt(str: string): Promise<string> {
    return await bcrypt.hash(str, 15);
}

export async function compare(strToCompare: string, encryptedString: string): Promise<boolean> {
    return await bcrypt.compare(strToCompare, encryptedString);
}