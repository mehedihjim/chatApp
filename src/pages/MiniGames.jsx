import { games } from "../constant";

const MiniGames = () => {

    return (
        <div className="w-full overflow-hidden py-9 pr-[46px]"> {/* Ensure no overflow */}
            <div className="w-full py-5">
                <h2 className="font-medium text-textColor text-2xl mb-4">Top Picks for you</h2>
                <div>
                    {games.map((game) => (
                        <div key={game.name} className="px-3"> {/* Added padding to create gap */}
                            <div className="w-[210px] h-[360px] bg-red-300 flex flex-col items-center gap-2">
                                <img src={game.img} alt={game.name} className="w-full h-full object-cover" />
                                <h3 className="text-center">{game.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MiniGames;
