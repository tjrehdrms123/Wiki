import React from 'react';

import { Helmet } from 'react-helmet';

import sample from '../assets/img/sample.png';

const Meta = (props) => {
    return (
        <Helmet>
            <meta charset='utf-8' />
            <title>{props.title}</title>
            {/* SEO 태그 */}
            <meta name='description' content={props.description} />
            <meta name='keywords' content={props.keywords} />
            <meta name='author' content={props.author} />
            <meta property='og:type' content='website' />
            <meta property='og:title' content={props.title} />
            <meta property='og:description' content={props.description} />
            <meta property='og:image' content={props.image} />
            <meta property='og:url' content={props.url} />

            <link rel="shortcut icon" href={props.image} type="image/png" />
            <link rel="icon" href={props.image} type="image/png" />

            {/* 추가적으로 적용해야할 외부 js나 css로 여기서 명시할 수 있다. */}
            <script src="//code.jquery.com/jquery-3.5.1.min.js"></script>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        </Helmet>
    );
};

Meta.defaultProps = {
    title: 'React Bootstrap Example',
    description: 'React.js에 Bootstrap 적용하기 예제 입니다.',
    keywords: 'React,Bootstrap',
    author: '호쌤',
    image: sample,
    url: window.location.href
};

export default Meta;
