import React from 'react'
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import HighlightIcon from '@mui/icons-material/Highlight';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import MenuIcon from '@mui/icons-material/Menu';
function TextIcons() {
    return (
        <div>
            <div className='container'>
                <div className='d-flex'>
                    <div className='m-2'>
                        <FormatBoldIcon />
                    </div>
                    <div className='m-2'>
                        <FormatItalicIcon />
                    </div>
                    <div className='m-1'>
                        <HighlightIcon />
                    </div>
                    <div className='m-2'>
                        <FormatQuoteIcon />
                    </div>
                    <div className='m-2'>
                        <UploadFileIcon />
                    </div>
                    <div className='m-2'>
                        <InsertPhotoIcon />
                    </div>
                    <div className='m-2'>
                        <MenuIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextIcons
