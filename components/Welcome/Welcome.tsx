import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        欢迎{' '}
        <Text inherit variant="gradient" component="span">
          华人服务中心
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 800 }} mx="auto" mt="xl">
          我们的服务是您与社区联系的关键！
          <br /><br />
          我们的使命是促进个人之间的相互帮助和支持，推崇给予和爱的价值观。{'\n'}
          <br />
          除了满足全球华人的需求外，我们的服务也扩展到在美国出生的华裔后代（华裔美国人）。{'\n'}
          <br />
          此外，我们致力于为社区提供全面支持，为在美国生活的各个方面提供有价值的资源和指导。{'\n'}
          <br />
          无论是在应对当地制度和机构方面的实用建议，还是关于文化融合的信息，或者是协助获取基本服务，我们的目标是使个人在美国的生活中得以发展和蓬勃。{'\n'}
           {' '}
        {/*<Anchor href="https://mantine.dev/guides/next/" size="lg">*/}
        {/*  this guide*/}
        {/*</Anchor>*/}
        {/*. To get started edit index.tsx file.*/}
      </Text>
    </>
  );
}
