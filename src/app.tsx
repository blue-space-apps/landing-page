import { FormattedMessage } from 'umi';

export async function getInitialState(): Promise<{
  name: string;
  avatar: string;
}> {
  return {
    name: 'Hi',
    avatar: 'https://www.svgrepo.com/show/33660/astronaut.svg',
  };
}

export const layout = () => {
  return {
    fixSiderbar: true,
    layout: 'mix',
    navTheme: 'light',
    colorPrimary: '#1677FF',
    contentWidth: 'Fluid',
    appList: [
      {
        icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        title: 'Github',
        desc: 'Github Repo',
        url: 'https://github.com/blue-space-apps/',
      },
    ],
    title: <FormattedMessage id="title" />,
    splitMenus: true,
    logo: 'https://www.svgrepo.com/show/36178/universe.svg',
    menu: {
      locale: true,
    },
  };
};
