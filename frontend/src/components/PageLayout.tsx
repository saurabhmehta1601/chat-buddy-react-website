import React from 'react'

interface IProps {
    children: React.ReactNode
}

const PageLayout = ({ children }: IProps) => {
    return (
        <div className="h-screen max-w-3xl mx-auto flex flex-col ">
            {children}
        </div>
    )
}

export default PageLayout