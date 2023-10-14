export default function Navbar (){
    return (
        <div className='bg-white text-black flex justify-between p-4 mt-0 '>
            <div className='text-3xl font-bold'>
             <h1>Where in the world ?</h1>
            </div>
            <div className='mode'>
                <button className='outline-none'  style={{
                    width: '180px',
                    height: '29px'
                }}>
                      {/* moon icon */}
                      <h3>Dark Mode</h3>
                </button>
              

            </div>
        </div>
    )
}