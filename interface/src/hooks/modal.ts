import { useState } from "react"

export interface IModal {
    mode: string
    visible: boolean
}

export function useModal() {
    const [isModalVisible, setIsModalVisible] = useState<IModal>({mode: "", visible: false});

    return {
        isModalVisible,
        setIsModalVisible
    }
}