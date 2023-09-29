import './projectItem.scss'

const ProjectItem = () => {

    const longParagraph = `Engineered an advanced RPC system for a cutting-edge IoT Cloud device, using ZeroMQ for seamless socket connections and Protocol Buffers for rapid data transfer and broad language compatibility.
    Pioneered a Python RPC server, leveraging the
  `;

    return(
        <div className='project-item-container' >
            <div className='project-title-wrapper'>
                <h2 className='project-title'>Currency Conver App & AAAAA</h2>
            </div>
            <div className='project-description-wrapper'>
                <p className='project-description'>{longParagraph}</p>
            </div>
            <div className='project-tech-wrapper'>
                <p className='project-tech'><b>Tech: </b>Python, JS/TS, FireBase, Sass, AAAAAA, Python, JS/TS, FireBase, Sass, AAAAAA, APO</p>
            </div>
            
        </div>
    )
}

export default ProjectItem