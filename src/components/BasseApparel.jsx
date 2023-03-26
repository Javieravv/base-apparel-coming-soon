
export const BasseApparel = () => {
    return (
        <section className="section-main">
            <div className="img-logo">
                <img src="/images/logo.svg" alt="Logo" />
            </div>
            <div className="img-heroe">
                <img src="/images/hero-mobile.jpg" alt="Héroe mobile" />
            </div>
            <article className="base-form">
                <p className="title-base">
                    WE'RE <span>COMING SOON</span>
                </p>
                <p className="paragraph-form">
                    Hellow fellow shappers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launc deals.
                </p>
                <div className="form-base">
                    <input type="email" name="email" id="email-form" placeholder="Email Address."/>
                    <div className="image-form">
                        <img src="public/images/icon-arrow.svg" alt="" />
                    </div>
                </div>
            </article>
        </section>
    )
}
