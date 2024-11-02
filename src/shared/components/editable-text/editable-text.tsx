import { TextField, Typography } from '@mui/material'
import { type FC, useRef, useState } from 'react'

export interface EditableTextProps {
  initial?: string
  save: (newText: string) => void
}

export const EditableText: FC<EditableTextProps> = ({ initial, save }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(initial ?? '')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleTextClick = () => {
    setIsEditing(true)
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }

  const handleBlur = () => {
    setIsEditing(false)
    if (text !== initial) {
      save(text)
    }
  }

  return (
    <div>
      {isEditing
        ? (
            <TextField
              inputRef={inputRef}
              value={text}
              onChange={e => setText(e.target.value)}
              onBlur={handleBlur}
              placeholder="クリックして編集"
              variant="standard"
              fullWidth
            />
          )
        : (
            <Typography
              onClick={handleTextClick}
              maxWidth="100%"
              sx={{ cursor: 'pointer', opacity: text ? 1 : 0.4, textAlign: 'center' }}
              noWrap
            >
              {text || 'クリックして編集'}
            </Typography>
          )}
    </div>
  )
}
