
export type inputProps = {
    title: string
    type: string
    className: string
    name: string
    value: string
    onChanges: (event: React.ChangeEvent<HTMLInputElement>) => void
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
