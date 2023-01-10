import React from 'react'

interface IProps {
    prompt: string,
    setPrompt: React.Dispatch<React.SetStateAction<string>>
    onSubmit: (e: React.FormEvent) => void
}

const PromptSubmitForm = (props: IProps) => {
    return (
        <form
            onSubmit={(e) => props.onSubmit(e)}
            action=""
            className="flex bg-white rounded-md w-full ring ">
            <input
                type="text"
                name="prompt"
                value={props.prompt}
                onChange={(e) => props.setPrompt(e.target.value)}
                className="w-full outline-none p-2 bg-transparent "
                autoComplete='off'
            />
            <button
                className="p-2 "
                type='submit'
                name="submit"
            >
                <img src="/assets/icon-send-message.png" width={32} height={32} />
            </button>

        </form>
    )
}

export default PromptSubmitForm