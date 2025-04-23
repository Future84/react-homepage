import style from "./Footer.module.css"


const Footer = () => {

    const miitLicense: string | null | undefined = import.meta.env.VITE_MIIT_LICENSE;

    if (miitLicense) {
        return (
            <div className={style.footer_wrapper}>
                <div className={style.footer_container}>
                    <div className={style.footer_miit}>
                        <a href="https://beian.miit.gov.cn" target="_blank">{miitLicense}</a> | <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33052202000779">浙公网安备 33052202000779号</a>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }

}

export default Footer