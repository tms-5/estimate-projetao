import TextField from '@mui/material/TextField';

export default function InputProjectRegister(props: {
  type?: string;
  class?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  value?: any;
  disabled?: boolean;
  name?: string;
}) {
  return (
    <>
      <p style={{ marginBottom: '4px', width: '100%'}}>{props.name}</p>
      <input style={{ height: '0.1px', borderRadius: '4px', border: '1px solid #CDE1FF', width: '80%', filter: 'none' }}/>
    </>
  );
}
