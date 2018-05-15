import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
            <Fragment>
                <header className="top">
                    <h1>
                        Catch
                        <span className='ofThe'>
                            <span className='of'>Of</span>
                            <span className="The">The</span>
                        </span>
                        Day
                    </h1>
                    <h3 className='tagline'>
                        <span>{props.tegline}</span>
                    </h3>
                </header>
            </Fragment>
        );

Header.propTypes = {
    tegline: PropTypes.string.isRequired,
};


export default Header;