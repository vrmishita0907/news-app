// our-domain.com/news 
// import Link from 'next/link';
import { Fragment } from "react";

function Newspage() {
    return <Fragment>
        <h1>The News page.</h1>
        <ul>
            <li>
                <a href="/news/nextjs-is-a-great-framework">
                    NextJS Is A Great Framework
                </a>
            </li>
            <li>Something Else</li>
        </ul>
    </Fragment>

}
export default Newspage;
