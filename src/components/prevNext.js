import React from 'react';
import { Link } from 'gatsby';
import PrevNextStyles from '../styles/prevNextStyles.js';

const PrevNext = (props) => {
    const { previous, next } = props

        return (
            <PrevNextStyles>
            <ul
            style={{
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'space-between',
                listStyle:'none',
                padding: '0',
            }}
            >
                {previous && 
                <li class="previous">
                    <Link style= {{color: '#343a40'}} to={previous.slug}>
                    <span><strong>← Previous Post</strong></span>{" "} <br/>
                    {previous.title}
                    </Link></li>}

                {next && 
                <li class="next">
                    <Link style= {{color: '#343a40'}} to={next.slug}>
                    <span><strong>Next Post → </strong></span>{" "} <br/> 
                    {next.title}
                    </Link></li>}
            </ul>
            </PrevNextStyles>
        )
}

export default PrevNext;