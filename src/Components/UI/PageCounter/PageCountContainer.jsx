import React from 'react';
import classes from './PageCountContainer.module.css'
import CountItem from './CountItem';

const PageCountContainer = (props) => {



    return (
        <div {...props} className={classes.countContainer}>
            {props.createCounts.map(item =>
                <CountItem onClick={(e) => props.setCurrentPages(item)} children={item} key={item} currentPages={props.currentPages} />
            )
            }
        </div>
    );
};

export default PageCountContainer;