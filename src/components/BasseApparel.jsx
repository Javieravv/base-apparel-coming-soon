// <img src="/images/hero-mobile.jpg" alt="Héroe mobile" />

import { useState } from "react"

const validarEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


export const BasseApparel = () => {
    const [visibleError, setVisibleError] = useState(true)
    const [valueEmail, setValueEmail] = useState('')

    const handleClickBottom = () => {
        // const isValidEmail = validarEmail(valueEmail)
        // setVisibleError (!isValidEmail)
        const isValidEmail = validarEmail(valueEmail)
        setVisibleError (isValidEmail)
        console.log ('VALOR DEL CORREO: ', valueEmail)
    }

    const handleChangeEmail = (e) => {
        setValueEmail(e.target.value)
    }

    return (
        <section className="section-main">
            <div className="img-logo">
                <img src="/images/logo.svg" alt="Logo" />
            </div>
            <div className="img-heroe">
                
            </div>
            <article className="base-form">
                <p className="title-base">
                    WE'RE <br></br><span>COMING<br></br>SOON</span>
                </p>
                <p className="paragraph-form">
                    Hellow fellow shappers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launc deals.
                </p>
                <div className="form-base">
                    <input 
                        className="input-form"
                        type="email" 
                        name="valueEmail" 
                        id="email-form" 
                        placeholder="Email Address."
                        onChange={handleChangeEmail}
                    />
                    <button
                        className="boton-form"
                        onClick={handleClickBottom}
                    ><img src="/images/icon-arrow.svg" alt="" />
                    </button>
                    {
                        (!visibleError && (
                            <>
                                <div className="image-error">
                                    <img src="/images/icon-error.svg" alt="" />
                                </div>
                                <p className="error-message">Please provide a valid email</p>
                            </>
                        ))
                    }
                    
                </div>
            </article>
        </section>
    )
}
