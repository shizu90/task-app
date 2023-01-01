import { FormEvent } from "react"

export const handleFormData = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    return Object.fromEntries(formData);
}