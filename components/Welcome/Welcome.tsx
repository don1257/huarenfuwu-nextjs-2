import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';
import { WelcomeBlogCard } from '../WelcomeBlogCards/WelcomeBlogCard';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center">
          {' '}
        <Text inherit variant="gradient" component="span">
            华人服务中心欢迎您
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 800 }} mx="auto" mt="xl">
          我们的服务是您与社区联系的关键！
          <br /><br />
          我们的使命是促进个人间的互助和支持，弘扬给予和爱的价值观。{'\n'}
          <br />
          我们致力于为社区提供全面支持，提供有价值的资源和指导，涵盖当地制度、文化融合和基本服务，旨在促进个人在美国的成长和繁荣。{'\n'}
          <br />
           {' '}
        {/*<Anchor href="https://mantine.dev/guides/next/" size="lg">*/}
        {/*  this guide*/}
        {/*</Anchor>*/}
        {/*. To get started edit index.tsx file.*/}
      </Text>
        <h2 className={classes.sponsors}>Sponsors</h2>
        <div className={classes.blog}>
            <WelcomeBlogCard />
            <WelcomeBlogCard />
            <WelcomeBlogCard />
            <WelcomeBlogCard />
        </div>

    </>
  );
}
