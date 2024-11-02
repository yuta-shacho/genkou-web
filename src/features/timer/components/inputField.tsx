import { Stack, TextField } from '@mui/material'

interface InputFieldProps {
  minutes: string
  seconds: string
  handleMinutesChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSecondsChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function InputField({ minutes, seconds, handleMinutesChange, handleSecondsChange }: InputFieldProps) {
  return (

    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
      <TextField
        label="分"
        variant="outlined"
        size="small"
        style={{ width: '6%' }}
        value={minutes}
        inputProps={{
          inputMode: 'numeric',
          pattern: '[0-9]*',
        }}
        onChange={handleMinutesChange}
      />

      <TextField
        label="秒"
        variant="outlined"
        size="small"
        style={{ width: '6%' }}
        value={seconds}
        inputProps={{
          inputMode: 'numeric',
          pattern: '[0-9]*',
        }}
        onChange={handleSecondsChange}
      />
    </Stack>

  )
}

export default InputField
