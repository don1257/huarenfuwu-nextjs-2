import { Header, Menu, Group, Center, Burger, Container, Image, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import useStyles from './Header.styles';

interface HeaderSearchProps {
    links: { link: string; label: string; links: { link: string; label: string }[] }[];
}

export function HeaderMenuColored({ links }: HeaderSearchProps) {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useStyles();

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <a
                          href={link.link}
                          className={classes.link}
                          onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a
              key={link.label}
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        );
    });

    return (
        // <Header height={56} className={classes.header} mb={120}>
        <Header height={102} mb={0}>
            <Container>
                <div className={classes.inner}>
                    <Burger opened />
                    <Image width={100} height={100} src="https://res.cloudinary.com/pory/image/upload/v1676403074/production/public/63e03b6f25e6cd00089f000d/huarenfuwu-logo.png" alt="Random image" />
                    <Group spacing={5} className={classes.links}>
                        {items}
                    </Group>
                    <Burger
                      opened={opened}
                      onClick={toggle}
                      className={classes.burger}
                      size="sm"
                      color="fe6734"
                    />
                    <Group>
                        <Button variant="default">免费发布信息</Button>
                        <Button>捐款</Button>
                    </Group>
                </div>
            </Container>
        </Header>
    );
}
