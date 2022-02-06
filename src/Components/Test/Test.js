import React from 'react';
import { Link } from 'react-router-dom';
import style from './Test.module.scss'
function Test() {
    return <div className={style.wrapper}>
        <div className={style.head}>Test</div>

        <div className={style.subHead}>Calculate probablity of cancer with our <br />machine learning based test </div>
        <hr />
        <div className={style.subHead} style={{ marginBottom: "30px" }}>(Select all that apply) </div>
        <label>
            Age
            <input type="number" />
        </label>
        <div className={style.breasts}>
            <div className={style.b}>
                <div className={[style.c, style.c1].join(" ")}>
                </div>
                <input type="checkbox" />
            </div>
            <div className={style.b}>
                <div className={[style.c, style.c2].join(" ")}>
                </div>
                <input type="checkbox" />
            </div>
            <div className={style.b}>
                <div className={[style.c, style.c3].join(" ")}>
                </div>
                <input type="checkbox" />
            </div>
            <div className={style.b}>
                <div className={[style.c, style.c4].join(" ")}>
                </div>
                <input type="checkbox" />
            </div>
            <div className={style.b}>
                <div className={[style.c, style.c5].join(" ")}>
                </div>
                <input type="checkbox" />
            </div>
            <div className={style.b}>
                <div className={[style.c, style.c6].join(" ")}>
                </div>
                <input type="checkbox" />
            </div>
        </div>
        <div className={style.Head}>Additional Info:</div>
        <div className={style.inputs}>
            <label>
                Mitoses
                <input type="text" />
            </label>
            <label>
                Marginal Adhesion
                <input type="text" />
            </label>
            <label>
                Bland Chromatin
                <input type="text" />
            </label>
            <label>
                Uniform Cell Size
                <input type="text" />
            </label>
            <label>
                Normal Nucleoli
                <input type="text" />
            </label>
            <label>
                Uniform Cell shape
                <input type="text" />
            </label>
            <label>
                Bare Nuclei
                <input type="text" />
            </label>
            <label>
                Clump Thickness
                <input type="text" />
            </label>
        </div>
        <Link to="/result">

            <div className={style.submit}>Submit</div>
        </Link>
        <div className={style.footer}></div>
    </div>;
}

export default Test;
