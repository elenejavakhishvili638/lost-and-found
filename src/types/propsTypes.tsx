// import { Error } from "./errorTypes"
import { Items } from "./itemsTypes"

export type inputProps = {
    title: string
    type: string
    className: string
    name: string
    value: string
    onChanges: (event: React.ChangeEvent<HTMLInputElement>) => void
    error: string | undefined
}

export type textareaProps = {
    title: string
    rows: number
    cols: number
    className: string
    name: string
    value: string
    onChanges: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export type nearYouProps = {
    filteredItems: Items[]
}

export type errorProps = {
    text: string | undefined
    className: string
}