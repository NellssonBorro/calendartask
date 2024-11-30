

function Header(){
    return (
        <>
            <div className="bg-red-300 p-2 hidden sm:flex justify-between">
                <div className="bg-blue-400 p-2 rounded-full">
                    Logo
                </div>
                <div className='flex justify-between gap-24 '>
                    <div className="bg-yellow-300 grid grid-cols-4 gap-2 justify-around">
                        <div className="bg-slate-400 rounded-lg p-1 grow">Subjects</div>
                        <div className="bg-slate-400 rounded-lg p-1 grow">Classes</div>
                        <div className="bg-slate-400 rounded-lg p-1 grow">Print</div>
                        <div className="bg-slate-400 rounded-lg p-1 grow">Settings</div>
                    </div>
                    <div className="bg-purple-500 p-1 px-8  border-cyan-500">
                        User
                    </div>
                </div>
                
            </div>
            <div className="bg-red-300 p-2 flex flex-col sm:hidden justify-between">
            <div className='flex  justify-between  '> 
                <div className="bg-blue-400 p-2 rounded-full">
                    Logo
                </div>
                <div className="bg-purple-500 p-1 px-8  border-cyan-500">
                    User
                </div>
            </div>        
                <div className="bg-yellow-300 grid grid-cols-4 mt-1 gap-2 justify-around">
                    <div className="bg-slate-400 rounded-lg p-1 ">Subjects</div>
                    <div className="bg-slate-400 rounded-lg p-1 ">Classes</div>
                    <div className="bg-slate-400 rounded-lg p-1 ">Print</div>
                    <div className="bg-slate-400 rounded-lg p-1 ">Settings</div>
                </div>
            </div>
        </>
    )
    
}

export default Header