// export const TeamImages = ({ users, className }) => {
//     console.log(className)
//     return <div className={`flex items-center ${className}`}>
//         {
//             users.map((user, index) => <div className={`${index > 0 && '-ml-[10px]'} left-0 z-10 border-2 border-slate-300 rounded-full`}>
//                 <img src={user.image} alt={user.name} className="rounded-full w-10 h-10" />
//             </div>)
//         }
//     </div>
// }

"use client"

export const TeamImages = ({ users, classNames }) => {
    console.log("-----", classNames)
    return <div className={`flex items-center`}>
        {
            users.map((user, index) => <div className={`${index > 0 && '-ml-[10px]'} left-0 z-10 border-2 border-slate-300 rounded-full`}>
                <img src={user.image} alt={user.name} className={`rounded-full ${classNames ? classNames : "w-10 h-10"}`} />
            </div>)
        }
    </div>
}