import ReactModal from 'react-modal';

const ModalVideoPlayer = ({openState, closeModal ,url}:any) => {

    ReactModal.setAppElement('#root')

    const setUrl = (url:string):string => {
        if(!url && typeof url !== 'string'){
            return ''
        }else {
            return url
        }
            
        
    }
    

    return(
        <ReactModal
            parentSelector={() => document.querySelector('#root') as HTMLElement}       
            isOpen={openState}
            style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.445)'
                },
                content: {
                  background: 'black',
                  borderRadius:'16px',
                  border:'none',
                  padding: '1rem',
                  height: '80%',
                  top: '10%'
                }
              }}>
                <div className='w-full h-full flex flex-col bg-black rounded-2xl'>
                    <div className='w-full flex justify-end'>
                        <button className='text-white' onClick={()=>closeModal()}>Cerrar</button>
                    </div>
                    
                    <div className='w-full h-full'>
                        <iframe height={'100%'} width={'100%'} src={setUrl(url)}></iframe>
                    </div>
                    
                </div>

        </ReactModal>
    )
}

export default ModalVideoPlayer;