import { useState } from "react";
import Button from './button'


const Blocks = () => {
    const [blocks, setBlocks] = useState([])

    const handleNewBlock = () => {
        setBlocks([...blocks, blocks.length + 1])
    }

    return(
        <>
            <Button handle={handleNewBlock} text="New Block"/>
            <div>
                {blocks.map((block, index) => (
                    <div key={index} style={blockStyle}> 
                        Block {block}
                    </div>
                ))}
           </div>
        </>
    )
}

const blockStyle = {
    margin: '10px',
    padding: '10px',
    border: '1px solid blue',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0'
}


export default Blocks;