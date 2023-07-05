import React from 'react';
import { Burger, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const BurgerMenu = () => {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <div>
            <Menu opened={opened}>
                <Menu.Target>
                    <Burger
                      opened={opened}
                      onClick={toggle}
                    />
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item>Hello</Menu.Item>
                    <Menu.Item>World</Menu.Item>
                    <Menu.Item>Mantine</Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </div>
    );
};

export default BurgerMenu;
