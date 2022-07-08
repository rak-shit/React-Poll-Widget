import React, { ReactNode, useState } from 'react'
import Option from './Option'
import './poll.css'

type OptionProps = {
    label: string | ReactNode
    value: string
    votes: number
}

type PollProps = {
    description: string | ReactNode
    options: OptionProps[]
    style?: React.CSSProperties
    viewModeOptionCss?: React.CSSProperties | undefined
    editModeOptionCss?: React.CSSProperties | undefined
}

function PollWidget({ description, options, style, viewModeOptionCss, editModeOptionCss }: PollProps) {
    const [pollOptions, setPollOptions] = useState<OptionProps[]>(options)
    const [vote, setVote] = useState<boolean>(false)
    return (
        <div className={'poll-wrapper'} style={style}>
            <div className={'poll-description'}>
                {description}
            </div>
            <div className={'poll-options'}>
                {
                    pollOptions?.map((option, key) => (
                        <Option
                            option={option}
                            setPollOptions={setPollOptions}
                            options={pollOptions}
                            setVote={setVote}
                            vote={vote}
                            key={key}
                            viewModeOptionCss={viewModeOptionCss}
                            editModeOptionCss={editModeOptionCss}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default PollWidget