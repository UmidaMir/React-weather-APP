import React from 'react'
import ContentLoader from 'react-content-loader'
import { useSelector } from 'react-redux'

const Loader = () => {
    const { theme } = useSelector(state => state)
    return (
        <>
            <ContentLoader
                speed={2}
                width={1230}
                height={312}
                viewBox="0 0 1230 312"
                backgroundColor={theme === 'light' ? "#f3f3f3" : '#171212'}
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="20" ry="20" width="400" height="312" />
                <rect x="450" y="0" rx="20" ry="20" width="750" height="312" />
            </ContentLoader>
            <ContentLoader
                speed={2}
                width={1230}
                height={312}
                viewBox="0 0 1230 312"
                backgroundColor={theme === 'light' ? "#f3f3f3" : '#171212'}
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="20" ry="20" width="1200" height="217" />
            </ContentLoader>
        </>
    )
}

export default Loader