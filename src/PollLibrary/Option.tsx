import React, { useState } from 'react'
import './poll.css'

type OptionFields = {
    label: string | React.ReactNode
    value: string
    votes: number
}

type OptionProp = {
    option: OptionFields
    setPollOptions: any
    options: OptionFields[]
    setVote: any
    vote: boolean
    viewModeOptionCss?: React.CSSProperties | undefined
    editModeOptionCss?: React.CSSProperties | undefined
}

function Option({ option, setPollOptions, options, setVote, vote, viewModeOptionCss, editModeOptionCss }: OptionProp) {

    const [selectedOptionValue, setSelectedOptionValue] = useState<string>('')

    function handleVoteOption(optionValue: string) {
        if (!vote) {
            setSelectedOptionValue(optionValue)
            let pollOptions = [...options]
            let newPollOptions: OptionFields[] = []
            pollOptions.forEach((option) => {
                if (option.value === optionValue) {
                    const newOption = {
                        ...option,
                        votes: option.votes + 1
                    }
                    newPollOptions.push(newOption)
                } else {
                    newPollOptions.push(option)
                }
            })
            setPollOptions(newPollOptions)
            setVote(true)
        }
    }



    return (
        <div className='poll-option' onClick={() => handleVoteOption(option.value)} style={editModeOptionCss !== undefined && option.value !== selectedOptionValue ? editModeOptionCss : (viewModeOptionCss !== undefined && vote && option.value === selectedOptionValue ? viewModeOptionCss : {})}>
            <span>{option.label}</span>
            <span style={{ padding: '0 0.5rem', float: 'right' }}>{vote && option.votes}</span>
        </div>
    )
}

export default Option