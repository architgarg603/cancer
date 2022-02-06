import React from 'react';
import style from './result.module.scss';
function Result() {
    return <>
        <div className={style.wrapper}>
            <div className={style.left}>
                <div className={style.head}>Results</div>
                <div className={style.u1}></div>
                <div className={style.u2}></div>
            </div>
            <div className={style.right}></div>
        </div>;
        <div className={style.footer}></div>
    </>
}

export default Result;
