export const profile: profile = {
    sitename: "未来",
    names: ["未来°", "这是未来呐", "这是未来呐"],
    description: "未来是一个充满可能性的地方，未来的你会感谢现在努力的自己。",
    image: "https://cravatar.com/avatar/23c51fce715e221bb371b4bd2437d8bc?s=512",
    socialLinks: {
        // github: "https://github.com/KumaKorin",
        // youtube: "https://www.youtube.com/@KumaKorin",
        bilibili: "https://space.bilibili.com/204818057",
        // telegram: "https://t.me/KumaKorin",
        email: "mailto:support@wenuu.cn"
    }
};

export const links: links[] = [
    {
        title: "KumaKorin",
        link: "https://korin.im",
        avatar: "https://m1.miaomc.cn/uploads/20210623_b735dde7c665d.jpeg"
    },
    {
        title: "PageGithub",
        subtitle: "Design by KumaKorin",
        link: "https://github.com/KumaKorin/react-homepage",
        avatar: "https://avatars.githubusercontent.com/u/49864285?v=4"
    }
];

interface profile {
    sitename: string,
    names: string[],
    description: string,
    image: string,
    socialLinks: object
};

interface links {
    title: string,
    avatar: string,
    subtitle?: string,
    link: string,
}