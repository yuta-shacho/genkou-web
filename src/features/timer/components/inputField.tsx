import { Stack, TextField } from '@mui/material'

interface  InputFieldProps {
    minutes: string,
    seconds: string,
    handleMinutesChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSecondsChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputField = ({minutes,seconds,handleMinutesChange,handleSecondsChange}: InputFieldProps) => {
  return (
    <>
    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
    <TextField
  label="分"
  variant="outlined"
  size='small'
  style={{width: "6%"}}
  value={minutes}
  inputProps={{
    inputMode: "numeric", // モバイルで数字キーボードを表示
    pattern: "[0-9]*",   // 数字のみの入力を促す
  }}
  onChange={handleMinutesChange} // 状態管理
/>

<TextField
  label="秒"
  variant="outlined"
  size='small'
  style={{width: "6%"}}
  value={seconds}
  inputProps={{
    inputMode: "numeric", // モバイルで数字キーボードを表示
    pattern: "[0-9]*",   // 数字のみの入力を促す
  }}
  onChange={handleSecondsChange} // 状態管理
/>
</Stack>
    </>
  )
}

export default InputField