/* eslint-disable*/
import { useIntl } from 'umi';

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
  const intl = useIntl();
  const msg: string = intl.formatMessage({
    id: 'title',
  });
  return {
    fixSiderbar: true,
    fixedHeader: true,
    layout: 'mix',
    navTheme: 'light',
    breakpoint: false,
    headerTheme: 'light',
    contentWidth: 'Fluid',
    defaultCollapsed: true,
    title: msg,
    logo: 'https://www.svgrepo.com/show/36178/universe.svg',
    menu: {
      locale: true,
    },
    appList: [
      {
        icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        title: 'Github',
        desc: 'Github Repo',
        url: 'https://github.com/blue-space-apps',
        target: '_blank',
      },
    ],
  };
};
