import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { createSvgIcon } from '@mui/material/utils';
import Stack from '@mui/material/Stack';

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,'Home',
)

export default function Header() {
  return (
    <div >
      <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>
    <Box  
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button href="/">
          <HomeIcon color="primary" />
        </Button>
        <Button href="/signup">SIGN</Button>
        <Button href="/login">LOGIN</Button>
        <Button href="/mypage">MYPAGE</Button>
        <Button href="/review">Review</Button>
      </ButtonGroup>
    </Box>
    </Stack>
    </div>
  );
}