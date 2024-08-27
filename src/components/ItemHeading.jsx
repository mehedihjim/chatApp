import { CiMenuKebab } from "react-icons/ci";

const ItemHeading = ({ title }) => {
    return (
        <div className="flex justify-between font-semibold text-xl text-textColor mb-[25px] sticky">
            <h4>{title}</h4>
            <CiMenuKebab className="text-2xl" />
        </div>
    )
}

export default ItemHeading
