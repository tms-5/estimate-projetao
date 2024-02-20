import * as React from 'react';
import { MuiChipsInput } from "mui-chips-input";

interface ChipData {
  onChangeValues: (newValue: string[]) => void;
}

export default function ChipsArray({onChangeValues}: ChipData) {
  const [value, setValue] = React.useState<Array<string>>([]);
  const handleChange = (newValue: string[]) => {
    setValue(newValue);
    onChangeValues(newValue);
  };

  return (
  <>
  <MuiChipsInput
        clearInputOnBlur
        value={value}
        onChange={handleChange}
        hiddenLabel
        sx={{ width: '100%', '& .MuiChip-root': { height: 24 }}}
        size='small'
        placeholder=''
        inputProps={{ style: { fontSize: '0.7rem' } }}
      />
    </>
  );
}