import React from 'react';
import { Theme } from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import RemoveCircle from '@mui/icons-material/RemoveCircle';

const createThemeComponents = (theme: Theme) => ({
  MuiAccordion: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius,
        marginBottom: theme.spacing(3),
        '&.Mui-expanded:last-of-type': {
          marginBottom: theme.spacing(3),
        },
        '&:before': {
          content: 'none',
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: theme.spacing(1, 3, 3),
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        padding: theme.spacing(3),
      },
      content: {
        margin: 0,
      },
    },
  },
  MuiAppBar: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: {
        '&.MuiAppBar-colorDefault': {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        },
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        color: 'inherit',
        backgroundColor: theme.palette.background.default,
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        padding: '16px 24px',
        textTransform: 'none' as any,
        '&.Choose-plan': {
          color: '#A661FF',
          backgroundColor: '#f3eefe',
          paddingTop: '8px',
          paddingBottom: '8px',
          marginTop: '8px',
          borderRadius: '4px',
        },
        '&.Choose-plan-bottom': {
          color: '#A661FF',
          backgroundColor: '#fad3c6',
          paddingTop: '8px',
          paddingBottom: '8px',
          marginTop: '8px',
          borderRadius: '4px',
        },
        '&.Contact-button': {
          color: '#A661FF',
          paddingTop: '8px',
          paddingBottom: '8px',
          borderRadius: '4px',
        },
      },
      label: {
        fontWeight: theme.typography.fontWeightMedium,
      },
      text: {
        padding: '16px 16px',
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true, // No more ripple, on the whole application
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        justifyContent: 'flex-end',
        padding: '0 24px 24px 24px',
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: theme.spacing(3),
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: '24px 24px 0 24px',
      },
    },
  },
  MuiCheckbox: {
    defaultProps: {
      checkedIcon: <CheckCircle />,
      indeterminateIcon: <RemoveCircle />,
      icon: <RadioButtonUnchecked />,
    },
  },
  MuiChip: {
    styleOverrides: {
      label: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: 24,
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: 24,
        '& .MuiTypography-root': {
          fontSize: '1.25rem',
        },
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        border: 'none; !important',
      },
    },
  },
  MuiFab: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        lineHeight: 'inherit',
        textTransform: 'none' as any,
        '&.MuiFab-secondary': {
          color: theme.palette.text.primary,
        },
      },
    },
  },
  MuiFilledInput: {
    defaultProps: {
      disableUnderline: true,
    },
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius,
      },
    },
  },
  MuiInternalClock: {
    styleOverrides: {
      clock: {
        backgroundColor: theme.palette.background.default,
      },
    },
  },
  MuiInternalDateTimePickerTabs: {
    styleOverrides: {
      tabs: {
        backgroundColor: theme.palette.background.default,
        '& MuiTabs-indicator': {
          height: 0,
        },
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        height: 12,
      },
    },
  },
  MuiList: {
    defaultProps: {
      disablePadding: true,
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        paddingTop: 12,
        paddingBottom: 12,
        color: `${theme.palette.text.primary}`,
        '&.Mui-listItem-spec.active': {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        },
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 40,
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      list: {
        paddingRight: 8,
        paddingLeft: 8,
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        paddingTop: 12,
        paddingBottom: 12,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        '&:-webkit-autofill': {
          WebkitBoxShadow: `0 0 0 30px ${theme.palette.background.paper} inset`,
        },
      },
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: {
        backgroundImage: 'none',
      },
    },
  },
  MuiRadio: {
    defaultProps: {
      color: 'primary' as const,
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        borderRadius: '50rem',
        padding: '10px 16px',
        maxWidth: 'initial !important',
        minHeight: 'initial !important',
        minWidth: 'initial !important',
        textTransform: 'none' as any,
        '&.active': {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        },
      },
    },
  },
  MuiTable: {
    styleOverrides: {
      root: {
        '&.MuiTable-spec tbody': {
          border: 'solid 1px #000',
        },
        '&.MuiTable-spec tr:first-of-type td:first-of-type': {
          borderTopLeftRadius: '10px',
        },
        '&.MuiTable-spec tr:first-of-type td:last-child': {
          borderTopRightRadius: '10px',
        },
        '&.MuiTable-spec tr:nth-of-type(4) td:first-of-type': {
          borderBottomLeftRadius: '10px',
        },
        '&.MuiTable-spec tr:nth-of-type(4) td:last-child': {
          borderBottomRightRadius: '10px',
        },
        '&.MuiTable-spec tr:first-of-type td': {
          borderTop: `4px solid ${theme.palette.secondary.light}`,
        },
        '&.MuiTable-spec tr td:last-child': {
          borderRight: `4px solid ${theme.palette.secondary.light}`,
        },
        '&.MuiTable-spec tr:last-child td:last-child': {
          border: 'none',
        },
        '&.MuiTable-spec tr:nth-of-type(4) td': {
          borderBottom: `4px solid ${theme.palette.secondary.light}`,
        },
        '&.MuiTable-spec tr td:first-of-type': {
          borderLeft: `4px solid ${theme.palette.secondary.light}`,
        },
        '&.MuiTable-spec tr:last-child td': {
          border: 'none',
        },
        '&.MuiTable-spec tr th': {
          verticalAlign: 'top',
        },
        '&.MuiTable-spec tr th:first-of-type': {
          padding: '0px',
        },
        '&.MuiTable-spec tr th:first-of-type div': {
          backgroundColor: '#f9f9fb',
          borderRadius: '10px',
          padding: '10px 0px 10px 0px',
        },
        '&.MuiTable-spec tr td': {
          borderBottom: '1px solid #f9f9fb',
          borderRight: '1px solid #f9f9fb',
        },
        '&.MuiTable-spec tr th:nth-of-type(4)': {
          backgroundColor: theme.palette.secondary.light,
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        },
        '&.MuiTable-spec tr:last-child td:nth-of-type(4)': {
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
        },
        '&.MuiTable-spec tr td:nth-of-type(4)': {
          backgroundColor: theme.palette.secondary.light,
        },
      },
    },
  },
  MuiTableBody: {
    styleOverrides: {
      root: {
        '&.MuiTableBody-spec': {
          border: '1px solid black',
        },
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        '&.MuiTableRow-spec:hover td': {
          background: theme.palette.background.paper,
          color: theme.palette.secondary.light,
        },
        '&.MuiTableRow-spec:hover td:first-of-type': {
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
        },
        '&.MuiTableRow-spec:hover td:last-of-type': {
          borderTopRightRadius: '10px',
          borderBottomRightRadius: '10px',
        },
        '&.MuiTableRow-spec:hover td:nth-of-type(4)': {
          background: theme.palette.background.paper,
        },
        '&.MuiTableRow-spec:hover td:nth-of-type(4) svg': {
          color: theme.palette.secondary.light,
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        padding: '24px 16px',
        '&.MuiTabCell-spec': {
          backgroundColor: theme.palette.secondary.light,
          color: 'white',
        },
      },
      sizeSmall: {
        padding: '12px 16px',
      },
    },
  },
  MuiTimeline: {
    styleOverrides: {
      root: {
        padding: '0 0 0 16px',
      },
    },
  },
  MuiTimelineContent: {
    styleOverrides: {
      root: {
        padding: '12px 16px',
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        color: theme.palette.text.secondary,
        borderRadius: '12px !important',
        border: 'none',
        textTransform: 'none' as any,
        '&.Mui-selected': {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        },
      },
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.background.default,
        padding: 5,
      },
    },
  },
});

export default createThemeComponents;
