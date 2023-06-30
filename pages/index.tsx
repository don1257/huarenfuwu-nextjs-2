import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderMenuColored } from '../components/Header/Header';

export default function HomePage() {
    const HeaderLink = [
        {
            link: "https://www.example1.com",
            label: "Jianping is",
            links: [
                {
                    link: "https://www.example1.com/subpage1",
                    label: "Subpage 1",
                },
                {
                    link: "https://www.example1.com/subpage2",
                    label: "Subpage 2",
                },
            ],
        },
        {
            link: "https://www.example2.com",
            label: "Hotpot noodle soup",
            links: [
                {
                    link: "https://www.example2.com/subpage1",
                    label: "Subpage 1",
                },
                {
                    link: "https://www.example2.com/subpage2",
                    label: "Subpage 2",
                },
            ],
        },
    ];

    return (
    <>
      <HeaderMenuColored links={HeaderLink} />
      <Welcome />
    </>
  );
}
