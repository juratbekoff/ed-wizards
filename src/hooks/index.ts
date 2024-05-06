import {create} from "zustand";

export type ModalProps = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useMenuSheet = create<ModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));