import React, {useEffect} from 'react'

const Title = ({count}) => {
    useEffect(() => {
        document.title = `Count ${count}`;
    }, [count])
    return (
        <div>Title</div>
    )
}

export default Title