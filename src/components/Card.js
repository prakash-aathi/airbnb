
const Card = ({img,rating,reviewcount,country,title,price}) => {
    return (
        <div class="w-44 flex-shrink-0">
            <img src={`../image/${img}`}  class="w-full h-60 rounded-lg" alt="kath"></img>
            <div class="flex items-center text-xs">
                <img src='../image/star.png' class="w-6" alt='star'/>
                <span>{ rating }</span>
                <span class=" text-gray-400"> ({reviewcount}) .</span>
                <span class="text-gray-400">{ country}</span>
            </div>
            <p class="pt-2">{ title}</p>
            <p class="pt-3"> <span class=" font-bold">From ${ price}</span> / person</p>
        </div>
    )
}
export default Card;

