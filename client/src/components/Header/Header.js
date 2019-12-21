import React, { useEffect, useRef } from 'react';
import Helmet from 'react-helmet';

const Header = ({ children, headerText, headingLevel = 1 }) => {

    const H = `h${headingLevel}`

    const headingRef = useRef(null)

    useEffect(() => {
        headingRef.current.focus();
    }, []);

    return (
        <section>
            <Helmet>
                <title>{`${headerText} | The Grid`}</title>
            </Helmet>
            <H ref={headingRef} tabIndex="-1">
                {headerText}
            </H>
            {children}
        </section>
    );
}

export default Header;