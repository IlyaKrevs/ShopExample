import React from 'react';
import classes from './PageCountContainer.module.css'
import CountItem from './CountItem';

const PageCountContainer = (props) => {



    return (
        <div {...props} className={classes.countContainer}>
            {props.createCounts.map(item =>
                <CountItem onClick={(e) => props.setCurrentPage(item)} children={item} key={item} currentPage={props.currentPage} />
            )
            }
        </div>
    );
};

export default PageCountContainer;