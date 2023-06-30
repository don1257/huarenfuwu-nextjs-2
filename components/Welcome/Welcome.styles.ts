import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
  sponsors: {
    display: 'grid',
    textAlign: 'center',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 35,
    fontWeight: 900,
    letterSpacing: -2,
    justifyContent: 'center',
    alignItems: 'center',
    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
  blog: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: theme.spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: 1200,
    margin: '0 auto',
  },
}));
