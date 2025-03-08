import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff88',
    },
    background: {
      default: '#121212',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#888888',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: '#00ff88',
          color: '#00ff88',
          '&:hover': {
            borderColor: '#00ff88',
            backgroundColor: 'rgba(0, 255, 136, 0.1)',
          },
        },
        contained: {
          backgroundColor: '#00ff88',
          color: '#121212',
          '&:hover': {
            backgroundColor: '#00cc6a',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            color: '#ffffff',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#333333',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#00ff88',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#00ff88',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#888888',
            '&.Mui-focused': {
              color: '#00ff88',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a',
          borderBottom: '1px solid #333333',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a',
          border: '1px solid #333333',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#00ff88',
          '&:hover': {
            backgroundColor: 'rgba(0, 255, 136, 0.1)',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: '#ffffff',
        },
        h2: {
          color: '#00ff88',
        },
        h3: {
          color: '#ffffff',
        },
        body1: {
          color: '#888888',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#333333',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a',
        },
      },
    },
  },
}); 