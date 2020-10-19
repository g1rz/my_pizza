import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <circle cx="130" cy="122" r="120" />
        <rect x="11" y="249" rx="4" ry="4" width="240" height="21" />
        <rect x="9" y="281" rx="6" ry="6" width="240" height="32" />
        <rect x="9" y="329" rx="3" ry="3" width="85" height="26" />
        <rect x="113" y="320" rx="16" ry="16" width="133" height="43" />
    </ContentLoader>
);

export default LoadingBlock;
